"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight01Icon } from "hugeicons-react";
import Link from "next/link";

const AboutUs = () => {
    const gridItems = Array.from({ length: 40 }, (_, index) => `Item ${index + 1}`);
    return (
        <div className="mx-auto px-4 py-8 sm:px-6 lg:px-16 xl:px-24">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                {/* Image Section */}
                <div className="relative w-full mt-16 h-[400px] md:h-[600px]">
                    <div
                        className={`absolute grid grid-cols-5 gap-4 sm:gap-6 md:gap-8 bottom-12 sm:bottom-16 md:bottom-24 left-[-24px] sm:left-[-32px]`}
                    >
                        {gridItems.map((_, index) => (
                            <div key={index} className="bg-primary-400 p-1 rounded-full h-2 w-2"></div>
                        ))}
                    </div>

                    <div className="absolute top-8 sm:top-12 left-[6%] w-[85%] sm:w-[80%] h-[45%] sm:h-[50%] rounded-xl border-2 border-solid border-gray-500 bg-transparent"></div>

                    <div className="absolute top-16 sm:top-24 left-[12%] w-[80%] h-[55%] sm:h-[60%] rounded-lg">
                        <Image
                            src="/about.webp"
                            alt="About Our Services"
                            fill
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 400px"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="max-w-lg md:max-w-none">
                    <h3 className="text-lg font-medium text-primary sm:text-xl">About Us</h3>
                    <h2 className="text-2xl font-bold mt-2 text-gray-950 sm:text-3xl">
                        Reliable Home Services,
                    </h2>
                    <h2 className="text-2xl font-bold mt-4 text-gray-950 sm:text-3xl">
                        Anytime You Need
                    </h2>
                    <p className="mt-4 text-gray-500 text-sm sm:text-base">
                        We make home care simple and stress-free. From cleaning and maids to
                        plumbing, electrical, painting, and moving services — our trusted professionals
                        are just a tap away. With verified experts, transparent pricing, and
                        on-demand booking, we ensure your home is always in safe hands.
                    </p>

                    <Link href="/about-us" className="flex w-full mt-16 justify-center">
                        <Button className="lg:mt-8 mt-4 py-6 px-8 rounded-full bg-primary cursor-pointer text-white shadow-lg hover:bg-primary-500">
                            Discover More
                            <ArrowRight01Icon size={32} className="text-white" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
