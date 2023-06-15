import {
    FC,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    forwardRef,
} from "react";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    type?: HTMLInputTypeAttribute;
    className?: string | undefined;
    placeholder?: string | undefined;
    required?: boolean;
    dir?: "rtl" | "ltr";
}

const Input: FC<InputType> = forwardRef<HTMLInputElement, InputType>(
    ({ type, className, placeholder, required, dir, ...rest }, ref) => (
        <input
            type={type || "text"}
            dir={dir || "rtl"}
            required={required || false}
            {...rest}
            ref={ref}
            className={`h-12 rounded border border-[#393d42] bg-transparent px-4 placeholder:text-right 
        focus-visible:outline-none ${className} ${
                dir == "ltr" ? "text-left" : ""
            }`}
            placeholder={placeholder || ""}
        />
    ),
);

export default Input;
