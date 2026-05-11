import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.9)']
  );
  
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 1)']
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 4px 20px rgba(0, 0, 0, 0.1)']
  );

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Social', href: '#social' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, color: textColor, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Fourza Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
          <span className="font-bold text-xl tracking-tight uppercase">Fourza</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="flex items-center gap-2 px-6 py-2 bg-brand text-black rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform">
            Let's Talk
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl text-black"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium border-b border-gray-100 pb-2 flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
          ))}
          <button className="w-full py-4 bg-brand text-black rounded-xl font-bold uppercase tracking-widest">
            Contact Us
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
