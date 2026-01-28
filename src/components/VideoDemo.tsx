import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            Trải nghiệm thực tế cách SmartNovi biến đổi không gian học tập của bạn.
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
            {/* Video Placeholder */}
            {/* REPLACE WITH ACTUAL VIDEO: <video src="src/assets/demo.mp4" /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card flex items-center justify-center">
              {/* Placeholder Visual */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full glass flex items-center justify-center border border-primary/20">
                  {/* Lamp Icon Placeholder */}
                  <div className="w-12 h-20 bg-gradient-to-b from-primary/80 to-primary/40 rounded-t-full" />
                </div>
                <p className="text-muted-foreground text-sm">Video Demo Preview</p>
              </div>
            </div>

            {/* Play Button Overlay */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="relative">
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                <div className="absolute -inset-4 bg-primary/10 rounded-full animate-pulse" />
                
                {/* Play Button */}
                <Button
                  size="lg"
                  className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary hover:glow-yellow transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </Button>
              </div>
            </motion.div>

            {/* Video Controls Placeholder */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-primary rounded-full" />
                </div>
                <span className="text-xs text-muted-foreground">2:34</span>
                <Volume2 className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
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
            { label: "Thời lượng", value: "2:34" },
            { label: "Chất lượng", value: "4K HDR" },
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
