import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Title from "../components/ui/Title";

const missions = [
  "To provide an excellent learning environment to produce socially responsible and productive technical professionals.",
  "To set up the state-of-the-art facilities for quality education and innovation.",
  "To impart knowledge & Skills leading to shaping a budding manager as a quality executive.",
  "To encourage for life-long learning and team-based problem solving through learning environment.",
];

const objective = [
  "To create and sustain a community of learning in which students acquire knowledge and learn to apply it professionally with due consideration for ethical, ecological and economic issues.",
  "To pursue research and disseminate research findings.",
  "To provide knowledge-based technological services to satisfy the needs of society and the industry.",
  "To help in building national capabilities in science, technology, humanities, management, education and research.",
  "To become a globally recognized institute of excellence in the field.",
  "To produce engineers of highest caliber who will become trendsetters in the professional world.",
  "To develop synergy with other institutions.",
  "Make research and innovation an integral part of all learning transactions.",
  "Imbue faculty and students at GITS with attitudes, values and skills, essential for leadership roles.",
  "To build new paradigms in excellence in higher education and set up new benchmarks in student development and preparation for life.",
];

const VisionAndMission = () => {
  return (
    <div>
      <Title title="Vision & Mission"/>
      <Container>
        <div>
          <Heading>Vision</Heading>
          <div className="space-y-4 text-xs sm:text-sm lg:text-base my-6">
            <p>
              GITS have created a niche in the world of technical and management
              innovation. Our standard progression of delivering concepts of
              management, technical skills and computer application is a
              benchmark in the education industry. Not only we deliver, we are
              also trouble-shooters when it comes to support a talent. We do not
              judge our height by meters because we have never stop growing, the
              fineness of our work always increased. We are neither behind the
              time nor ahead we are just stay to be honest, we are masters in
              understanding “The Order of the Day”.
            </p>
            <p>
              Geetanjali Institute of Technical Studies , popularly known as
              GITS was established by Geetanjali Education Society in the year
              2002-03. The institute is recognized by AICTE and Govt of
              Rajasthan and is affiliated to Rajasthan Technical University,
              Kota to provide technical and professional education to the youth
              in general and also the tribal people of the region in particular.
            </p>
          </div>
        </div>
        <div>
          <Heading>Mission</Heading>
          <ul className="space-y-2 md:space-y-3 my-5">
            {missions.map((mission, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm lg:text-base "
              >
                <span className=" text-primary font-medium ">{`M${
                  idx + 1
                }:`}</span>
                <span className="">{mission}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Heading>Objectives</Heading>
          <ul className="space-y-2 md:space-y-3 my-5">
            {objective.map((objective, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="fa-regular fa-star text-primary pt-1" />
                <span className="text-xs sm:text-sm lg:text-base">
                  {objective}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default VisionAndMission;
