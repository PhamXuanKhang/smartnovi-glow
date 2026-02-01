import { motion } from "framer-motion";
import { Sun, Bot, Music } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const features = [
  {
    icon: Sun,
    title: "Ánh sáng thông minh",
    description: "3 chế độ màu (Warm/Neutral/Cool) tự động điều chỉnh theo thời gian trong ngày, bảo vệ mắt tối đa.",
    color: "primary" as const,
    details: ["Warm: 2700K - Thư giãn", "Neutral: 4000K - Làm việc", "Cool: 6500K - Tập trung"],
  },
  {
    icon: Bot,
    title: "Trợ lý AI Lily",
    description: "Hỏi đáp tiếng Việt tự nhiên, tra cứu thông tin, giải bài tập và trò chuyện thông minh.",
    color: "secondary" as const,
    details: ["Nhận diện giọng nói", "Trả lời tự nhiên", "Hỗ trợ học tập"],
  },
  {
    icon: Music,
    title: "Học tập & Giải trí",
    description: "Loa Bluetooth tích hợp, nhắc nhở lịch học, phát podcast và nhạc không dây.",
    color: "primary" as const,
    details: ["Loa 5W chất lượng cao", "Nhắc lịch thông minh", "Kết nối Bluetooth 5.0"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tính năng <span className="text-gradient">nổi bật</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SmartNovi kết hợp công nghệ AI tiên tiến với thiết kế hiện đại,
            mang đến trải nghiệm học tập hoàn toàn mới.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="h-full group">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${feature.color === "primary"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary/20 text-secondary"
                    }`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${feature.color === "primary" ? "bg-primary" : "bg-secondary"
                        }`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
