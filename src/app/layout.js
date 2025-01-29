import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import EnhancedLoader from "./EnhancedLoader";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Hari Krushna Multimedia",
        template: "H K M | %s",
    },
    description: "Harikrushna Multimedia Institute, located in Surat, is renowned for being one of the top 10 institutes offering expert courses in animation, VFX, game design, and jewelry design. Our experienced faculty provides industry-leading education at affordable prices, ensuring fixed job placements for graduates. Discover the best classes in Surat and unleash your creativity with practical, hands-on training tailored for your career success.",
    keywords: "best classes in Surat, animation courses Surat, VFX training Surat, game design classes Surat, jewelry design courses Surat, top 10 institutes in Surat, affordable multimedia courses, Harikrushna Multimedia Institute, fixed job placement, Surat education",
    alternates: { canonical: "/" },
    robots: "index, follow, cache, archive",
    openGraph: {
        title: "Hari Krushna Multimedia",
        description: "Harikrushna Multimedia Institute, located in Surat, is renowned for being one of the top 10 institutes offering expert courses in animation, VFX, game design, and jewelry design. Our experienced faculty provides industry-leading education at affordable prices, ensuring fixed job placements for graduates. Discover the best classes in Surat and unleash your creativity with practical, hands-on training tailored for your career success.",
        url: "https://www.harikrushnamultimedia.com/",
        type: "website",
        keywords: "best classes in Surat, animation courses Surat, VFX training Surat, game design classes Surat, jewelry design courses Surat, top 10 institutes in Surat, affordable multimedia courses, Harikrushna Multimedia Institute, fixed job placement, Surat education",
        images: [
            'https://res.cloudinary.com/durzmjn4o/image/upload/v1721831839/HariKrushna/xnq60qfs6s7achymt6vf.png'

        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Hari Krushna Multimedia",
        description: "Harikrushna Multimedia Institute, located in Surat, is renowned for being one of the top 10 institutes offering expert courses in animation, VFX, game design, and jewelry design. Our experienced faculty provides industry-leading education at affordable prices, ensuring fixed job placements for graduates. Discover the best classes in Surat and unleash your creativity with practical, hands-on training tailored for your career success.",
        images: [
            'https://res.cloudinary.com/durzmjn4o/image/upload/v1721831839/HariKrushna/xnq60qfs6s7achymt6vf.png'
        ],
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
            <Head><link rel="icon" href="/favicon.ico" /></Head>
            <body className={inter.className}>
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
                <Script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "q1mhol4dau");`,
                    }}
                />

                <EnhancedLoader>
                    <Navbar />
                    <div className=" mx-auto">
                        {children}
                    </div>
                    <Footer />
                </EnhancedLoader>
            </body>
        </html>
    );
}
