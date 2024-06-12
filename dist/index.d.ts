/// <reference types="react" />
interface ButtonProps {
    text: string;
    onClick: () => void;
}

declare const Button: (props: ButtonProps) => JSX.Element;

export { Button, type ButtonProps };
