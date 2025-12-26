import React from 'react';
import { Brain, Sparkles, FileUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-32 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#E042CE]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#4C6FFF]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
                        How it <span className="text-[#B1A6FF]">works</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        In just a few steps — generate, create, and fine-tune your ideas with AI.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line - Positioned behind/through dots */}
                    <div className="absolute top-[9px] left-[10%] right-[10%] h-[2px] bg-[#B1A6FF]/20 hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B1A6FF]/50 to-transparent" />
                    </div>

                    <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
                        <Step
                            title="Write your idea"
                            description="Describe what you want to create."
                            icon={<Brain className="w-8 h-8 text-[#E042CE]" />}
                        />

                        <Step
                            title="Generate"
                            description="Synthora delivers options in seconds."
                            icon={<Sparkles className="w-8 h-8 text-[#B1A6FF]" />}
                        />

                        <Step
                            title="Refine & Export"
                            description="Adjust and download your final results."
                            icon={<FileUp className="w-8 h-8 text-[#1CCAEC]" />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Step: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
}> = ({ icon, title, description }) => (
    <div className="relative flex flex-col items-center text-center max-w-sm z-10 w-full">
        {/* Dot on line */}
        <div className="w-5 h-5 rounded-full bg-[#B1A6FF] shadow-[0_0_15px_#B1A6FF] z-20 mb-12 relative flex items-center justify-center ring-4 ring-[#0D121F]">
            <div className="w-2 h-2 rounded-full bg-white" />
        </div>

        <div className="mb-6 relative group">
            {/* Icon Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500" />

            {/* Icon Container */}
            <div className="relative w-16 h-16 rounded-2xl bg-[#0D121F] border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(224,66,206,0.15)] group-hover:shadow-[0_0_25px_rgba(224,66,206,0.3)] group-hover:border-primary/50 transition-all duration-300">
                {icon}
            </div>
        </div>

        <h3 className="text-xl font-display font-medium text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{description}</p>
    </div>
);
