import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Mic, Battery } from "lucide-react";

const specs = [
  {
    icon: Cpu,
    title: "ESP32-S3 Core",
    subtitle: "Chip xử lý AI mạnh mẽ",
    description: "Vi xử lý lõi kép 240MHz với khả năng xử lý AI on-device, giảm thiểu độ trễ và bảo mật dữ liệu.",
    stats: [
      { label: "Tốc độ", value: "240 MHz" },
      { label: "RAM", value: "512 KB" },
      { label: "Flash", value: "8 MB" },
    ],
    color: "primary",
  },
  {
    icon: Mic,
    title: "Mic đa hướng",
    subtitle: "Thu âm 360° chất lượng cao",
    description: "Microphone MEMS với khả năng lọc tiếng ồn thông minh, nhận diện giọng nói trong bán kính 5 mét.",
    stats: [
      { label: "Phạm vi", value: "5m" },
      { label: "Lọc nhiễu", value: "AI" },
      { label: "Độ nhạy", value: "-26dB" },
    ],
    color: "secondary",
  },
  {
    icon: Battery,
    title: "Pin Li-ion 5000mAh",
    subtitle: "8 giờ sử dụng liên tục",
    description: "Pin lithium-ion dung lượng cao, hỗ trợ sạc nhanh USB-C và hiển thị mức pin thông minh.",
    stats: [
      { label: "Dung lượng", value: "5000 mAh" },
      { label: "Sạc nhanh", value: "18W" },
      { label: "Thời gian sạc", value: "2.5h" },
    ],
    color: "primary",
  },
];

const TechSpecs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="tech" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Công nghệ <span className="text-gradient-reverse">tiên tiến</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Được trang bị những linh kiện hàng đầu, SmartNovi mang đến hiệu suất vượt trội.
          </p>
        </motion.div>

        {/* Zigzag Layout */}
        <div className="space-y-24">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Icon & Visual */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-48 h-48 md:w-64 md:h-64 rounded-3xl glass flex items-center justify-center ${
                    spec.color === "primary" ? "glow-yellow" : "glow-purple"
                  }`}
                >
                  <spec.icon 
                    className={`w-20 h-20 md:w-28 md:h-28 ${
                      spec.color === "primary" ? "text-primary" : "text-secondary"
                    }`} 
                  />
                  {/* Decorative ring */}
                  <div className={`absolute inset-2 rounded-2xl border ${
                    spec.color === "primary" ? "border-primary/30" : "border-secondary/30"
                  }`} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  spec.color === "primary" 
                    ? "bg-primary/20 text-primary" 
                    : "bg-secondary/20 text-secondary"
                }`}>
                  {spec.subtitle}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {spec.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
                  {spec.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  {spec.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-2xl font-bold ${
                        spec.color === "primary" ? "text-primary" : "text-secondary"
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
