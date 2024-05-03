import React from 'react'
import AboutHero from './AboutHero'
import AboutMiddle from './AboutMiddle'

export const metadata = {
    title: "About",
    description: "About description",
    alternates: {
        canonical: "/about"
    }
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