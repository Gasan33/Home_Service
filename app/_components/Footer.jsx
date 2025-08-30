"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiPhone01Icon, ArrowDown01Icon, Location10Icon, Mail01Icon } from "hugeicons-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";
import GlobalApi from "../_services/GlobalApi";

const socialLinks = [
    { path: "https://facebook.com", icon: <BsFacebook className="w-5 h-5" />, label: "Facebook" },
    { path: "https://tiktok.com", icon: <BsTiktok className="w-5 h-5" />, label: "TikTok" },
    { path: "https://instagram.com", icon: <BsInstagram className="w-5 h-5" />, label: "Instagram" },
    { path: "https://linkedin.com", icon: <BsLinkedin className="w-5 h-5" />, label: "LinkedIn" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Maids", href: "/maids" },
    { name: "About Us", href: "/about-us" },
];

export const Footer = () => {
    const pathname = usePathname();
    const [categoryList, setCategoryList] = useState([]);
    const hideFooterRoutes = ["/blogs/news", "/blogs/blogs"];
    const showFooter = !hideFooterRoutes.includes(pathname);
    const year = new Date().getFullYear();

    useEffect(() => {
        GlobalApi.getCategory()
            .then((res) => setCategoryList(res.categories || []))
            .catch(() => setCategoryList([]));
    }, []);

    if (!showFooter) return null;

    return (
        <footer className="bg-primary bg-pattern text-gray-200 px-4 sm:px-8 lg:px-32 py-10 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-6">

                {/* Logo + Contact */}
                <div>
                    <Image
                        src="/logoWhite.png"
                        alt="Home Service Logo"
                        width={140}
                        height={60}
                        className="object-contain"
                    />
                    <div className="mt-4 space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                            <AiPhone01Icon className="p-1 bg-white rounded-full" size={24} color="#172554" />
                            <span>+971 545671677</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail01Icon className="p-1 bg-white rounded-full" size={24} color="#172554" />
                            <span>info@home-service.ae</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Location10Icon className="p-1 bg-white rounded-full" size={24} color="#172554" />
                            <span>UAE, Dubai, Jumeira 1, Al Wasl Road, Building 375b.</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="hidden lg:block">
                    <h2 className="text-lg font-bold">Categories</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                        {categoryList.length > 0 ? (
                            categoryList.map((category, index) => (
                                <Link
                                    key={index}
                                    href={`/search/${category.name}`}
                                    className="hover:scale-105 hover:font-semibold transition-all"
                                >
                                    {category.name}
                                </Link>
                            ))
                        ) : (
                            <p className="text-gray-400">No categories available</p>
                        )}
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h2 className="text-lg font-bold">Quick Links</h2>
                    <div className="flex flex-col gap-2 mt-4 text-sm">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <span className="hover:scale-105 hover:font-semibold transition-all">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-6">
                {/* Social */}
                <div className="flex gap-4">
                    {socialLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="hover:text-white transition"
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>

                {/* Policies */}
                <div className="flex items-center gap-3 mt-4 md:mt-0 text-xs">
                    <Link href="/terms&conditions" className="hover:underline">
                        Terms & Conditions
                    </Link>
                    <span className="w-1 h-1 rounded-full bg-white" />
                    <Link href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                    </Link>
                </div>
            </div>

            <p className="text-center mt-6 text-[10px] text-gray-400">
                © {year} Home-Service. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
