import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Arjun Selvam',
    role: 'Co-Founder & CEO',
    image: '👩‍💼',
    bio: 'Strategic visionary leading Fourza\'s expansion into digital innovation.'
  },
  {
    name: 'Gowtham Radha Shanmugaraja',
    role: 'Co-Founder & Creative Director',
    image: '👨‍💼',
    bio: 'Master of brand storytelling and creative excellence.'
  },
  {
    name: 'Vengat Ganesh',
    role: 'Co-Founder & Operations Lead',
    image: '👨‍💼',
    bio: 'Scaling operations and building sustainable growth frameworks.'
  },
  {
    name: 'Johnson',
    role: 'Co-Founder & Strategy Officer',
    image: '👨‍💼',
    bio: 'Data-driven strategist transforming insights into results.'
  },
  {
    name: 'Sanjay Ragavendra',
    role: 'Partner &Full Stack Web Developer',
    image: '👨‍💻',
    bio: 'Crafting seamless digital experiences through cutting-edge technology.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-20 bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-brand/5 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/70">Meet The Team</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            The Minds Behind
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-400 to-white"> Fourza</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-white/50 font-medium">
            A collective of innovators, strategists, and creatives united by a singular mission: to revolutionize digital marketing.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-orange-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-brand/50 transition-all duration-500 h-full">
                {/* Avatar */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {member.image}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-brand mb-4 uppercase tracking-wider">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-brand/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-brand" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-brand/20 transition-colors">
                    <Twitter className="w-4 h-4 text-brand" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-brand/20 transition-colors">
                    <Mail className="w-4 h-4 text-brand" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-xl border border-brand/30 bg-gradient-to-r from-brand/10 to-orange-500/5 backdrop-blur-md text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
            We believe in empowering brands through data-driven creativity and strategic innovation. At Fourza, we don't just market—we ignite growth that resonates, engages, and transforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
