import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechSpecs from "@/components/TechSpecs";
import VideoDemo from "@/components/VideoDemo";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fixed Tet Background Image */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/src/assets/tet-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <TechSpecs />
        <VideoDemo />
        <ComingSoon />
        <Footer />
      </div>

      {/* Fixed Tet Promotion Banner */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white p-4 rounded-lg shadow-2xl z-50 border-4 border-yellow-400 max-w-xs rotate-6 hidden md-block"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
        <div className="text-center mb-2">
          <div className="text-xl font-bold mb-2">🎉 TẾT 2026 🎉</div>
          <div className="text-sm font-bold bg-yellow-400 text-red-800 px-2 py-1 rounded mb-2">GIẢM 10%</div>
          <div className="text-xs">ĐẶT TRƯỚC NGAY</div>
        </div>
        <div className="text-center mt-4">
          <div className="text-xs mb-1">TẶNG KÈM</div>
          <div className="text-[10px] font-bold">BỘ SƯU TẬP</div>
          <div className="text-[10px] font-bold">NGỰA NGŨ HÀNH</div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-ping">
          <span className="text-red-700 text-xs">!</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
