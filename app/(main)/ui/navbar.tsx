import Link from "next/link";
import React from "react";

interface NavbarLinkProps {
    href: string,
    title: string
}

function NavbarLink ({ href, title }: NavbarLinkProps) {
    return (
        <div className="text-xl text-bold hover:text-gray-400">
            <Link href={href}>{title}</Link>
        </div>
    );
}

const links = [
    { href: "/", title: "Home" },
    { href: "/projects", title: "Projects" },
]

export default function Navbar () {
    return (
        <nav className="flex justify-center items-center text-white mt-10">
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    <NavbarLink href={link.href} title={link.title} />
                    {
                        index !== links.length - 1 ? <span className="mx-6">|</span> : null
                    }
                </React.Fragment>
            ))}
        </nav>
    );
}