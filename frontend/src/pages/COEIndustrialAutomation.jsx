import { useState } from "react";

import Container from "../components/ui/Container";
import Title from "../components/ui/Title";

const COEMessages = [
  {
    title: "Vision and Mission",
    topics: [
      {
        title: "Vision",
        messages: [
          "To become a front runner in bringing automation by creating a workforce to reduce costs, increase accuracy and product quality along with energy saving in today's Industries.",
        ],
      },
      {
        title: "Mission",
        messages: [
          "To develop automatic systems and equipment solutions that simplifies Industrial Processes.",
          "To offer the high quality and exclusive service which enable the next generation of smart energy saving manufacturing",
        ],
      },
    ],
  },
  {
    title: "Objective and Relevance",
    topics: [
      {
        title: "Objective",
        messages: [
          "The overall objective of COE in Industrial Automation is to offer good quality Training in Industrial Automation to engineering students and engineering graduates.",
          "Presently, Automation is greatly transforming the manufacturing industry. The shift from manual manufacturing methods to automated processes is gaining demandin the Industry 4.0. This transformation involves the use of robots, control systems, and computers which are handling and performing operations. The mechanical engineering course in academic institutions is still focused on providing traditional manual manufacturing and giving less space to modern manufacturing systems. The objective of Centre of Excellence in Industrial automation is to bridge the gap between industry and academia by giving industrial automation based training. This shall enable students to develop skills and to solve complex technological problems for promoting multidisciplinary activities.",
          "Industry oriented projects shall be taken up with the view point of Automated productivity lines consist of workstations. Robotic process automation can be used to mimic many human actions. A huge benefit of automation is improved safety at the workplace. Using robots for loading and unloading materials or transferring huge machine parts reduce risks of accidents. Automation frees up employees from working on tedious and repetitive tasks, hence, it further allows to have a better grip on the production rate.CNC machines are versatile and have ability to create many types of objects from different materials. 3D printing, also known as additive manufacturing, has already come a long way. One of the key benefits of 3D printing is part consolidation: the ability to integrate multiple parts into a single component. Reducing the number of parts needed can significantly simplify the assembly and maintenance process by reducing the amount of time needed for assembly.In contrast to it, Laser Engraving is a subtractive manufacturing method. However, before the actual engraving process can begin, the machine needs a file sent from a computer to the machine's controller, which then positions the laser. The aim of Automatic control system provides the means of attaining optimal performance of dynamic systems and improving productivity. This defines as a series of operations during which some materials are placed in more useful state by continually measuring process variables.All this involves initial investment but then the operation costs will reduce, which will be beneficial in the long run. Automation helps improve productivity, quality and system performance, which in turn reduces your operating expenses.",
          "Further, running of mechanical machines and equipment along with energy saving shall be the need of near future. The Centre of Excellence in Industrial Automation shall provide the knowledge of Programmable logic controls (RSlogix), Arduino, Proteus, Universal G-code generator and BMS Systems through Robotic set-ups, 3D printer, CNC machines, automatic mechanical systems and Laser engraving Machine.",
          "Hence, this Centre of excellence shall not only provide the knowledge of automation to trainees but also make them aware on effectively utilize automation in modern industries along with energy saving approach.",
        ],
      },
    ],
  },
  {
    title: "Technical Novelty and Utility",
    topics: [
      {
        messages: [
          "The manufacturing industry has faced growing challenges in recent years. The sector is looking at a skills gap that is about to get larger, as many skilled manufacturing workers are due to retire. Manufacturing and related industries are also struggling to improve on existing inventory and supply chain management, especially in the face of recent disruptions caused by the pandemic. The lack of trained technical personal leads to the improper design, production, planning and control. On the other side, manufacturing needs to keep up with customer expectations for high-quality, reliable products at an affordable cost.",
          "Today, industries are looking for skilled technicians who can meet all the requirements of automatic, fast, safe and quality production along with energy saving solutions.",
          "Manufacturing can become smarter by the implementation of high end automation systems. The future of industrial work is clear. Industry 4.0 will be highly automated, with faster production timelines and a smart warehouse, allowing for rapid production and distribution of products. It will also require a highly-skilled, educated workforce that knows how to use and operate cutting-edge technology, as well as safer workplaces so that employees can perform at their peak. Clearly, this represents a number of changes to what has been a fairly traditional sector.",
          "The technical novelty of COE in Industrial Automation is to generate a workforce which can lead to more optimized control of industrial resources, high end safety and easy to access from anywhere. Integration of systems through automation and access of those systems from remote location shall be the key focus.",
        ],
      },
    ],
  },
  {
    title: "Details of Experts",
    topics: [
      {
        messages: [
          "The manufacturing industry has faced growing challenges in recent years. The sector is looking at a skills gap that is about to get larger, as many skilled manufacturing workers are due to retire. Manufacturing and related industries are also struggling to improve on existing inventory and supply chain management, especially in the face of recent disruptions caused by the pandemic. The lack of trained technical personal leads to the improper design, production, planning and control. On the other side, manufacturing needs to keep up with customer expectations for high-quality, reliable products at an affordable cost.",
          "Today, industries are looking for skilled technicians who can meet all the requirements of automatic, fast, safe and quality production along with energy saving solutions.",
          "Manufacturing can become smarter by the implementation of high end automation systems. The future of industrial work is clear. Industry 4.0 will be highly automated, with faster production timelines and a smart warehouse, allowing for rapid production and distribution of products. It will also require a highly-skilled, educated workforce that knows how to use and operate cutting-edge technology, as well as safer workplaces so that employees can perform at their peak. Clearly, this represents a number of changes to what has been a fairly traditional sector.",
          "The technical novelty of COE in Industrial Automation is to generate a workforce which can lead to more optimized control of industrial resources, high end safety and easy to access from anywhere. Integration of systems through automation and access of those systems from remote location shall be the key focus.",
        ],
      },
    ],
  },
];

