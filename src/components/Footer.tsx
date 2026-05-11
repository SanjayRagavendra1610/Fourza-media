import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Fourza Full Logo" className="h-10 object-contain brightness-0 invert" referrerPolicy="no-referrer" />
            <span className="text-sm uppercase tracking-[0.3em] font-bold">Fourza Digital Marketing</span>
          </div>

          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand transition-colors">Cookie Policy</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-[10px] font-bold uppercase tracking-widest text-white/20">
          © {new Date().getFullYear()} Fourza Digital Marketing. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
