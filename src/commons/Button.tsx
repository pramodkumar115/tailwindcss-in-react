import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning',
    size?: 'large' | 'medium' | 'small',
    isOutline?: boolean,
    className?: string // any overridden class from the caller
}

const Button: React.FC<ButtonProps> =
    ({ variant = 'primary',
        size = 'medium',
        isOutline = false,
        className,
        ...props }) => {

        const getStyleClass = () => {
            const classNames: string[] = ['shadow-md', 'rounded-sm', 'border'];
            switch (variant) {
                case 'primary':
                    classNames.push('border-blue-900');
                    !isOutline ? classNames.push("bg-blue-900", 'text-white', 'hover:bg-blue-700')
                        : classNames.push('text-blue-900', 'hover:text-blue-400');
                    break;
                case 'secondary':
                    classNames.push('border-black', 'bg-white', 'text-black', 'hover:text-gray-400');
                    break;
                case 'success':
                    classNames.push('border-green-900');
                    !isOutline ? classNames.push('bg-green-900', 'text-white', 'hover:bg-green-700')
                        : classNames.push('text-green-900', 'hover:text-green-700');
                    break;
                case 'warning':
                    classNames.push('border-orange-600');
                    !isOutline ? classNames.push('bg-orange-600', 'text-white', 'hover:bg-orange-400')
                        : classNames.push('text-orange-600', 'hover:text-orange-500')
                    break;
                case 'error':
                    classNames.push('border-red-700');
                    !isOutline ? classNames.push('bg-red-700', 'text-white', 'hover:bg-red-600')
                        : classNames.push('text-red-700', 'hover:text-red-600');
                    break;
                default: break;
            }
            switch (size) {
                case 'small': classNames.push('px-1', 'text-sm'); break;
                case 'medium': classNames.push('py-1', 'px-2'); break;
                case 'large': classNames.push('py-2', 'px-4'); break;
            }
            return Array.from(new Set(classNames)).join(" ")
        }

        return (
            <button className={`${getStyleClass()} ${className}`} {...props}>
                {props.children}
            </button>
        );
    }

export default Button;