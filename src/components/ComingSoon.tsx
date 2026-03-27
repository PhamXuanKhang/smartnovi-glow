import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const ComingSoon = () => {
  const benefits = [
    { icon: Truck, text: "Giao hàng toàn quốc" },
    { icon: ShieldCheck, text: "Bảo hành chính hãng 12 tháng" },
    { icon: ShoppingCart, text: "Đặt mua và tư vấn nhanh" },
  ];

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
            <ShoppingCart className="w-10 h-10 text-secondary" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Đã mở bán <span className="text-gradient-reverse">SmartNovi</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Sản phẩm đã sẵn sàng giao hàng. Đặt mua ngay để nhận tư vấn và hỗ trợ
            sử dụng từ đội ngũ SmartNovi.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((item, index) => (
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
              <ShoppingCart className="w-5 h-5 mr-2" />
              Đặt mua ngay
            </Button>
          </motion.div>

          {/* Support Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 max-w-xl mx-auto"
          >
            <div className="glass rounded-xl p-5 text-sm text-muted-foreground">
              Đội ngũ SmartNovi phản hồi tư vấn trong giờ hành chính và hỗ trợ
              hướng dẫn cài đặt sau khi nhận hàng.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
