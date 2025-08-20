//src/components/home devider 


export default function Divider() {
    return (
      <div className="relative w-full h-16 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black"></div> {/* Black background */}
        <div className="relative w-3/4 h-[2px] bg-gradient-to-r from-white/10 via-white/30 to-white/10 animate-pulse rounded-full opacity-80 shadow-lg"></div>
      </div>
    );
  }
  