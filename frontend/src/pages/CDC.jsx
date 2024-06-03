import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Title from "../components/ui/Title";

const why_gdc = [
  "To augment the competency of the technical workforce in the corporate world.",
  "To familiarize front line engineers with engineering Concepts, activities and quality working techniques in their respective fields.",
  "To enable middle managers understand activity interfaces and formulate integrated approach on technical projects.",
  "To facilitate training by setting up a modular training school with well-defined infrastructure and curriculum.",
  "To create a talent pool of skilled workforce capable of delivering world-class standards.",
];
const methodologies = [
  "Regular in house training and workshops for student to bridge the industry academia gap.",
  "Soft skill and personality development classes for students to encourage holistic development.",
  "Mock interviews for aspiring candidates.",
  "Lectures from industry experts.",
];

const cdc_team = [
  {
    name: "Mr. Arvind Pemawat - TPO",
    role: "CDC Head",
  },
  {
    name: "Dr. Rajeev Mathur, HOD ECE",
    role: "Panel Member",
  },
  {
    name: "Dr. Manish Verma, HOD CE",
    role: "Panel Member",
  },
  {
    name: "Dr. Deepak Paliwal, HOD ME",
    role: "Panel Member",
  },
  {
    name: "Dr. Monika Verdia, HOD EE",
    role: "Panel Member",
  },
  {
    name: "Dr. Mayank Patel, HOD CSE",
    role: "Panel Member",
  },
  {
    name: "Dr. Hemant Sahu, HOD MCA",
    role: "Panel Member",
  },
];

const CDC = () => {
  return (
    <>
      <Title title="CDC" />
      <Container>
        <div>
          <Heading>GITS CAREER DEVELOPMENT CENTRE (GCDC)</Heading>
          <p className="text-sm text-justify">
            Providing learners with a concise overview of chosen core
            competencies dramatically enhances their ability to grasp the
            fundamentals of that competency, and apply it to their daily work.
            In turn this allows organization to develop the right competencies
            to the right employees, at the right time. Towards fulfilling the
            demands in industries, GITS has established the GITS Competency
            Development Centre (GCDC), a first-of-its-kind Training Centre for
            training its students in its own campus for different activities
            based on the integrated project requirements.
          </p>
        </div>
        <div>
          <Heading>WHY CDC?</Heading>
          <ul className="text-sm space-y-3 text-justify">
            {why_gdc.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="fa-solid fa-thumbs-up text-primary pt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Heading>METHEDOLOGY</Heading>
          <ul className="text-sm space-y-3 text-justify">
            {methodologies.map((method, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="fa-solid fa-thumbs-up text-primary pt-1" />
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Heading>GITS CAREER DEVELOPMENT CENTRE (GCDC)</Heading>
          <div className="text-sm text-justify">
            {cdc_team.map(({ name, role }) => (
              <div
                key={name}
                className="grid grid-cols-2 max-w-screen-lg mx-auto border-2 border-collapse border-b-0 last:border-b-2"
              >
                <p className="border-r-2 p-2">{name}</p>
                <p className="p-2">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default CDC;
