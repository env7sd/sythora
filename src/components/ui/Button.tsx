import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'outline-gradient' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center rounded-full font-display font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const sizes = {
        sm: 'px-6 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-gradient-to-r from-[#E042CE] to-[#1CCAEC] text-white hover:shadow-[0_0_20px_rgba(224,66,206,0.5)] hover:bg-opacity-90 active:scale-95 border border-transparent';
            case 'outline':
                return 'bg-transparent border border-white/50 text-white hover:bg-white/5 hover:border-white active:scale-95';
            case 'outline-gradient':
                return 'text-white border border-transparent bg-origin-border relative !bg-clip-text text-transparent bg-gradient-to-r from-[#E042CE] to-[#1CCAEC] before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-[#E042CE] before:to-[#1CCAEC] before:content-[""] before:mask-linear-gradient hover:shadow-[0_0_15px_rgba(224,66,206,0.3)] active:scale-95';
            case 'ghost':
                return 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5';
            default:
                return '';
        }
    };

    if (variant === 'outline-gradient') {
        return (
            <button
                className={`${baseStyles} ${sizes[size]} group relative p-[1px] overflow-hidden ${className}`}
                {...props}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E042CE] to-[#1CCAEC]" />
                <div className="absolute inset-[1px] rounded-full bg-background" />
                <span className="relative bg-gradient-to-r from-[#E042CE] to-[#1CCAEC] bg-clip-text text-transparent group-hover:text-white transition-colors">
                    {children}
                </span>
            </button>
        );
    }

    return (
        <button
            className={`${baseStyles} ${getVariantStyles()} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