const COEIndustrialAutomation = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  const toggleCurrentMessaege = (title) => {
    setCurrentMessage((currentMessage) =>
      currentMessage === title ? "" : title
    );
  };
  return (
    <div>
      <Title title="COE : INDUSTRIAL AUTOMATION" />
      <Container>
        <div className="my-8 space-y-3">
          <h2 className="font-semibold text-xl">
            Centre of Excellence in Department of Mechanical Engineering
          </h2>
          <p className="text-sm mt-3 mb-8">
            Centre of Excellence in Industrial automation shall sensible to
            enhance the knowledge of the engineering graduates in the area of
            industrial automation through hands-on training in the area of
            Programmable logic controls (RSlogix), Arduino, Proteus, Universal
            G-code generator and BMS Systems.
          </p>
          <div className="rounded-lg bg-tertiary/10 text-tertiary/70 w-full">
            {COEMessages.map(({ title, topics }) => {
              return (
                <div
                  key={title}
                  className={`${
                    currentMessage === title &&
                    "border-b border-white bg-tertiary bg-opacity-5"
                  }`}
                >
                  <button
                    className="w-full flex items-center gap-5 px-5 py-3 border-b border-white"
                    onClick={() => toggleCurrentMessaege(title)}
                  >
                    <span
                      className={`fa-solid ${
                        currentMessage === title ? "fa-minus" : "fa-plus"
                      }`}
                    ></span>
                    <span>{title}</span>
                  </button>
                  <div
                    className={`${
                      currentMessage === title
                        ? "h-auto"
                        : "h-0 overflow-hidden"
                    } px-5 transition-all duration-300 `}
                  >
                    {topics.map((topic, idx) => (
                      <div key={idx}>
                        {topic.title && (
                          <h3 className="mt-5 font-semibold text-lg">
                            {topic.title}
                          </h3>
                        )}
                        {topic.messages && (
                          <ul className="space-y-4 my-3 pl-4">
                            {topic.messages.map((message, id) => (
                              <li className="text-sm list-disc" key={id}>
                                {message}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default COEIndustrialAutomation;
