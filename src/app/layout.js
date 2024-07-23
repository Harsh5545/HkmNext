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
    description: "Learn animation techniques and principles in our interactive classes. Get hands-on experience and unleash your creativity!",
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
