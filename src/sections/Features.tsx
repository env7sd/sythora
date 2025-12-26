import React from 'react';

const FeatureCard: React.FC<{
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}> = ({ title, description, imageSrc, imageAlt }) => (
    <div className="group relative bg-[#0B0F19] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative w-full aspect-video bg-[#0B0F19] flex items-center justify-center overflow-hidden p-1">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        <div className="px-8 pb-8 pt-4 relative z-10">
            <h3 className="text-2xl font-display font-medium text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-base leading-relaxed">{description}</p>
        </div>
    </div>
);

export const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-tertiary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium">
                        Key <span className="text-secondary">Features</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <FeatureCard
                        title="Multi-Modal Generation"
                        description="Create text, visuals, and creative layouts powered by AI."
                        imageSrc="/features/multi-modal.png"
                        imageAlt="Multi-Modal Generation Interface"
                    />

                    <FeatureCard
                        title="Collaborative Workspace"
                        description="Refine and iterate together in real time."
                        imageSrc="/features/collaboration.png"
                        imageAlt="Real-time Collaboration"
                    />

                    <FeatureCard
                        title="Brand-Aware AI"
                        description="Teach Synthora your style and tone for consistent results."
                        imageSrc="/features/brand-aware.png"
                        imageAlt="Brand Awareness Settings"
                    />

                    <FeatureCard
                        title="Seamless Export"
                        description="Download production-ready assets instantly."
                        imageSrc="/features/seamless-export.png"
                        imageAlt="Export Options"
                    />

                </div>
            </div>
        </section>
    );
};
