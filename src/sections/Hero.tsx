import React from 'react';
import { Button } from '../components/ui/Button';
import {
    Home, Folder, LayoutGrid, Settings, LogOut,
    Search, Bell, Sparkles, Command,
    Image as ImageIcon, Type, Bot
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const Hero: React.FC = () => {
    const { openModal } = useModal();

    return (
        <section id="about" className="relative pt-32 pb-20 px-4 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[130px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute top-[10%] right-[5%] w-[600px] h-[500px] bg-secondary/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-tertiary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-quaternary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">

                {/* Main Headings */}
                <h1 className="text-5xl md:text-7xl font-display font-medium leading-tight md:leading-tight mb-6">
                    Design. <span className="bg-gradient-to-r from-secondary to-quaternary bg-clip-text text-transparent">Generate.</span>
                    <br />
                    Accelerate.
                </h1>

                <p className="max-w-xl text-gray-400 text-lg md:text-xl font-sans leading-relaxed mb-10">
                    An intelligent workspace that helps you bring ideas to life with AI — faster than ever before.
                </p>

                <Button variant="primary" size="lg" className="mb-20 shadow-[0_0_40px_rgba(224,66,206,0.4)]" onClick={openModal}>
                    Start for Free
                </Button>

                {/* Product Interface Mockup */}
                <div className="w-full rounded-2xl border border-white/10 bg-[#060910] shadow-2xl relative overflow-hidden group text-left">
                    <div className="flex h-[600px]">
                        {/* Sidebar */}
                        <div className="w-20 border-r border-white/5 flex flex-col items-center py-6 gap-8 bg-[#0B0F19]">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-quaternary flex items-center justify-center mb-4">
                                <div className="w-9 h-9 rounded-full bg-[#0B0F19] flex items-center justify-center">
                                    <Sparkles size={18} className="text-white" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 w-full px-4 items-center">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors bg-primary/20 text-primary">
                                    <Home size={20} />
                                </div>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors text-gray-500 hover:text-gray-300 hover:bg-white/5">
                                    <LayoutGrid size={20} />
                                </div>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors text-gray-500 hover:text-gray-300 hover:bg-white/5">
                                    <Folder size={20} />
                                </div>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors text-gray-500 hover:text-gray-300 hover:bg-white/5">
                                    <Command size={20} />
                                </div>
                            </div>

                            <div className="mt-auto flex flex-col gap-6 w-full px-4 items-center text-gray-500">
                                <Settings size={20} className="hover:text-gray-300 cursor-pointer" />
                                <LogOut size={20} className="hover:text-gray-300 cursor-pointer" />
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 flex flex-col bg-[#060910] relative">
                            {/* Top Bar */}
                            <div className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#060910]/50 backdrop-blur-sm">
                                <div className="w-96 h-10 bg-[#131620] rounded-full border border-white/5 flex items-center px-4 gap-3 text-gray-500">
                                    <Search size={16} />
                                    <span className="text-sm">What are you searching for?</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#131620] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                                        <Bell size={18} />
                                    </div>
                                    <div className="h-10 px-6 rounded-full bg-gradient-to-r from-[#E042CE] to-[#4C6FFF] flex items-center justify-center text-sm font-medium text-white shadow-lg shadow-purple-500/20 cursor-pointer hover:shadow-purple-500/40 transition-shadow">
                                        Generate Now
                                    </div>
                                </div>
                            </div>

                            {/* Workspace Content */}
                            <div className="flex-1 p-10 overflow-hidden relative">
                                {/* Background Gradient Spot */}
                                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
                                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

                                <div className="max-w-3xl mx-auto flex flex-col items-center pt-8 relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-3">
                                        Ready to <span className="text-[#B1A6FF]">start?</span>
                                    </h2>
                                    <p className="text-gray-400 text-center mb-10 text-sm">
                                        Type your prompt or describe what you want to create — <br />
                                        Synthora will generate and refine it for you.
                                    </p>

                                    {/* Main Input Field */}
                                    <div className="w-full bg-[#0D121F] border border-white/10 rounded-3xl p-2 shadow-2xl relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                                        <div className="relative bg-[#0D121F] rounded-[22px] p-4 h-32 flex flex-col justify-between">
                                            <span className="text-gray-400 text-lg">Create an asset for ...</span>
                                            <div className="self-end">
                                                <div className="h-9 px-4 rounded-full bg-gradient-to-r from-[#E042CE] to-[#1CCAEC] flex items-center gap-2 text-xs font-medium text-white shadow-lg cursor-pointer hover:shadow-purple-500/30 transition-all">
                                                    <Sparkles size={14} />
                                                    Generate with AI
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chips */}
                                    <div className="flex gap-2 mt-6 overflow-x-auto w-full justify-center pb-2">
                                        {['Facebook post', 'Brand tagline', 'Ad concept', 'Instagram post text'].map(tag => (
                                            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 hover:bg-white/10 cursor-pointer whitespace-nowrap transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Recent Assets List */}
                                    <div className="w-full mt-12">
                                        <h3 className="text-lg font-medium text-white mb-4">Recent assets</h3>
                                        <div className="space-y-3">
                                            {[
                                                { title: "AI-powered efficiency for modern teams", type: "SaaS Tagline", time: "6h ago", color: "bg-purple-500/20 text-purple-400", Icon: Type },
                                                { title: "Why creativity isn't human-only anymore", type: "Blog Intro", time: "18h ago", color: "bg-blue-500/20 text-blue-400", Icon: Bot },
                                                { title: "Abstract 3D form symbolizing creative intelligence", type: "Blog Illustration", time: "Yesterday", color: "bg-cyan-500/20 text-cyan-400", Icon: ImageIcon }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                                                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center font-display font-bold`}>
                                                        <item.Icon size={18} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-medium text-gray-200 truncate group-hover:text-white">{item.title}</h4>
                                                        <p className="text-xs text-gray-500">{item.type}</p>
                                                    </div>
                                                    <span className="text-xs text-gray-600">{item.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer quote */}
                <div className="mt-20 max-w-2xl text-center">
                    <h3 className="text-2xl md:text-3xl font-display leading-relaxed text-gray-200">
                        Synthora gives creators a unified place to generate, refine, and manage <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">AI-generated visuals and copy.</span>
                    </h3>
                </div>
            </div>
        </section>
    );
};
