import { motion, AnimatePresence } from 'motion/react';
import { partyConfig } from '../config';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Scene1Opening() {
  const [showVideo, setShowVideo] = useState(true);

  // If video naturally ends, hide it
  const handleVideoEnded = () => {
    setShowVideo(false);
  };

  return (
    <>
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <video 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover"
              onEnded={handleVideoEnded}
            >
              <source src="public/Clearing.mp4" type="video/mp4" />
            </video>
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute bottom-10 right-10 text-white text-sm bg-black/50 px-4 py-2 rounded-full hover:bg-black/70 backdrop-blur-md"
            >
              Skip Intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-full w-full flex flex-col items-center justify-center pt-20 pb-10 px-6 relative">
        {/* Text Content */}
        <motion.div 
          className="flex flex-col items-center text-center z-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showVideo ? 0 : 1, y: showVideo ? 30 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div 
            className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-white/80 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: showVideo ? 0 : 1 }}
            transition={{ delay: 1 }}
          >
            <Sparkles size={14} className="text-pink-400" />
            You've Been Invited
            <Sparkles size={14} className="text-pink-400" />
          </motion.div>

          <motion.h1 
            className="font-display font-bold text-5xl md:text-6xl leading-[1.1] tracking-tight bg-gradient-to-br from-white via-pink-100 to-purple-300 bg-clip-text text-transparent mb-8 drop-shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: showVideo ? 0 : 1, scale: showVideo ? 0.9 : 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            {partyConfig.eventTitle}
          </motion.h1>
        </motion.div>

        {/* Swipe Hint */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: showVideo ? 0 : 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <span className="text-xs font-bold tracking-widest uppercase mb-1">Swipe Up</span>
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </>
  );
}
