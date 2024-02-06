import Link from 'next/link';

interface ButtonProps {
    href: string;
    className: string;
    children: React.ReactNode;
}

const Button = ({ href, children , className}: ButtonProps) => {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
};

export default Button;
