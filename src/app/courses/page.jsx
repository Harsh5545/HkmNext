
import CourseMiddle from './CourseMiddle';
import CourseSection from './CourseSection';


// export const metadata = {
//     title: "Courses",
//     description: "About description",
//     alternates: {
//         canonical: "/courses"
//     }
// };
export const metadata = {
  title: "Course ",
  description: "Course description",
  alternates: {
    canonical: "/Course",
  },
  keywords: `'3D Architectural Design','Harikrushna Multimedia Institue', 'Video Editing', 'Game Design' , '3D Animation', 'Visual Effects', '2D Animation', '3D Jewellery Design', 'Graphics Design' `,
  openGraph: {
    title: "HKM - Courses",
    description:
      "Welcome to Harikrushna Multimedia Institute, located in Surat, Gujarat. We take pride in offering a diverse range of creative courses that empower aspiring individuals in the fields of multimedia, animation, and design. Our Location is Harikrushna Multimedia Institute, Shop No-7, Millenium Arcade, Hazira Rd, below You Broadband, opposite Royal Enfield Showroom, Aahura Nagar Society, Adajan Gam, Adajan, Surat, Gujarat 395009",
    keywords: `'3D Architectural Design', 'Video Editing', 'Game Design' , '3D Animation', 'Visual Effects', '2D Animation', '3D Jewellery Design', 'Graphics Design'`,
    images: ["/logo.png", ],
  },
};

const page = () => {

   

    return (
        <>
           
            <div>
<CourseSection/>
                <CourseMiddle />
            </div>
        </>
    );
}

export default page