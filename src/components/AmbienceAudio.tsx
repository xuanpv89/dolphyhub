import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Coffee, Sparkles } from 'lucide-react';

export const AmbienceAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const startAmbience = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Create pink noise buffer for soothing coffee shop rain/ambient white noise
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.025; // gentle, relaxing volume
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter to sound like cozy warm coffee shop rain outside
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();
      noiseNodeRef.current = whiteNoise;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    } catch {
      // AudioContext not supported
      setIsPlaying(false);
    }
  };

  const stopAmbience = () => {
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`fixed bottom-5 left-5 sm:left-6 z-40 flex items-center space-x-2 px-3.5 py-2.5 rounded-full shadow-xl border backdrop-blur-md transition-all duration-300 text-xs font-bold cursor-pointer ${
        isPlaying
          ? 'bg-[#2076bd] text-white border-blue-400 ring-4 ring-blue-500/20 scale-105'
          : 'bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[#2076bd] hover:text-[#2076bd]'
      }`}
      title={isPlaying ? 'Tắt tiếng quán cà phê chill' : 'Bật tiếng không gian quán cà phê Thảo Điền chill'}
    >
      <Coffee className={`w-4 h-4 ${isPlaying ? 'animate-bounce text-[#FAEA28]' : 'text-slate-500'}`} />
      <span className="hidden sm:inline">
        {isPlaying ? 'Đang phát: Không gian cà phê chill' : 'Bật tiếng cà phê chill'}
      </span>
      {isPlaying ? (
        <Volume2 className="w-4 h-4 text-[#FAEA28] animate-pulse" />
      ) : (
        <VolumeX className="w-4 h-4 text-slate-400" />
      )}
    </button>
  );
};
