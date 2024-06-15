import Container from "../components/ui/Container";
import Seperator from "../components/ui/Seperator";
import Title from "../components/ui/Title";

const facilities = [
  "Mess, Canteen, RO Water System, Hot Water supply through geysers in winter.",
  "Doctor is appointed for free check-up every day in the evening and college provides 24x7 medical facility.",
  "Daily newspaper (Hindi & English) and TV facility.",
  "Internet and Wi-Fi facility.",
  "Guest room for Parents/ Guardian/ Guest Person(s) at reasonable charges.",
  "24x7 Guard security system.",
  "Sports (indoor & outdoor) and Gym facility is also available separately in Boys and Girls hostel. ",
];

const Hostel = () => {
  return (
    <>
      <Title title="Hostel" />
      <Container>
        <div className="sm:px-6 lg:px-8 py-5">
          {/* <div>Carousel</div> */}
          <Seperator/>
          <div className="text-justify text-sm  space-y-6">
            <p className="space-x-1">
              <span>
                The modern aesthetically designed hostels at GITS give the
                resident students a feeling of comfort and ambience of home. The
                College has separate girls and boys hostel facility. The Hostel
                have excellent standard of living with round-the clock
                availability of basic facility .The hostel rooms are spacious
                well ventilated and well organized. All Hostels are Wi-Fi
                Enabled. The hostel is administered by chief warden and assisted
                by warden/assistant warden. Each room is provided with furniture
                needed by a student i.e. bed, table, chair, cupboard, etc.
              </span>
              <span className="italic font-semibold">
                Hostel rooms are allotted on “first come first serve basis”.
              </span>
            </p>
            <p>
              Ragging in any form is prohibited inside or outside the campus and
              any student caught indulged in such an activity would be severely
              punished.
            </p>
            <p className="space-x-1">
              <span className="italic font-semibold">Staff Quarters:</span>{" "}
              <span>
                The facility of staff quarters features an 2 BHK independent
                flats in the central courtyard. Each residential floor also have
                spaces dedicated to individual or group activity. We really
                tried to be creative and innovative for the residents
                themselves, the way the building is set up and functions, its
                look, its feel, again, all of which relates to the ultimate
                experience.
              </span>
            </p>
            <p className="font-semibold italic">
              There is a separate mess for boys and girls. The entire mess area
              is air-cooled and students are provided with breakfast, lunch,
              evening refreshment & dinner. The hostel committee coordinates
              with the mess committee for smooth running of the mess. The mess
              committee monitors the quality, taste and hygiene of food served
              in the mess. They also interact with the mess vendor to provide
              him with the feedback of students and to introduce possible
              changes in the menu. Review and inspection of the food quality is
              carried out at regular intervals.
            </p>
          </div>
          <Seperator/>
          <div className="space-y-4 my-7">
            <h4 className="font-semibold text-xl">Facilities</h4>
            <ul className="space-y-2 list-disc font-medium pl-5">
              {facilities.map((facility, idx) => (
                <li className="text-sm" key={idx}>
                  {facility}
                </li>
              ))}
            </ul>
          </div>
          <Seperator/>
        </div>
      </Container>
    </>
  );
};

export default Hostel;
