type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, variant = "primary", size = "normal", ...props }: TButtonProps) => {
    const baseClasses = "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105";
    const variantClasses = {
        primary: "bg-primary text-white hover:bg-primary/85",
        dark: "bg-dark text-white hover:bg-dark/85",
        ghost: "bg-transparent text-dark hover:bg-gray-100"
    };
    const sizeClasses = {
        normal: "px-9 py-4",
        small: "px-7 py-[10px]"
    };

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`} {...props}>
            {children}
        </button>
    );
}