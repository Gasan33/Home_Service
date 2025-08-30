import type { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'About Estheva Polyclinic | Advanced Healthcare and Aesthetic Solutions',
    description:
        'Welcome to Estheva Polyclinic, your trusted destination for advanced healthcare and aesthetic solutions. Experience personalized treatments, state-of-the-art facilities, and a professional team dedicated to your well-being.',
    keywords: [
        'Estheva Polyclinic',
        'healthcare',
        'aesthetic solutions',
        'advanced treatments',
        'personalized care',
        'medical professionals',
        'Dubai clinic',
    ],
    openGraph: {
        title: 'Estheva Polyclinic | Advanced Healthcare and Aesthetic Solutions',
        description:
            'Discover Estheva Polyclinic for premium healthcare and aesthetic treatments in Dubai. Our professional team ensures exceptional care tailored to your needs.',
        url: 'https://estheva-clinic.com',
        type: 'website',
        images: [
            {
                url: 'https://estheva-clinic.com/image.jpg',
                alt: 'Estheva Polyclinic',
            },
        ],
    },
    authors: [{ name: 'Estheva Polyclinic' }],
};
export function viewport() {
    return 'width=device-width, initial-scale=1.0';
}
const layout = async ({ children }: { children: ReactNode }) => {
    return (
        <div> {children} </div>
    )
}

export default layout;