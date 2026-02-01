# SmartNovi-Glow Docker Deployment

## Docker Setup

This project includes Docker configuration for containerized deployment.

### Files Included:
- `Dockerfile`: Multi-stage build for Vite React application
- `docker-compose.yml`: Service configuration joining external `web` network
- `nginx.conf`: Custom nginx configuration for production serving
- `.dockerignore`: Optimized build context ignoring unnecessary files

## Deployment Instructions

### 1. Build and Run with Docker Compose

```bash
# Build and start the service
docker-compose up -d

# Check the status
docker-compose ps

# View logs
docker-compose logs -f
```

### 2. Integration with Reverse Proxy

Since you already have an nginx reverse proxy running with SSL for `smartnovi.tech`, add the following configuration to your existing nginx setup:

```nginx
server {
    listen 443 ssl http2;
    server_name smartnovi.tech;

    # SSL Configuration (point to your existing certificates)
    ssl_certificate /path/to/your/certificate.crt;
    ssl_certificate_key /path/to/your/private.key;
    
    # SSL Security Headers
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;

    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";

    location / {
        proxy_pass http://smartnovi-web:3000;  # Points to the container name and internal port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}

# HTTP to HTTPS redirect
server {
    listen 80;
    server_name smartnovi.tech;
    return 301 https://$server_name$request_uri;
}
```

### 3. Network Configuration

The service joins an external network named `web`. If this network doesn't exist, create it first:

```bash
# Create the external network if it doesn't exist
docker network create web
```

### 4. Verification

After updating your reverse proxy configuration:

1. Reload nginx configuration:
   ```bash
   sudo nginx -t  # Test configuration
   sudo systemctl reload nginx  # Reload without downtime
   ```

2. Access your application at https://smartnovi.tech

## CI/CD Pipeline

This project includes a GitHub Actions workflow for automated deployment.

### Setup Instructions

1. Create the following secrets in your GitHub repository:
   - `HOST`: Your production server hostname/IP
   - `USERNAME`: SSH username for the server
   - `SSH_PRIVATE_KEY`: Private SSH key to access the server

2. The workflow will:
   - Run tests on every push/PR
   - Build and push Docker image to GitHub Container Registry
   - Deploy to production server on merge to main branch

### Workflow Details

- `ci-cd.yml`: Main workflow that handles testing, building, and deployment
- Images are stored in GitHub Container Registry (ghcr.io)
- Automatic deployment occurs on pushes to main/master branch
- The workflow updates the Docker image and restarts the service

## Notes

- The container runs internally on port 3000 and does not bind to the host to avoid conflicts
- The service name `smartnovi-web` is used for internal networking
- Health checks are configured to monitor the service status
- The application is served through nginx for optimal performance and caching