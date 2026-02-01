import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Particle Effects */}
      <ParticleBackground particleCount={30} />

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Coming Soon - T2/2026</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Biến góc học tập thành{" "}
              <span className="text-gradient glow-text-yellow">không gian thông minh</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Tích hợp trợ lý ảo <span className="text-secondary font-semibold">Lily</span>,
              điều khiển giọng nói và ánh sáng bảo vệ mắt thông minh.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 py-6 rounded-full hover:glow-yellow transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open('https://www.facebook.com/smartnovi.tech', '_blank')}
              >
                Đặt mua trước
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="#demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/50 hover:border-primary/50 px-8 py-6 rounded-full transition-all duration-300"
                >
                  Xem Video Demo
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Glow Ring */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-primary/30 animate-pulse" />
            <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-secondary/20" />

            {/* Product Placeholder */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
            >
              {/* Lamp Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-secondary/30 animate-pulse-glow" />

              {/* Lamp Placeholder */}
              <div className="relative z-10 w-48 h-48 md:w-60 md:h-60 rounded-full glass flex flex-col items-center justify-center border border-primary/30">
                {/* REPLACE WITH PRODUCT IMAGE: src/assets/lamp.png */}
                <div className="w-16 h-24 bg-gradient-to-b from-primary to-primary/60 rounded-t-full mb-2" />
                <div className="w-24 h-4 bg-muted rounded-full" />
                <p className="text-xs text-muted-foreground mt-4">SmartNovi Lamp</p>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute top-10 right-10 glass px-3 py-2 rounded-lg"
            >
              <span className="text-xs text-primary">🎤 "Hey Lily"</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-0 glass px-3 py-2 rounded-lg"
            >
              <span className="text-xs text-secondary">💡 3 chế độ sáng</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Messenger Icon */}
      <motion.a
        href="https://www.facebook.com/smartnovi.tech"
        target="_blank"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute top-6 right-6 z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </motion.a>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
