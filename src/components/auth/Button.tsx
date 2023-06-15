import { ButtonHTMLAttributes, FC, forwardRef, ForwardedRef } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "submit" | "button" | "reset";
    className?: string;
}

const Button: FC<ButtonType> = forwardRef(
    ({ type, className, children, ...rest }, ref: ForwardedRef<any>) => {
        return (
            <button
                type={type || "submit"}
                {...rest}
                ref={ref}
                className={`h-12 rounded bg-avlblue px-8 text-white ${className}`}
            >
                {children}
            </button>
        );
    },
);

export default Button;
