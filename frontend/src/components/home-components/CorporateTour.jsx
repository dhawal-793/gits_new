// import Container from "../ui/Container";
// import CustomButton from "../CustomButton";

// const CorporateTour = () => {
//   return (
//     <Container>
//       <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 md:place-items-center">
//         <div className="md:col-span-3 lg:col-span-4 md:pr-2 lg:pr-5">
//           <h3 className="my-4 md:my-2 lg:my-8 flex md:flex-col gap-2 lg:gap-4 text-xl sm:text-4xl lg:text-4xl font-bold text-black items-center justify-center md:items-start">
//           Embark on a Journey of Technological Discovery with Our Programs
//           </h3>
//           <p className="text-justify">
//           At GITS college, we believe in shaping future-ready engineers who are not only well-versed in the latest technological advancements but also equipped with the creativity and innovation to lead in an ever-evolving landscape. As we invite you to explore the wonders of Projections 2024, Udaipur Largest Technical Festival, we also extend an invitation to join our esteemed B.Tech program, where you can turn your passion for technology into a fulfilling career.
//           </p>
//           <div className="text-left flex items-start py-6  md:py-3 lg:py-10">
//             <CustomButton />
//           </div>
//         </div>
//         <div className="relative md:col-span-4 lg:col-span-5">
//         <iframe className="w-[22rem] h-[15rem] lg:w-[40rem] lg:h-[26rem] sm:w-[35rem] sm:h-[2rem]" src="https://www.youtube.com/embed/gsZqM7BtDRY?si=nI29aP7sUhUUuGBS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//         </div>
//       </div>
//       <div className="w-full h-1 bg-primary my-6" />
//     </Container>
//   );
// };

// export default CorporateTour;
import Container from "../ui/Container";
import CustomButton from "../CustomButton";

const CorporateTour = () => {
  return (
    <Container>
      <div className="lg:max-w-[1024px] xl:max-w-full mx-auto">
        <h3 className="hidden lg:block xl:hidden mb-4 text-4xl font-bold text-black">
          Embark on a Journey of Technological Discovery with Our Programs
        </h3>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="mx-auto w-full max-w-[50rem] lg:w-5/12">
          <h3 className="lg:hidden xl:block mb-4 xl:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Embark on a Journey of Technological Discovery with Our Programs
          </h3>
          <p className="text-justify text-sm md:text-base">
            At GITS college, we believe in shaping future-ready engineers who
            are not only well-versed in the latest technological advancements
            but also equipped with the creativity and innovation to lead in an
            ever-evolving landscape. As we invite you to explore the wonders of
            Projections 2024, Udaipur Largest Technical Festival, we also extend
            an invitation to join our esteemed B.Tech program, where you can
            turn your passion for technology into a fulfilling career.
          </p>
          <div className="text-left flex items-start pt-6 lg:pt-12">
            <CustomButton />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[50rem]  lg:w-7/12">
          <div className="">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/gsZqM7BtDRY?si=nI29aP7sUhUUuGBS"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      </div>
      <div className="w-full h-1 bg-primary my-6" />
    </Container>
  );
};

export default CorporateTour;

// import Container from "../ui/Container";
// import CustomButton from "../CustomButton";

// const CorporateTour = () => {
//   return (
//     <Container>
//       <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 md:place-items-center">
//         <div className="md:col-span-3 lg:col-span-4 ">
//           <h3 className="my-4 md:my-2 lg:my-8 flex md:flex-col gap-2 lg:gap-4 text-xl sm:text-4xl lg:text-4xl font-bold text-black items-center justify-center md:items-start">
//             Embark on a Journey of Technological Discovery with Our Programs
//           </h3>
//           <p className="text-justify">
//             At GITS college, we believe in shaping future-ready engineers who
//             are not only well-versed in the latest technological advancements
//             but also equipped with the creativity and innovation to lead in an
//             ever-evolving landscape. As we invite you to explore the wonders of
//             Projections 2024, Udaipur Largest Technical Festival, we also extend
//             an invitation to join our esteemed B.Tech program, where you can
//             turn your passion for technology into a fulfilling career.
//           </p>
//           <div className="text-left flex items-start py-6 md:py-3 lg:py-10">
//             <CustomButton />
//           </div>
//         </div>
//         <div className="relative md:col-span-4 lg:col-span-5">
//           <div className="bg-red-500 w-[26rem] h-[100%]">
//             <iframe
//               className="w-full aspect-video rounded-xl"
//               // className="w-full h-[16rem] sm:w-[35rem] sm:h-[26rem] lg:h-[26rem]"
//               src="https://www.youtube.com/embed/gsZqM7BtDRY?si=nI29aP7sUhUUuGBS"
//               title="YouTube video player"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-1 bg-primary my-6" />
//     </Container>
//   );
// };

// export default CorporateTour;
