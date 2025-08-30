"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import HeaderPath from "../../_components/HeaderPath"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { Mail01Icon } from "hugeicons-react"


const AboutUs = () => {


    return (
        <div className="mt-6">
            {/* ✅ Move Head to layout.tsx or page.tsx if possible */}
            {/* If using App Router, better: export const metadata = { title: "...", description: "..." } */}

            <HeaderPath title="About Home Service" path="/about" />

            <div className="flex flex-col mt-4 md:mt-6 lg:mt-8">
                {/* About Section */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4 md:pb-6 lg:pb-20 px-4 md:px-8 lg:px-12 xl:px-16"
                    data-aos="fade-up"
                >
                    <div className="w-full h-auto">
                        <h3 className="text-2xl md:text-3xl lg:text-5xl">About Home Service</h3>
                        <p
                            className="mt-4 md:mt-6 lg:mt-8 text-gray-500 lg:pr-16 text-lg md:text-xl pb-8"
                            data-aos="fade-up"
                        >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </div>
                    <div className="w-full h-full rounded-lg overflow-hidden">
                        <Image
                            src="/about1.webp"
                            alt="about"
                            width={600}
                            height={600}
                            className="object-cover h-full w-full"
                            data-aos="zoom-in"
                        />
                    </div>
                </div>

                {/* Our Story */}
                <div className="py-16 rounded-lg bg-primary">
                    <h1 className="text-4xl flex justify-center font-bold text-white">Our Story</h1>

                    <div className="mt-16 mx-4 md:mx-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                        {["2022", "2023", "2024"].map((year, i) => (
                            <div
                                key={year}
                                className="flex flex-col px-4 gap-4"
                                data-aos="fade-up"
                                data-aos-delay={i * 200}
                            >
                                <h1 className="text-3xl text-primaryColor font-semibold uppercase tracking-wider">
                                    {year}
                                </h1>
                                <p className="text-gray-100 line-clamp-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact / Info */}
                <div className="py-16  w-full">
                    <div
                        className="mx-4 md:mx-16 grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-10"
                        data-aos="fade-left"
                    >
                        <div>
                            <Image
                                src="/about2.jpg"
                                alt="Home Service"
                                className="w-full h-full object-cover rounded-lg"
                                width={400}
                                height={400}
                            />
                        </div>

                        <div className="flex flex-col gap-4 py-8">
                            <h1 className="text-4xl text-primaryColor font-bold uppercase tracking-wider">
                                Home Service
                            </h1>
                            <div className="border border-primaryColor w-40"></div>

                            {["Villa 375B", "Al Wasl Road", "Dubai", "United Arab Emirates"].map((item, i) => (
                                <h2
                                    key={i}
                                    className="mt-2 text-primary sm:text-sm md:text-lg lg:text-xl xl:text-2xl"
                                >
                                    {item}
                                </h2>
                            ))}

                            {/* Working Hours */}
                            <h1 className="text-primaryColor sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-widest">
                                Working Hours
                            </h1>
                            <div className="border border-primaryColor w-40"></div>
                            <div className="flex justify-between items-center text-primary text-lg sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                                <label>MON-SUN</label>
                                <label>09:00 AM - 09:00 PM</label>
                            </div>

                            {/* Contact */}
                            <h1 className="text-primaryColor sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-widest">
                                Contact
                            </h1>
                            <div className="border border-primaryColor w-40"></div>

                            <div className="flex gap-4 items-center text-primary text-lg sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                                <PhoneIcon className="text-primaryColor" size={24} />
                                <label>+971 54 567 1677</label>
                            </div>

                            <Link
                                href="mailto:info@home-service.ae"
                                className="flex gap-4 items-center text-primaryColor text-lg sm:text-sm md:text-lg lg:text-xl xl:text-2xl hover:underline"
                            >
                                <Mail01Icon size={24} />
                                <p>info@home-service.ae</p>
                                <ArrowRightIcon className="-rotate-45" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
