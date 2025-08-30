"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
    const { data } = useSession();

    useEffect(() => {
        console.log("Session Data:", data);
    }, [data]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/search/Cleaning" },
        { name: "Maids", href: "/maids" },
        { name: "About Us", href: "/about-us" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-purple-50">
            {/* Top Navbar */}
            <div className="p-5 flex justify-between items-center">
                {/* Left Section: Logo + Links */}
                <div className="flex items-center gap-8">
                    <Link href={"/"}>
                        <Image
                            src="/logo.png"
                            alt="App logo"
                            width={180}
                            height={100}
                            priority
                        />
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition-all">
                                    {link.name}
                                </h2>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right Section: User Auth */}
                <div className="flex items-center gap-4">
                    {/* WhatsApp Button */}
                    <Link
                        href="https://wa.me/971545671677"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="flex items-center justify-center px-4 gap-2 h-10 rounded-full bg-green-500 hover:bg-green-600 transition text-white"
                    >
                        <BsWhatsapp size={20} />
                        <h2 className="text-lg font-semibold">Call Us</h2>
                    </Link>

                    {/* Auth Section */}
                    {data?.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Image
                                    src={data?.user?.image || "/default-avatar.png"}
                                    alt={data?.user?.name || "User"}
                                    width={40}
                                    height={40}
                                    className="rounded-full cursor-pointer"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href="/mybooking">My Booking</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => signOut()}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button onClick={() => signIn("descope")}>Login / Sign Up</Button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
