import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { Button } from './Button';

export const WaitlistModal: React.FC = () => {
    const { isOpen, closeModal } = useModal();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    // Reset state when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStatus('idle');
                setEmail('');
            }, 300);
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#0D121F] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors rounded-full hover:bg-white/5"
                >
                    <X size={20} />
                </button>

                {status === 'success' ? (
                    <div className="flex flex-col items-center text-center py-6">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                            <CheckCircle2 size={32} />
                        </div>
                        <h3 className="text-2xl font-display font-medium text-white mb-2">
                            You're on the list!
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Thanks for joining. We'll verify your email and send you an invite code soon.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-8 w-full border-white/10 hover:bg-white/5"
                            onClick={closeModal}
                        >
                            Close
                        </Button>
                    </div>
                ) : (
                    <div className="relative z-10">
                        <h3 className="text-2xl font-display font-medium text-white mb-2">
                            Join the waitlist
                        </h3>
                        <p className="text-gray-400 text-sm mb-8">
                            Be among the first to experience Synthora. Early access spots are limited.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="w-full bg-[#131620] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
                                    required
                                />
                            </div>

                            <Button
                                variant="primary"
                                className="w-full flex items-center justify-center gap-2 group"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Joining...
                                    </>
                                ) : (
                                    <>
                                        Join Waitlist
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>

                            <p className="text-center text-xs text-gray-500 mt-4">
                                No spam. Unsubscribe anytime.
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};
