import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Title from "../components/ui/Title";

const features = [
  "The First Self Financing Engineering College in Southern Rajasthan.",
  "Sixth ranked college in Rajasthan (GHRDC-CSR) for quality.",
  "Highest placement in Southern Rajasthan",
  "Maximum teachers to student's ratio in Rajasthan.",
  "Highest number of externally funded student projects",
  "IBM Software Centre of Excellence- Training and Certification camp on DB2/RAD/TDS/RFT/ Lotus/WID.",
  "Nodal Centre for NITTTR, Chandigarh for conducting the faculty and student development program.",
  "Exclusive Innovation Lab for research work set up by Texas Instruments, Bangalore as per Annexure-VIII",
  "Highest Industry- Academic collaborations, National and International tie-ups for better exposure to technology and growth.",
  "First Engineering College to get total admission filled every year in Udaipur region.",
  "Only College Campus with Total Wi-Fi connection, Gym, Air cooled hostels for boys & girls and Medical facilities.",
  "Spoken Tutorial - Open Source Software Tutorials - (IITB Spoken Tutorial)",
];

const WhyGits = () => {
  return (
    <div>
      <Title title="Welcome to Gits" />
      <Container>
        <Heading>Welcome TO GITS</Heading>
        <div className="space-y-4 text-xs sm:text-sm lg:text-base my-6 text-justify">
          <p>
            GITS have created a niche in the world of technical and management
            innovation. Our standard progression of delivering concepts of
            management, technical skills and computer application is a benchmark
            in the education industry. Not only we deliver, we are also
            trouble-shooters when it comes to support a talent. We do not judge
            our height by meters because we have never stop growing, the
            fineness of our work always increased. We are neither behind the
            time nor ahead we are just stay to be honest, we are masters in
            understanding “The Order of the Day”.
          </p>
          <p>
            Geetanjali Institute of Technical Studies , popularly known as GITS
            was established by Geetanjali Education Society in the year 2002-03.
            The institute is recognized by AICTE and Govt of Rajasthan and is
            affiliated to Rajasthan Technical University, Kota to provide
            technical and professional education to the youth in general and
            also the tribal people of the region in particular.
          </p>
        </div>
        <div className="my-8">
          <h4 className="text-xl font-semibold">Features</h4>
          <ul className="space-y-2 md:space-y-3 my-5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-justify">
                <span className="fa-regular fa-star text-primary pt-1" />
                <span className="text-xs sm:text-sm lg:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default WhyGits;
