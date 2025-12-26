import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';

export const Pricing: React.FC = () => {
    const { openModal } = useModal();
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: 'FREE',
            price: 'Free for everyone',
            description: null,
            features: [
                '50 monthly generations (text + image)',
                'Access to standard AI model',
                'Basic editor for visuals and copy',
                '1 personal project',
                'Standard export (PNG, TXT)',
                'Access to community prompts library',
                'Email support'
            ],
            cta: 'Get started with Free',
            variant: 'outline' as const,
            highlight: false
        },
        {
            name: 'PRO',
            price: '$19 / month',
            description: null,
            features: [
                'Everything in Starter',
                'Unlimited generations across text & visuals',
                '10 brand profiles for consistent style / tone',
                'Advanced editor with layers + AI refinement tools',
                'Custom prompt templates',
                'Priority export formats (JPEG, SVG, DOCX)',
                'Cloud workspace — save and organize all assets',
                'Priority support'
            ],
            cta: 'Get started with Pro',
            variant: 'primary' as const,
            highlight: true,
            badge: '-32%'
        },
        {
            name: 'STUDIO',
            price: '$49 / month',
            description: null,
            features: [
                'Includes everything in Pro',
                'Multi-user collaboration (up to 10 seats)',
                'Real-time co-editing and feedback',
                'Private brand library + shared templates',
                'Access to premium AI models with faster generation',
                'Integration with Figma / Notion / Slack',
                'Custom export pipelines (API access)'
            ],
            cta: 'Get started with Studio',
            variant: 'outline' as const,
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 relative">
            {/* Background Glows */}
            <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">Pricing</h2>
                    <p className="text-gray-400">Start creating in minutes. No credit card required.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-3xl p-8 border ${plan.highlight
                                ? 'bg-[#0D121F] border-secondary/50 shadow-[0_0_40px_rgba(224,66,206,0.15)] scale-105 z-10'
                                : 'bg-[#060910] border-white/10'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                    <span className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-medium">{plan.name}</span>
                                    <div className="bg-[#131620] rounded-full p-1 flex items-center gap-2 border border-white/10">
                                        <button
                                            onClick={() => setIsAnnual(false)}
                                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${!isAnnual ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
                                        >
                                            Monthly
                                        </button>
                                        <button
                                            onClick={() => setIsAnnual(true)}
                                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${isAnnual ? 'bg-secondary text-white' : 'text-gray-500 hover:text-white'}`}
                                        >
                                            Annually
                                        </button>
                                    </div>
                                </div>
                            )}

                            {!plan.highlight && (
                                <div className="text-center mb-8">
                                    <span className="text-gray-500 text-sm uppercase tracking-widest font-medium">{plan.name}</span>
                                </div>
                            )}

                            <div className={`text-center mb-8 ${plan.highlight ? 'mt-8' : ''}`}>
                                <h3 className="text-2xl font-display font-medium text-white flex items-center justify-center gap-2">
                                    {plan.price}
                                    {plan.badge && (
                                        <span className="bg-[#4C6FFF] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{plan.badge}</span>
                                    )}
                                </h3>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-secondary/20 text-secondary' : 'bg-secondary/10 text-secondary'}`}>
                                            <Check size={10} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm text-gray-400 leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? 'primary' : 'outline'}
                                className={`w-full ${plan.highlight ? 'bg-gradient-to-r from-[#E042CE] to-[#4C6FFF]' : 'border-white/20'}`}
                                onClick={openModal}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
