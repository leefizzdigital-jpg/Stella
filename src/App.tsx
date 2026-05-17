/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import Scene1Opening from './components/Scene1Opening';
import Scene2Characters from './components/Scene2Characters';
import Scene3Story from './components/Scene3Story';
import Scene4Details from './components/Scene4Details';
import { Volume2, VolumeX } from 'lucide-react';
import Particles from './components/Particles';
import { partyConfig } from './config';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-svh w-full overflow-hidden bg-black font-sans text-white">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={partyConfig.images.background}
          alt="Magical Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles />
      </div>

      {/* Scroll Scenes */}
      <div className="relative z-10 h-full w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory no-scrollbar">
        <section className="h-full w-full snap-start relative shrink-0">
          <Scene1Opening />
        </section>

        <section className="h-full w-full snap-start relative shrink-0">
          <Scene3Story />
        </section>

        <section className="h-full w-full snap-start relative shrink-0">
          <Scene2Characters />
        </section>

        <section className="h-full w-full snap-start relative shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar">
          <Scene4Details />
        </section>
      </div>

      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-lg transition-transform active:scale-95"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/clearing.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

