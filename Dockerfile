# ===== Build stage =====
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ===== Runtime stage (Node serves static) =====
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Cài "serve" để serve thư mục dist
RUN npm install -g serve

# Copy dist từ build stage
COPY --from=builder /app/dist ./dist

# App listen port 3000 trong container
EXPOSE 3000

# Healthcheck (Node image không có curl sẵn; dùng wget)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null 2>&1 || exit 1

# Serve SPA (single page app)
CMD ["serve", "-s", "dist", "-l", "3000"]