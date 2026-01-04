import React from 'react';

interface AppButtonProps {
    title: string;
    onTap?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
    title,
    onTap,
    className = "",
    disabled = false,
    type = 'button',
    children
}) => {
    return (
        <button
            type={type}
            className={`button-74 uppercase transition-all duration-150 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            role="button"
            disabled={disabled}
            onClick={onTap}
        >
            {children ? children : title}
        </button>
    );
};

export default AppButton;