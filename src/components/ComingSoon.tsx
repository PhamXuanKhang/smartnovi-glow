import { motion } from "framer-motion";
import { Bell, Calendar, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { useEffect, useState } from "react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the release date - you can modify this date
  const releaseDate = new Date('February 15, 2026 12:00:00').getTime(); // Change this date as needed

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = releaseDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately and then update every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Particle Effects */}
      <ParticleBackground particleCount={15} />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass mb-8 glow-purple"
          >
            <Rocket className="w-10 h-10 text-secondary" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sắp ra mắt <span className="text-gradient-reverse">T2/2026</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Hãy là người đầu tiên sở hữu SmartNovi! Đăng ký ngay để nhận thông tin
            ưu đãi độc quyền dành cho khách hàng đặt trước.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: Calendar, text: "Ưu tiên đặt hàng" },
              { icon: Bell, text: "Nhận tin sớm nhất" },
              { icon: Rocket, text: "Giảm giá 20%" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 glass px-4 py-2 rounded-full"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary to-primary text-primary-foreground font-semibold px-10 py-6 rounded-full hover:glow-purple transition-all duration-300 text-lg"
              onClick={() => window.open('https://www.facebook.com/smartnovi.tech', '_blank')}
            >
              <Bell className="w-5 h-5 mr-2" />
              Đặt mua trước
            </Button>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 grid grid-cols-4 gap-4 max-w-md mx-auto"
          >
            {[
              { value: String(timeLeft.days).padStart(2, '0'), label: "Ngày" },
              { value: String(timeLeft.hours).padStart(2, '0'), label: "Giờ" },
              { value: String(timeLeft.minutes).padStart(2, '0'), label: "Phút" },
              { value: String(timeLeft.seconds).padStart(2, '0'), label: "Giây" },
            ].map((item, index) => (
              <div key={index} className="glass rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
