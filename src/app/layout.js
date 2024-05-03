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

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div className=" mx-auto">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
