
import StudentProject from './StudentProject'



export const metadata = {
  title: "Student Projects",
  description: "student projects description",
  alternates: {
    canonical: "/student-project",
  },
  robots: "index, follow, cache, archive",
  keywords: `'3D Architectural Design work', 'Surat multimedia school','Multimedia courses in Gujarat','3D architectural design projects', 'Student Animation Project Videos', 'Spider Man Graphic', 'Jewellery Design''Harikrushna Multimedia Institue',  `,
  openGraph: {
    title: "HKM - Student Project",
    description:
      "xplore the impressive projects created by the talented students of Harikrishna Multimedia Institute in Surat, Gujarat. Our students excel in 3D architectural design, jewellery design, and animation projects, showcasing creativity and technical skills. View stunning animations, intricate jewellery designs, and more from our comprehensive multimedia courses.",
    keywords: `'3D Architectural Design', 'jewellery work', 'Multimedia courses in Gujarat', 'Student Animation Project Videos', 'Spider Man Graphic', 'Jewellery Design'`,
    images: ["/logo.png",],
    url: "https://www.harikrushnamultimedia.com/student-project",
    type: "website",
    images:[
      "https://www.harikrushnamultimedia.com/api/og?title=Hari Krushna Multimedia Student Projects&course=Our Student Projects"
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hari Krushna Multimedia",
    description: "Learn animation techniques and principles in our interactive classes. Get hands-on experience and unleash your creativity!",
    images: [
       "https://www.harikrushnamultimedia.com/api/og?title=Hari Krushna Multimedia Student Projects&course=Our Student Projects"
    ],
  }

};

const page = () => {
  return (
    <StudentProject />
  )
}

export default page