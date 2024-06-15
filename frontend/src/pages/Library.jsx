import Container from "../components/ui/Container";
import Seperator from "../components/ui/Seperator";
import Title from "../components/ui/Title";

const facilities = [
  "More than 9,000 Reference and Text Books.",
  "High Speed Internet Connectivity",
  "DELNET facility promotes sharing of resources among the libraries by developing a network of libraries, by collecting, storing and disseminating information and by offering computerized services to the users and develop specialized bibliographic database of books, serials and non-book materials",
  "Subscriptions of 65 National, International and E-journal Database is available",
  "Multimedia PCs in the library",
  "Photocopying facilities",
];

const Library = () => {
  return (
    <>
      <Title title="Library" />
      <Container>
        <h2 className="text-center font-semibold my-7 text-xl sm:text-2xl md:text-3xl">THE GITS LIBRARY IS ENRICHED WITH AN ACCOMMODATION OF OVER 45000 BOOKS</h2>
        <div className="sm:px-6 lg:px-8 py-5">
          {/* <div>Carousel</div> */}
          <Seperator/>
          <div className="text-justify text-sm space-y-6">
            <p>
              GITS Central Library is the hub for information services in the
              campus and serves as a major learning and resource center. It is a
              creative and innovative partner in supporting the teaching,
              learning, scholarship and research activities of the institute.
            </p>
            <p>
              Library occupies a place of pride at GITS and is an essential
              component of the institute&#39;s outstanding research and
              education mission. Recognizing the role of library and information
              services in meeting the requirements of the Institute&#39;s
              academic, research and training programmers, the Library was
              set-up as one of the key divisions of the Geetanjali Institute of
              technical Studeis. It is a most lively place on the campus
              providing a safe, comfortable and friendly environment that
              enables learning and advancement of knowledge, and promotes
              discovery and scholarship. With a sitting capacity of over 200
              students, the library has a ready stock of books journals,
              magazines and newsletter from all over the world, replete with all
              kinds of support activities, like photocopying, audio-visual
              rooms, electronic media section, book bank and linkage with
              various reputed libraries in India.
            </p>
            <p>
              The collection in the library encompasses around 46,000 books
              varying in subjects like Engineering, Management,Computer
              Applications, Basic Science & Humanities and also includes
              reference books, CD-ROMs, VCDs, DVDs and e-resources.
            </p>
            <p>
              A separate Digital Knowledge Centre has been established in order
              to enable the users to browse the e-journals, e-learning
              materials, digital library collections of this campus and other
              online journals. This facility is available in the intranet of
              this campus.
            </p>
          </div>
          <Seperator/>
          <div className="space-y-4 my-7">
            <h4 className="font-semibold text-xl">
              Facilities Offered at the Central Library
            </h4>
            <ul className="space-y-3 list-none ">
              {facilities.map((facility, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="fa-regular fa-star text-primary" />
                  <span className="text-sm">{facility}</span>
                </li>
              ))}
            </ul>
          </div>
          <Seperator/>
          <div className="space-y-4 my-7">
            <h4 className="font-semibold text-xl">
             Online Facilities Offered at the Central Library
            </h4>
            <div className="space-y-3 font-medium text-sm">
              <p className="space-x-2">
                <span>
                Access Millions of Networked Library Resources through DELNET -
                </span>
                <a href="https://discovery1.delnet.in/" className="text-blue-500 hover:text-blue-700 underline">Click here to Login</a>
              </p>
              <p className="space-x-2">
                <span>
                The Institution of Engineers (India) [IEI] is the largest multi-disciplinary professional body of engineers, established in 1920. -
                </span>
                <a href="https://www.ieindia.org/webui/IEI-Registration.aspx" className="text-blue-500 hover:text-blue-700 underline">Click here to Login</a>
              </p>
              <p className="space-x-2">
                <span>
                J-Gate provides seamless access to millions of journal articles available online offered by 12,962 Publishers. -
                </span>
                <a href="https://jgatenext.com/" className="text-blue-500 hover:text-blue-700 underline">Click here to Login</a>
              </p>
              <p className="space-x-2">
                <span>
                Online eResources are available. -
                </span>
                <a href="https://www.gits.ac.in/gits-eresources/" className="text-blue-500 hover:text-blue-700 underline">Click here to Login</a>
              </p>
            </div>
          </div>
          <Seperator/>
        </div>
      </Container>
    </>
  );
};

export default Library;
