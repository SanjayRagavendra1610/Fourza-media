import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full opacity-[0.02] pointer-events-none select-none">
        <div className="text-[20vw] font-black uppercase whitespace-nowrap -ml-20">CONTACT FOURZA CONTACT FOURZA</div>
        <div className="text-[20vw] font-black uppercase whitespace-nowrap -ml-60">LET'S GROW TOGETHER LET'S GROW</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand mb-6 block">Ready to Scale?</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
              Start The <br />Momentum.
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Email Us</div>
                  <div className="text-xl font-bold flex items-center gap-2">fourzamedia@gmail.com <ArrowUpRight className="w-4 h-4 text-brand" /></div>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Call Us</div>
                  <div className="text-xl font-bold">+91 78451 16624</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Call Us</div>
                  <div className="text-xl font-bold">+91 88838 81200</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1" >Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Service Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors">
                  <option className="bg-zinc-900">Fourza SEO Strategy</option>
                  <option className="bg-zinc-900">Social Media Management</option>
                  <option className="bg-zinc-900">Event Production</option>
                  <option className="bg-zinc-900">Ad Campaigns</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Your Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors h-32 resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>
              
              <button className="w-full py-5 bg-brand text-black font-black uppercase text-sm tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-all transform active:scale-95">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
}
