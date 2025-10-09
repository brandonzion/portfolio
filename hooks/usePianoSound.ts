"use client";

import { useEffect, useRef } from "react";

const noteFrequencies: { [key: string]: number } = {
  C: 261.63,
  "C#": 277.18,
  "Db": 277.18,
  D: 293.66,
  "D#": 311.13,
  "Eb": 311.13,
  E: 329.63,
  F: 349.23,
  "F#": 369.99,
  "Gb": 369.99,
  G: 392.0,
  "G#": 415.3,
  "Ab": 415.3,
  A: 440.0,
  "A#": 466.16,
  "Bb": 466.16,
  B: 493.88,
  C2: 523.25,
  D2: 587.33,
  E2: 659.25,
  F2: 698.46,
  "F#2": 739.99,
  G2: 783.99,
  A2: 880.0,
};

const chordNotes: { [key: string]: string[] } = {
  "Cmaj7": ["C", "E", "G", "B"],
  "Dmin7": ["D", "F", "A", "C2"],
  "Emin7": ["E", "G", "B", "D2"],
  "Fmaj7": ["F", "A", "C2", "E2"],
  "G7": ["D", "F", "G", "B"],
  "Amin7": ["A", "C2", "E2", "G2"],
  "Bmin7b5": ["B", "D2", "F2", "A2"],
  "C": ["C", "E", "G", "C2"],
};

export function usePianoSound() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const reverbRef = useRef<ConvolverNode | null>(null);

  useEffect(() => {
    // Initialize audio context
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioContextClass();
      
      // Create reverb
      const audioContext = audioContextRef.current;
      const reverb = audioContext.createConvolver();
      
        // Create impulse response for reverb
        const sampleRate = audioContext.sampleRate;
        const length = sampleRate * 0.3; // Shorter reverb tail
        const impulse = audioContext.createBuffer(2, length, sampleRate);
        const impulseL = impulse.getChannelData(0);
        const impulseR = impulse.getChannelData(1);
        
        for (let i = 0; i < length; i++) {
          const decay = Math.exp(-i / (sampleRate * 0.15)); // Faster decay
          impulseL[i] = (Math.random() * 2 - 1) * decay;
          impulseR[i] = (Math.random() * 2 - 1) * decay;
        }
      
      reverb.buffer = impulse;
      reverbRef.current = reverb;
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playNote = (note: string) => {
    if (!audioContextRef.current || !reverbRef.current) return;

    const audioContext = audioContextRef.current;
    const frequency = noteFrequencies[note];
    
    if (!frequency) return;

    // Electric piano sound with multiple harmonics
    const masterGain = audioContext.createGain();
    const reverb = reverbRef.current;
    const dryGain = audioContext.createGain();
    const wetGain = audioContext.createGain();

    // Create oscillators for electric piano tone - reduced harmonics
    const oscillators = [
      { freq: frequency, gain: 0.25, detune: 0 },           // Fundamental
      { freq: frequency * 2, gain: 0.08, detune: 2 },      // 2nd harmonic
      { freq: frequency * 1.5, gain: 0.03, detune: 3 },    // Bell-like harmonic
    ];

    oscillators.forEach(({ freq, gain, detune }) => {
      const osc = audioContext.createOscillator();
      const oscGain = audioContext.createGain();
      
      osc.type = "sine"; // Sine waves for smooth electric piano
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);
      osc.detune.setValueAtTime(detune, audioContext.currentTime);
      
      // Individual gain for each harmonic
      oscGain.gain.setValueAtTime(gain, audioContext.currentTime);
      
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      
      osc.start();
      osc.stop(audioContext.currentTime + 1.2);
    });

    // Master ADSR envelope - lower gain to prevent clipping
    masterGain.gain.setValueAtTime(0, audioContext.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.005); // Lower attack
    masterGain.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 0.1); // Lower sustain
    masterGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.2); // Release

    // Mix dry and wet signals
    dryGain.gain.value = 0.9;
    wetGain.gain.value = 0.1;

    masterGain.connect(dryGain);
    masterGain.connect(reverb);
    reverb.connect(wetGain);
    
    dryGain.connect(audioContext.destination);
    wetGain.connect(audioContext.destination);
  };

  const playChord = (chordName: string) => {
    if (!audioContextRef.current || !reverbRef.current) return;
    
    const notes = chordNotes[chordName];
    if (!notes) return;

    // Play each note in the chord with more stagger for clarity
    notes.forEach((note, index) => {
      setTimeout(() => playNote(note), index * 25);
    });
  };

  return { playNote, playChord };
}

