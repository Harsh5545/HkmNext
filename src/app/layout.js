import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Hari Krushna Multimedia",
        template: "H K M | %s",
    },
    description: "Harikrushna Multimedia Institute, located in Surat, is renowned for being one of the top 10 institutes offering expert courses in animation, VFX, game design, and jewelry design. Our experienced faculty provides industry-leading education at affordable prices, ensuring fixed job placements for graduates. Discover the best classes in Surat and unleash your creativity with practical, hands-on training tailored for your career success.",
    keywords: "best classes in Surat, animation courses Surat, VFX training Surat, game design classes Surat, jewelry design courses Surat, top 10 institutes in Surat, affordable multimedia courses, Harikrushna Multimedia Institute, fixed job placement, Surat education",
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Hari Krushna Multimedia",
        description: "Harikrushna Multimedia Institute, located in Surat, is renowned for being one of the top 10 institutes offering expert courses in animation, VFX, game design, and jewelry design. Our experienced faculty provides industry-leading education at affordable prices, ensuring fixed job placements for graduates. Discover the best classes in Surat and unleash your creativity with practical, hands-on training tailored for your career success.",
        url: "https://www.hkmultimedia.com",
        type: "website",
        keywords: "best classes in Surat, animation courses Surat, VFX training Surat, game design classes Surat, jewelry design courses Surat, top 10 institutes in Surat, affordable multimedia courses, Harikrushna Multimedia Institute, fixed job placement, Surat education",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Hari Krushna Multimedia",
        description: "Harikrushna Multimedia Institute, located in Surat, is renowned for being one of the top 10 institutes offering expert courses in animation, VFX, game design, and jewelry design. Our experienced faculty provides industry-leading education at affordable prices, ensuring fixed job placements for graduates. Discover the best classes in Surat and unleash your creativity with practical, hands-on training tailored for your career success.",
        images: [],
    }
};



const schemaData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "legalName": "Harikrushna Multimedia Institute",
    "url": "https://harikrushnamultimedia.com",
    "description": "Harikrushna Multimedia Institute offers professional training in multimedia and design, fostering creativity and technical expertise.",
    "logo": "https://harikrushnamultimedia.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-966-483-3542",
        "contactType": "customer service",
        "contactOption": "TollFree",
        "areaServed": "IN"
    },
    "sameAs": [
        "https://www.facebook.com/people/Harikrushna-Multimedia-institute/61557294870856/?mibextid=ZbWKwL",
        "https://twitter.com/harikrushnamultimedia",
        "https://www.instagram.com/harikrushna_multimedia/",
        
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Adajan",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395009",
        "addressCountry": "IN"
    }
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
                <Navbar />
                <div className=" mx-auto">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
