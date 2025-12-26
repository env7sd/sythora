import React from 'react';
import { Globe, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-20 px-6 relative bg-[#05060A] overflow-hidden border-t border-white/5">
            {/* Background Bloom */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-2">
                    <span className="text-[#B1A6FF]">Synthora</span> — where creativity
                </h2>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-12">
                    meets intelligence.
                </h2>

                <div className="flex items-center justify-center gap-6 mb-12">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Twitter size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Globe size={24} />
                    </a>
                </div>

                <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};
