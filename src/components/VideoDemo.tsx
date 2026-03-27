import { motion } from "framer-motion";

const demoVideoUrl = "https://www.youtube.com/embed/jNQXAC9IVRw";

const VideoDemo = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Xem <span className="text-gradient">SmartNovi</span> hoạt động
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Video thực tế về cách SmartNovi nâng cấp không gian học tập mỗi ngày.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden glass border-2 border-primary/30 glow-yellow group">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={demoVideoUrl}
              title="SmartNovi Video Demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {[
            { label: "Nền tảng", value: "YouTube" },
            { label: "Nội dung", value: "Trải nghiệm thực tế" },
            { label: "Ngôn ngữ", value: "Tiếng Việt" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-semibold text-foreground">{item.value}</div>
              <div className="text-xs text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;
