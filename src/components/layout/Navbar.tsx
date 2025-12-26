import React from 'react';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const Navbar: React.FC = () => {
    const { openModal } = useModal();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-surface/50 backdrop-blur-md border border-white/5 rounded-full px-6 py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Synthora Logo" className="h-8 w-auto" />
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['About', 'Features', 'How it works', 'Pricing'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-sans text-gray-300 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <Button variant="outline" size="sm" onClick={openModal}>
                    Join the Beta
                </Button>
            </div>
        </nav>
    );
};
