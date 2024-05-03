
import StudentProject from './StudentProject'



export const metadata = {
    title: "Student Projects",
    description: "Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more. Pursue your passion by joining our courses after completing your 12th grade.",
    alternates: {
        canonical: "/student-project"
    }
};

const page = () => {
  return (
    <StudentProject/>
  )
}

export default page