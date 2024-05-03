import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from '@/components/ContactForm/ContactForm'
import ContactMap from './ContactMap'


export const metadata = {
    title: "Contact Us",
    description: "Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more. Pursue your passion by joining our courses after completing your 12th grade.",
    alternates: {
        canonical: "/contact"
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