import React from 'react'
import AboutHero from './AboutHero'
import AboutMiddle from './AboutMiddle'

export const metadata = {
    title: "About",
    description: "About description",
    alternates: {
        canonical: "/about"
    },
    keywords:`'next','react','technology'` ,
    openGraph: {
        title: "HKM - About",
        description: "About description",
        keywords:`'next','react','technology'`,
        images: ['/logo.png'],
    },
};


const page = () => {

    return (
        <div>
            <AboutHero />
            <AboutMiddle />
        </div>
    )
}

export default page