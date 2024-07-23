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
    "legalName": "Your Company Name",
    "url": "https://example.com",
    "description": "A brief description of your company.",
    "logo": "https://example.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-123-456-7890",
        "contactType": "customer service",
        "contactOption": "TollFree",
        "areaServed": "IN"
    },
    "sameAs": [
        "https://www.facebook.com/yourcompany",
        "https://twitter.com/yourcompany",
        "https://www.linkedin.com/company/yourcompany",
        "https://www.instagram.com/yourcompany"
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Street Name",
        "addressLocality": "City",
        "addressRegion": "State",
        "postalCode": "123456",
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
