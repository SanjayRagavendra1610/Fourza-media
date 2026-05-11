import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand/5 blur-[130px] rounded-full animate-pulse delay-700" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/70">Powered by Fourza Intelligence</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(3.5rem,15vw,12rem)] font-black leading-[0.85] tracking-tighter uppercase mb-10"
        >
          Ignite<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-400 to-white">Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 font-medium leading-relaxed"
        >
          Fourza blends elite data strategies with high-voltage creativity to electrify your brand presence. Social dominance starts here.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.7 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative w-full sm:w-auto px-10 py-5 bg-brand text-black font-bold uppercase tracking-widest text-sm rounded-full flex items-center justify-center gap-3 hover:bg-white transition-all duration-300">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform bg-white/5">
              <Play className="w-4 h-4 fill-brand text-brand" />
            </div>
            Watch Showreel
          </button>
        </motion.div>
      </div>

      {/* Stats shelf */}
      <div className="absolute bottom-10 left-0 right-0 z-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-10 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          {[
            { label: 'Client Reach', val: '10M+' },
            { label: 'Brands Scaled', val: '500+' },
            { label: 'Events Hosted', val: '1.2K' },
            { label: 'Creative Awards', val: '42' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-2xl font-black tabular-nums">{stat.val}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
