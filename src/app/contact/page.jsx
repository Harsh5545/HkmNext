import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from '@/components/ContactForm/ContactForm'
import ContactMap from './ContactMap'


export const metadata = {
  title: "Contact Us",
  description: "Contact description",
  alternates: {
    canonical: "/contact",
  },
   robots: {
        index: true,
        follow: true,
    },

  keywords: `'3D Architectural Design','Harikrushna Multimedia Institue', 'Video Editing', 'Game Design' , '3D Animation', 'Visual Effects', '2D Animation', '3D Jewellery Design', 'Graphics Design' `,
  openGraph: {
    title: "HKM - Contact",
    description:
      "Welcome to Harikrushna Multimedia Institute, located in Surat, Gujarat. We take pride in offering a diverse range of creative courses that empower aspiring individuals in the fields of multimedia, animation, and design. Our Location is Harikrushna Multimedia Institute, Shop No-7, Millenium Arcade, Hazira Rd, below You Broadband, opposite Royal Enfield Showroom, Aahura Nagar Society, Adajan Gam, Adajan, Surat, Gujarat 395009",
    keywords: `'3D Architectural Design', 'Video Editing', 'Game Design' , '3D Animation', 'Visual Effects', '2D Animation', '3D Jewellery Design', 'Graphics Design'`,
    images: ["/logo.png", ],
url: "https://www.harikrushnamultimedia.com/contact",
        type: "website",

  },
 twitter: {
        card: 'summary_large_image',
        title: "Hari Krushna Multimedia",
        description: "Learn animation techniques and principles in our interactive classes. Get hands-on experience and unleash your creativity!",
        images: [],
    }

};




const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </div>
  )
}

export default page