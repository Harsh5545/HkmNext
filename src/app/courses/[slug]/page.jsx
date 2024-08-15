import Image from 'next/image';
import { CourseDetails } from '@/helpers/Constant';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@/components/Button/Button';
import VerticalCarousel from '@/components/slider/VerticalCarousel';
import FaqCourse from '@/components/Faq/FaqCourse';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm/ContactForm';
import Link from 'next/link';

const capitalizeFirstLetter = (str) => {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// Fetch course details on each request
export async function generateMetadata({ params }) {
  const { slug } = params;

  const details = CourseDetails.filter(
    (course) =>
      course.course === capitalizeFirstLetter(slug.replace(/%20/g, " "))
  );

  const course = details.length > 0 ? details[0] : {};
  
  return {
    title: course.heading || "Default Title",
    description: course.headingPara || "Default description",
    alternates: {
      canonical: `/courses/${slug.replace(/%20/g, " ")}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: course.heading || "Default Title",
      description: course.headingPara || "Default description",
      images: [`https://www.harikrushnamultimedia.com/api/og?title=${course.heading}&course=${'Connect Now For Admissions'}`],
      url: `https://www.harikrushnamultimedia.com/course/${slug}`,
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title: course.heading || "Default Title",
      description: course.headingPara || "Default description",
      images: [course.twitterImage || "/default-image.png"],
    },
  };
}

export async function getCourseDetails(slug) {
  const details = CourseDetails.filter(
    (course) =>
      course.course === capitalizeFirstLetter(slug.replace(/%20/g, " "))
  );

  return details.length > 0 ? details[0] : null;
}

const Page = async ({ params }) => {
  const { slug } = params;
  const course = await getCourseDetails(slug);

  if (!course) {
    notFound(); // Optionally handle not found cases
    return;
  }

  const backgroundStyles = {
    backgroundImage: `url(${course.HeaderImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
  };

  const bgOverlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)",
    opacity: 0.74,
    height: "100vh",
  };

  const CourseHighlights = [
    "Job-oriented, industry-centric curriculum",
    "Hands-on practical training using the latest tools and software",
    "Certified faculty ensuring quality education",
    "Exposure to industry interaction and engaging workshops",
    "Placement assistance for a successful career launch",
    "Knowledge of AI",
  ];

  return (
    <div className="font-poppins overflow-hidden mx-auto">
      <div style={backgroundStyles}>
        <div style={bgOverlayStyle}></div>
        <div className="mb-8 h-[100vh] flex gap-5 md:flex-row flex-col-reverse justify-between items-center">
          <div className="flex-1">
            <Image
              width={700}
              height={600}
              src={course.PngImage || "/default-image.png"}
              alt={course.alt || "default description"}
            />
          </div>
          <div className="flex-1 flex relative justify-end flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "white" }}>
              {course.heading}
            </h1>
            <p className="text-md md:text-xl w-[90%]" style={{ color: "white" }}>
              {course.headingPara}
            </p>
          </div>
        </div>
      </div>

      {/* COURSE HIGHLIGHTS section */}
      <div className="flex md:h-[80vh] flex-col md:flex-row items-center justify-center">
        <div className="m-10 flex-1 flex justify-between flex-col">
          <h2 className="md:text-5xl text-3xl text-center font-bold mb-4">
            COURSE HIGHLIGHTS
          </h2>
          <ul className="list-disc pl-6">
            {CourseHighlights.map((highlight, index) => (
              <li key={index} className="mb-2 md:text-2xl text-xl">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={course.HeighletsImage || "/default-image.png"}
            height={600}
            width={600}
            alt="course highlights"
          />
        </div>
      </div>

      {/* WHAT YOU'LL LEARN */}
      <div className="flex py-8 gap-5 md:flex-row flex-col-reverse justify-center items-center h-full bg-[#001321]">
        <div className="flex justify-center md:w-[60%] w-full">
          <Image src={course.WULImage || "/default-image.png"} width={800} height={500} alt="what you learn" />
        </div>
        <div className="flex flex-1 flex-col gap-10 justify-center" style={{ color: "white" }}>
          <h3 className="md:text-5xl text-3xl text-center">WHAT YOU'LL LEARN HERE</h3>
          <ul className="items-start md:text-3xl text-xl">
            {course?.whatULearn?.map((learn, index) => (
              <li className="mt-1 flex items-center gap-2" key={index}>
                <ArrowRightIcon />
                {learn}
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <Link href="/contact" passHref>
              <Button
                value="Explore Now"
                className="btn"

              />
            </Link>
          </div>
        </div>
      </div>

      {/* Vertical Carousel */}
      <div className="p-4 flex flex-col md:flex-row h-[100vh] md:h-[60vh] justify-center items-center">
        <div className="flex-1 items-center flex justify-end flex-col">
          <h4 className="md:text-5xl font-poppins text-2xl">TOOLS & SOFTWARE</h4>
          <VerticalCarousel />
        </div>
        <div className="flex-1 items-center flex gap-2 justify-center flex-col font-poppins">
          <span className="md:text-5xl font-poppins text-2xl">CERTIFICATIONS</span>
          <Image
            src="/course/certificate-medal-transformed.webp"
            width={209}
            height={200}
            alt="Certificate image"
          />
          <p className="text-lg md:text-2xl text-center">
            Harikrushna Multimedia Certified Expert in 3D Animation
          </p>
        </div>
      </div>

      {/* Criteria */}
      <div className="grid md:grid-cols-3 px-8 justify-center md:flex-row flex-col md:gap-1 gap-14 items-start my-20">
        {/* ELIGIBILITY CRITERIA */}
        <div className="md:col-span-1 flex gap-5 justify-center items-center flex-col">
          <h5 className="text-3xl text-center font-poppins">ELIGIBILITY CRITERIA</h5>
          <Image
            className="h-[14rem] transition-transform transform duration-500 hover:scale-110"
            width={400}
            height={400}
            src="/course/eligibility.webp"
            alt="Eligibility Criteria"
          />
          <p className="w-full md:w-[60%] text-md md:text-xl text-center">
            Graduates and undergraduates are welcome to apply after successfully completing their 10 + 2 education.
          </p>
        </div>

        {/* COURSE DURATION */}
        <div className="md:col-span-1 flex gap-5 justify-center items-center flex-col">
          <h6 className="text-3xl text-center font-poppins">COURSE DURATION</h6>
          <Image
            className="h-[14rem] transition-transform duration-500 transform hover:scale-110"
            width={400}
            height={400}
            src="/course/course-duration.webp"
            alt="Course Duration"
          />
          <p className="w-full md:w-[60%] text-md md:text-xl text-center">
            Experience a 12-month program with 2 hours of daily classes for 6 days a week, providing practical assignments.
          </p>
        </div>

        {/* PLACEMENT GUARANTEE */}
        <div className="md:col-span-1 flex gap-5 justify-center items-center flex-col">
          <span className="text-3xl text-center font-poppins">PLACEMENT GUARANTEE</span>
          <Image
            className="h-[14rem] transition-transform transform duration-500 hover:scale-110"
            width={400}
            height={400}
            src="/course/placement-guarantee.webp"
            alt="Placement Guarantee"
          />
          <p className="w-full md:w-[60%] text-md md:text-xl text-center">
            Secure your future with our Placement Guarantee, connecting you with industry leaders for exciting career opportunities after the program.
          </p>
        </div>
      </div>

      <FaqCourse courseName={course.course} />
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
