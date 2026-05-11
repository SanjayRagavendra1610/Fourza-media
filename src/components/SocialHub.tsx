import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Youtube, ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';

const socialStats = [
  { platform: 'Instagram', reach: '2.4M', growth: '+12%', icon: Instagram, color: 'text-rose-500' },
  { platform: 'Twitter (X)', reach: '850K', growth: '+8%', icon: Twitter, color: 'text-blue-400' },
  { platform: 'LinkedIn', reach: '1.2M', growth: '+24%', icon: Linkedin, color: 'text-blue-600' },
  { platform: 'YouTube', reach: '4.2M', growth: '+18%', icon: Youtube, color: 'text-red-600' },
];

export default function SocialHub() {
  return (
    <section id="social" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand mb-6 block">Viral Intelligence</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
              Social Presence, <br />Electrified.
            </h2>
            <p className="text-xl text-black/50 mb-12 max-w-lg leading-relaxed">
              Fourza manages elite enterprise social ecosystems, delivering high-voltage engagement that sparks real growth. No fluff, just results.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {socialStats.map((stat, i) => (
                <div key={i} className="p-6 border border-black/5 rounded-2xl flex flex-col gap-4 hover:bg-black/5 transition-colors group">
                  <div className="flex items-center justify-between">
                    <stat.icon className={`w-8 h-8 ${stat.platform === 'Twitter (X)' ? 'text-black' : stat.color}`} />
                    <span className="text-[10px] font-black text-brand uppercase tracking-widest">{stat.growth}</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black">{stat.reach}</div>
                    <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{stat.platform} Reach</div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-12 flex items-center gap-3 text-sm font-black uppercase tracking-widest group">
              Explore Our Portfolio
              <div className="w-10 h-10 rounded-full bg-brand text-black flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <ExternalLink className="w-4 h-4 text-black" />
              </div>
            </button>
          </div>
          
          <div className="relative">
            {/* Simulated Feed / Display */}
            <div className="relative z-10 grid grid-cols-2 gap-6 rotate-[5deg] lg:rotate-[10deg]">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-zinc-100 rounded-3xl p-6 shadow-xl"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand to-black mb-6 overflow-hidden flex items-center justify-center text-white/20">
                   <img src="/logo.png" className="w-20 h-20 opacity-40 grayscale brightness-200" />
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1"><Heart className="w-4 h-4 fill-brand text-brand" /> <span className="text-xs font-bold">12.5k</span></div>
                  <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> <span className="text-xs font-bold">482</span></div>
                  <div className="flex items-center gap-1 ml-auto"><Share2 className="w-4 h-4" /></div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-zinc-100 rounded-3xl p-6 shadow-xl mt-12"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-black to-brand mb-6 overflow-hidden flex items-center justify-center text-white/20">
                   <Twitter className="w-20 h-20" />
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1"><Heart className="w-4 h-4 fill-brand text-brand" /> <span className="text-xs font-bold">8.1k</span></div>
                  <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> <span className="text-xs font-bold">1.2k</span></div>
                </div>
              </motion.div>

              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand rounded-full flex items-center justify-center -rotate-[15deg] shadow-2xl z-20">
                <span className="font-black text-center text-sm leading-tight uppercase text-black">Top Digital<br/>Fourza Agency</span>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand/10 rounded-full blur-[100px] -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
