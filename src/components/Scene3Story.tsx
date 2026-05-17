import { motion } from 'motion/react';
import { partyConfig } from '../config';

export default function Scene3Story() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
         <img src={partyConfig.images.group} alt="Story scene" className="w-full h-full object-cover opacity-40 blur-[2px] scale-110" />
         <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div 
        className="relative z-10 glass-panel-dark p-8 rounded-[40px] w-full max-w-sm flex flex-col items-center gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-xl md:text-2xl font-serif italic text-pink-100 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          "Get ready to enter the forest...
        </motion.p>
        
        <motion.div 
          className="w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        />

        <motion.p 
          className="text-lg md:text-xl font-medium text-white/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          Through the forest and into the clearing, just don't forget your toothbrush!
        </motion.p>

        <motion.h3 
          className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          And {partyConfig.childName.split(' ')[0]} needs YOU there."
        </motion.h3>
      </motion.div>
    </div>
  );
}
