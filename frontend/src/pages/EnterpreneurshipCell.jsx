import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Title from "../components/ui/Title";

const vision = [
  "To identify the opportunities that will allow the growth and success of every student through developing their inter-disciplinary learning and seek new business opportunities for the growth of the society and nation by providing technological and logistical assistance.",
];
const mission = [
  "Evolve and spread out the new knowledge and insights in entrepreneurial theory and practice through exploration and facilitating corporate excellence through creating entrepreneurs. Our aim is to enhance and promote entrepreneurial culture within the institutional mechanism and recognizes their responsibility for providing motivation, guidance, opportunity to students and other services to prospective and budding new entrepreneurs.",
];

const objectives = [
  "To channelize the knowledge and the energy of youth towards becoming active partners in the economic development process.",
  "To catalyze and promote development of knowledge-based and innovation-driven enterprises and promote employment opportunities amongst youth specially students;",
  "To inculcate a culture of innovation driven entrepreneurship.",
  "To act as an institutional mechanism for providing various services including information on all aspects of enterprise building to budding GITS entrepreneurs.",
  "To initiate five innovative student projects each year for new innovative product development.",
  "To organize Business Plan Competitions periodically.",
  "To arrange interaction with industrialist and create a mentorship scheme for student entrepreneurs.",
];
const functions = [
  "To motivate, support and mentor students for identification, development and commercialization of their innovative ideas.",
  "To initiate targeted number of innovative student projects each year for new product development.",
  "To organize Business Plan Competitions / Innovation Camps / Hackathons with active involvement of industry and alumni.",
  "To arrange interaction with industrialist and create a mentorship scheme for student entrepreneurs.",
  "To arrange interaction with entrepreneurs, bankers, professionals, potential customers and create a mentorship scheme for student innovators.",
  "To facilitate creation of Entrepreneur's Club / E-Cells in the college to foster culture of entrepreneurship amongst students.",
];

const upcoming_events = [
  "Guest Lectures	",
  "Workshops",
  "Panel Discussions	",
  "Internship Fair",
  "Candid Talk : Interview	",
  "Startup Case Challenge",
  "Connect The Dots	",
  "National Level Fair to Promote Entrepreneurship Idea",
  "Set up an Incubation Centre of any Organization",
];

const core_committee_members = [
  {
    name: "Prof. Dr. N. S. Rathore",
    post: "Director, GITS",
    role: "Chairman EDC",
  },
  {
    name: "Mr. Arvind Singh Pemawat",
    post: "HOD - Training & Plaement, GITS",
    role: "Convener (Engg., MCA) EDC",
  },
  {
    name: "Mr. Rajeev Pandya, HOD ECE",
    post: "GM(HR),Geetanjali Group",
    role: "Core Member",
  },
  {
    name: "Dr. Kiran Soni",
    post: "Asst. Professor, MBA",
    role: "Core Member",
  },
  {
    name: "Dr. Manish Saraswat",
    post: "Asst. Professor, MCA",
    role: "Core Member",
  },
  {
    name: "Ms. Shailja Ranawat",
    post: "PS, Director",
    role: "Core Member",
  },
  {
    name: "GITS Entrepreneur (Alumni)",
    post: "Entrepneur",
    role: "Core Member",
  },
];
const committee_members = [
  {
    name: "Mr. Vijendra Maurya",
    role: "Member",
  },
  {
    name: "Mr. Ravi Teli",
    role: "Member",
  },
  {
    name: "Mr. Jitendra Sharma",
    role: "Member",
  },
  {
    name: "Mr. Mayank Patel",
    role: "Member",
  },
  {
    name: "Mr. Chintal Patel",
    role: "Member",
  },
  {
    name: "Mr. Narendra Patel",
    role: "Member",
  },
  {
    name: "Dr. Charu Khamesra",
    role: "Member",
  },
];

const EnterpreneurshipCell = () => {
  return (
    <>
      <Title title="ENTREPRENEURSHIP DEVELOPMENT CELL" />
      <Container>
        <div className="space-y-12">
          <div>
            <Heading>
              <span className="uppercase">INTRODUCTION</span>
            </Heading>
            <p className="text-sm text-justify">
              EDC is an initiative by Shri J.P.Agarwal, Chairman, Geetanjali
              Group to foster growth of Innovation & Entrepreneurship and
              develop entrepreneurship culture among the students of GITS. The
              Goal of EDC is to not only create awareness among the students
              about Entrepreneurship through various programs like workshops,
              speaker session, and other such events but also to support the
              upcoming Entrepreneurs by providing them necessary resources like
              mentors, consultancy, seed fund and networking to enable the
              budding innovators and developers launch their products and help
              establish successful business enterprises. Under the above program
              an Annual Initiative, “GITS-E (Entrepreneur) - 2016”, the top
              management undertakes to fund and promote a project with potential
              each year.
            </p>
          </div>
          <div>
            <Heading>
              <span className="uppercase">Vision</span>
            </Heading>
            <ul className="text-sm space-y-3 text-justify">
              {vision.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="fa-solid fa-thumbs-up text-primary pt-1" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading>
              <span className="uppercase">Mission</span>
            </Heading>
            <ul className="text-sm space-y-3 text-justify">
              {mission.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="fa-solid fa-thumbs-up text-primary pt-1" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading>
              <span className="uppercase">Objectives</span>
            </Heading>
            <ul className="text-sm space-y-3 text-justify">
              {objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="fa-solid fa-thumbs-up text-primary pt-1" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading>METHEDOLOGY</Heading>
            <ul className="text-sm space-y-3 text-justify">
              {functions.map((method, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="fa-solid fa-thumbs-up text-primary pt-1" />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading>GITS CAREER DEVELOPMENT CENTRE (GCDC)</Heading>
            <div className="text-sm grid grid-cols-2 max-w-screen-lg mx-auto border-2">
              {upcoming_events.map((name, idx) => (
                <p key={idx} className="p-2 border-b-2 last:border-b-0">
                  {name}
                </p>
              ))}
            </div>
          </div>
          <div>
            <Heading>
              <span className="uppercase">Core Committee Members</span>
            </Heading>
            <div className="text-sm">
              {core_committee_members.map(({ name, post, role }) => (
                <div
                  key={name}
                  className="grid grid-cols-3 max-w-screen-lg mx-auto border-2 border-collapse border-b-0 last:border-b-2"
                >
                  <p className="p-2">{name}</p>
                  <p className="p-2">{post}</p>
                  <p className="p-2">{role}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Heading>
              <span className="uppercase">Committee Members</span>
            </Heading>
            <div className="text-sm">
              {committee_members.map(({ name, role }) => (
                <div
                  key={name}
                  className="grid grid-cols-2 max-w-screen-lg mx-auto border-2 border-collapse border-b-0 last:border-b-2"
                >
                  <p className="p-2">{name}</p>
                  <p className="p-2">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EnterpreneurshipCell;
