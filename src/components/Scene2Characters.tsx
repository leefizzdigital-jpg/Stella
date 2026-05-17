import { motion } from 'motion/react';
import { partyConfig } from '../config';
import { Download } from 'lucide-react';

export default function Scene2Characters() {
  const characters = partyConfig.characters; // Removed filter for host since wingstar host was removed.

  const handleDownloadCat = (char: any) => {
    const link = document.createElement('a');
    link.href = char.image;
    link.download = `${char.name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full w-full flex flex-col pt-16 pb-12">
      <div className="px-6 mb-6">
        <h2 className="font-display text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Meet the Crew
        </h2>
        <p className="text-white/60 font-medium">Swipe to meet Stella's friends</p>
      </div>

      <div className="flex-1 w-full overflow-x-auto snap-x snap-mandatory flex no-scrollbar pb-8 px-6 gap-4">
        {characters.map((char, index) => (
          <motion.div 
            key={char.id}
            className={`min-w-[85%] snap-center rounded-3xl relative overflow-hidden glass-panel-dark flex flex-col justify-end p-6 border-t border-l`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${char.color} opacity-20 mix-blend-overlay`} />
            
            <motion.div 
              className="absolute inset-x-0 bottom-44 flex justify-center h-[50%]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
            >
              <img src={char.image} alt={char.name} className="h-full w-auto object-contain drop-shadow-2xl" />
            </motion.div>

            <div className="relative z-10 glass-panel rounded-2xl p-5 w-full flex flex-col gap-3">
              <div>
                <h3 className="font-display font-bold text-2xl mb-1">{char.name}</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                  "{char.desc}"
                </p>
              </div>
              <button 
                onClick={() => handleDownloadCat(char)}
                className="w-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 border border-white/20 transition-all text-sm backdrop-blur-md"
              >
                <Download size={16} />
                Download
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
