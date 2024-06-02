const managements = {
  chairmans_message: {
    name: "Shri J. P. Agarwal",
    image: "/images/management/chairman.jpg",
    messages: [
      "Geetanjali Institute of Technical Studies is a front runner in developing teaching and learning methods that reflect best practice in imparting technical education to young minds. Our experienced faculty members teach students to move from the realm of ideas to real-world applications. The college is committed to equip students with knowledge, skills and attitude.",
      "At GITS, we edify our GITSians to dream and realize the professional growth in a congenial environment with values and characters to attain socio-economical and technological growth at global level. The college is committed to foster in its students the pursuit of individual excellence and participation in full range of seminars, workshops, conferences, projects-exhibitions, cultural, social and physical activities to make them evolve as all rounder.",
      "I am confident and proud to convey that once the students step in GITS, they step out with the self confidence and knowledge to compete in the world of professionals. We prepare them for that!",
    ],
  },
  vice_chairmans_message: {
    name: "Mr. Kapil Agarwal",
    image: "/images/management/vice_chairman.jpg",
    messages: [
      "Today Geetanjali Institute of Technical Studies, has become a dream destination for engineering aspirants. We have achieved this reputation due to the exceptional qualification and experience of dedicated Faculty and staff, excellent infrastructure with modern laboratories, classes for personality development, remarkable results and placements. We also keep on inviting eminent technocrats scientists and experts from industry to update current technology to the students to brighten their future.",
      "The present society is knowledge based, where talent is the most important asset for any young engineer. In order to utilize the available opportunities to the maximum, it is quite important to change the mindset of the aspirants since the very first day. Our vital aim is to groom GITSians in a way that could help them touch the pinnacle of perfection.",
      "A disciplined, serene and pleasant environment envelops the campus. It blends beautifully with the green landscaping, aesthetic elegance of arches and the vibrant pursuit of knowledge by the young aspirants. The academic ambience gives full scope for group activities, which are plenty, and also to individual pursuits for development on preferred tracks.",
      "Students are encouraged to participate in national and international competitions/ events and have received appreciation by winning prizes. Placement of graduates of last five batches has been note worthy. Many are placed in national and multinational companies throughout the nation.",
      "We are committed to explore all possibilities for the best educational environment in future and hope that our students will come up to the expectations of the society with excellence in technical field.",
    ],
  },
  executive_directors_message: {
    name: "Shri Ankit Agarwal",
    image: "/images/management/executive_director.jpg",
    messages: [
      "In the new knowledge age intellectual competitiveness is essential for achieving the status of a leader. For this the quality education, more so with practical orientation is of paramount importance.",
      "Engineering education involves a lot of conceptual approach along with clear fundamentals coupled with good practical understanding to deal with real world problems effectively and efficiently. Since the inception institute has not grown in its infrastructure but has also developed a lot in terms of academics and laboratories. A well balanced curriculum taught by qualified, skilled and experienced faculty developed the required skills in students necessary to meet tomorrow's application.",
    ],
  },
  directors_message: {
    name: "Dr. Narendra Singh Rathore",
    image: "/images/management/director.jpg",
    messages: [
      "I am happy to welcome you on behalf of Geetanjali Institute of Technical Studies (GITS), which is being recognized for its quality for excellent teaching learning, quality reforms and assurance, attractive placement and new dimension for entrepreneurship.",
      "GITS is a premier Institute of higher learning in the wide areas of Engineering, Technology, Management and associated science. Over a long and proud history, GITS have pushed the limits of knowledge and innovation, and carved a niche in Technical education with emphasis on quality through up-to-date latest curriculum and lecture delivery methods supported by strong laboratory infrastructure. Our endeavor is to explore all possibilities to provide quality education, appropriate employment and best educational environment for overall development of students so that they can transform themselves into employable, industry-ready professionals and entrepreneurs.",
      "GITS is committed to make students professionally competent with high moral values, ethics and leadership qualities to enable them serve the society in the best possible manner.",
      "GITS is a place to attain wholesome education not only in classrooms but through strong Industry-Academic Interface, with blending of practical and experiential learning responsible for enhancing leadership quality.",
      "GITS is dedicated to inculcate a sense of positive thinking and scientific outlook with practical orientation of moral precepts and cultural heritage. It is my privilege to welcome students to be a part of this vibrant and innovative campus that leads you to the path of excellence. I promise we will not leave any stone unturned to shape your future.",
    ],
  },
  directors_iqac_message: {
    name: "Dr. Sudhakar Jindal",
    image: "/images/management/director_iqac.jpg",
    messages: [
      "Employability of Indian Engineering Graduates has been a great Challenge before the nation. In a study it is observed that there is a widespread dissatisfaction with the current graduates – 64% of employers hiring fresh engineering graduates are only somewhat satisfied with the quality of the new hires or worse.",
      "To beat the heat, we at GITS are committed to improve quality of engineering education and increase learning outcomes of engineering and management education graduates. With clear vision, mission, goals, and adopting strategic planning, we work for continuous improvement by dynamic adjustment of teaching learning process based on measured attainment of program outcomes. The Outcome based education provided by GITS is student centered instruction that focuses on measuring student performance i.e. outcomes, which includes- knowledge, skills and attitudes. With a focus on improving higher-order thinking skills, we are committed to prepare global engineers who will be able to solve problems and shoulder challenges which are not even known today.",
      "Recognizing our commitments and continuous efforts, Geetanjali Institute of Technical Studies (GITS), Udaipur has been ranked 1st in Southern Rajasthan by Rajasthan Technical University as per Quality Index Value Ranking and ranked 5th in Rajasthan State by GHRDC-CSR for quality education. I convey my appreciation for the faculty, students, management and all stakeholders for their inputs and diligence to make this institute a leader in the area of professional education.",
    ],
  },
  finance_controllers_message: {
    name: "Mr. B L Jangir",
    image: "/images/management/finance_controller.jpg",
    messages: [
      "I extend my good wishes to the GITS family as we enter the 21st year since our establishment. The college has had a long journey during which it has acquitted itself well. It is well said, ‘If you plan for a year, sow a seed, and if you plan for a century, educate the people’. Our college is a place where we promote freedom of thought, innovation and creativity which are essential for academic excellence. The institution has made every impressive step by setting high standards in the field of technical education. I am glad that today it has become one of the pioneer institutions in the field of education and is committed to provide every facility to promote our students to achieve the pinnacle of success. I extend my warm greetings and felicitations to students, teachers and staff and wish you all the success.",
    ],
  },
};

export const getMessage = (management) => {
  if (management in managements) {
    return managements[management];
  } else return "not found";
};
