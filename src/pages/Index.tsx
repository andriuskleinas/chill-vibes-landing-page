
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission here
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Main text with retro gaming style */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 leading-tight tracking-wider uppercase"
              style={{ 
                fontFamily: 'monospace',
                textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff'
              }}>
            While we're busy with building the platform
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-pink-500 uppercase tracking-wide"
             style={{ 
               fontFamily: 'monospace',
               textShadow: '0 0 10px #ff1493, 0 0 20px #ff1493'
             }}>
            here is a song for you.
          </p>
        </div>

        {/* YouTube video embed with retro frame */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-none border-4 border-cyan-400 shadow-lg"
               style={{ boxShadow: '0 0 20px #00ffff' }}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/13EsiCjsssY"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Waiting list section */}
        <div className="space-y-6 bg-purple-900 bg-opacity-50 p-8 border-4 border-pink-500 rounded-lg"
             style={{ boxShadow: '0 0 20px #ff1493' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 uppercase tracking-wider"
              style={{ 
                fontFamily: 'monospace',
                textShadow: '0 0 10px #ffff00, 0 0 20px #ffff00'
              }}>
            Join the waiting list
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-black border-2 border-cyan-400 text-cyan-400 placeholder-cyan-600 focus:border-pink-500 focus:ring-pink-500 rounded-none font-mono"
              style={{ 
                boxShadow: '0 0 5px #00ffff',
                fontFamily: 'monospace'
              }}
            />
            <Button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-black font-bold uppercase tracking-wide border-2 border-pink-500 rounded-none"
              style={{ 
                fontFamily: 'monospace',
                textShadow: 'none',
                boxShadow: '0 0 10px #ff1493'
              }}
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Retro decorative elements */}
        <div className="flex justify-center space-x-4 pt-8">
          <div className="w-4 h-4 bg-cyan-400 transform rotate-45"></div>
          <div className="w-4 h-4 bg-pink-500 transform rotate-45"></div>
          <div className="w-4 h-4 bg-yellow-400 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
