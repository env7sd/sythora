import React from 'react';
import { ChevronDown, Plus, Sparkles, Copy, Edit, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const GeneratorDemo: React.FC = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-4">
                        Watch your ideas turn <br />
                        into reality — <span className="text-[#B1A6FF]">instantly.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Left Panel: Prompt Configuration */}
                    <div className="bg-[#0D121F] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                        <h3 className="text-lg font-medium text-white mb-6">Prompt</h3>

                        <div className="space-y-6">
                            {/* Description Input */}
                            <div className="space-y-2">
                                <div className="w-full bg-[#131620] border border-white/10 rounded-xl p-4 min-h-[100px] text-gray-300 text-sm">
                                    <span className="text-gray-500 block mb-2">Describe what you want to say...</span>
                                    An Instagram post about how AI helps designers to create faster without quality.
                                </div>
                            </div>

                            {/* Channel Select */}
                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 uppercase tracking-wider font-medium ml-1">Channel</label>
                                <div className="w-full bg-[#131620] border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between text-gray-300 text-sm cursor-pointer hover:border-white/20 transition-colors">
                                    <span>Instagram post</span>
                                    <ChevronDown size={16} className="text-gray-500" />
                                </div>
                            </div>

                            {/* Tone Select */}
                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 uppercase tracking-wider font-medium ml-1">Tone</label>
                                <div className="flex flex-wrap gap-2 w-full bg-[#131620] border border-white/10 rounded-xl px-2 py-2 min-h-[48px] items-center">
                                    {['Friendly', 'Inspirational', 'Confident'].map(tone => (
                                        <span key={tone} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300">
                                            {tone}
                                        </span>
                                    ))}
                                    <button className="w-6 h-6 rounded-full flex items-center justify-center text-secondary hover:bg-white/5 transition-colors">
                                        <Plus size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Keywords Input */}
                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 uppercase tracking-wider font-medium ml-1">Key words</label>
                                <div className="w-full bg-[#131620] border border-white/10 rounded-xl p-4 text-gray-400 text-xs leading-relaxed">
                                    AI content engine, social media automation, fast copy generation, brand voice, short-form content, marketing workflow, dynamic captions
                                </div>
                            </div>

                            {/* Brand Select */}
                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 uppercase tracking-wider font-medium ml-1">Brand</label>
                                <div className="w-full bg-[#131620] border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between text-gray-300 text-sm cursor-pointer hover:border-white/20 transition-colors">
                                    <span>Veltora</span>
                                    <ChevronDown size={16} className="text-gray-500" />
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button variant="primary" size="md" className="w-auto px-8">
                                    Generate
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Result Preview */}
                    <div className="bg-[#0D121F] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative min-h-[600px] flex flex-col">
                        {/* Status Header */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium text-gray-300">Generating ...</span>
                            </div>
                            <p className="text-xs text-gray-500">Analyzing prompt... Identifying key message and tone...</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Instagram post', 'Ventora', 'Friendly', 'Inspirational', 'Confident', '...'].map((tag, i) => (
                                <span key={i} className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-medium ${i < 2 ? 'bg-[#1C1F2E] text-gray-300 border border-white/5' : 'bg-[#1C1F2E] text-gray-400 border border-white/5'}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Generated Content */}
                        <div className="flex-1 space-y-4">
                            <h3 className="text-xl font-display font-medium text-white leading-tight">
                                How AI Helps Designers Create Faster — Without Losing Quality
                            </h3>

                            <div className="flex items-center gap-2 text-yellow-400 text-sm">
                                <Sparkles size={14} />
                                <span>How AI Helps Designers Create Faster — Without Losing Quality</span>
                            </div>

                            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                                <p>
                                    AI isn't here to replace designers — it's here to accelerate the work you already do best.
                                    From generating first drafts to refining layouts or text, AI tools help you skip routine steps and jump straight into the creative part.
                                </p>

                                <p>Here's what changes:</p>
                                <ul className="space-y-1">
                                    <li className="flex gap-2"><span>⚡</span> Faster idea exploration</li>
                                    <li className="flex gap-2"><span>🎨</span> More time for creative decisions instead of mechanical tasks</li>
                                    <li className="flex gap-2"><span>🖌️</span> Quick variations and instant iterations</li>
                                    <li className="flex gap-2"><span>📐</span> Consistent quality across all assets</li>
                                </ul>

                                <p>
                                    AI speeds up production — but you shape the vision, the taste, and the final result.
                                </p>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex gap-3 text-gray-500">
                                <Copy size={18} className="hover:text-white cursor-pointer transition-colors" />
                                <Edit size={18} className="hover:text-white cursor-pointer transition-colors" />
                                <RefreshCw size={18} className="hover:text-white cursor-pointer transition-colors" />
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 rounded-full border border-white/10 text-xs text-gray-300 hover:bg-white/5 transition-colors">
                                    Generate Image
                                </button>
                                <button className="px-4 py-2 rounded-full border border-white/10 text-xs text-gray-300 hover:bg-white/5 transition-colors">
                                    Save as draft
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};
