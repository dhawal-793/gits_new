// import React from 'react';

// const LearningComponent = () => {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="text-center mb-10">
//         <h2 className="text-5xl font-extrabold text-gray-200 uppercase tracking-wider opacity-20">Innovations</h2>
//         <h1 className="text-3xl font-bold text-black mt-2">With Us There Are So Many Ways of Learning</h1>
//         <h2 className="text-xl text-gray-600 mt-2">We Make Engineering Fun</h2>
//       </div>
      
//       <div className="flex justify-center space-x-6">
//         <div className="w-1/3">
//           <img
//             src="path-to-your-first-image.jpg"
//             alt="First"
//             className="w-full h-auto rounded-full"
//           />
//         </div>
//         <div className="w-1/3">
//           <img
//             src="path-to-your-second-image.jpg"
//             alt="Second"
//             className="w-full h-auto rounded-full"
//           />
//         </div>
//         <div className="w-1/3">
//           <img
//             src="path-to-your-third-image.jpg"
//             alt="Third"
//             className="w-full h-auto rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearningComponent;
// import React from 'react';

// const LearningComponent = () => {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="text-center relative mb-10">
//         <h2 className="text-[7rem] font-extrabold text-white border-black uppercase tracking-wider opacity-40">
//           Innovations
//         </h2>
//         <div className="absolute inset-0 flex flex-col justify-center items-center">
//           <h1 className="text-3xl font-bold text-black mt-2">
//             With Us There Are So Many Ways of Learning
//           </h1>
//           <h2 className="text-xl text-gray-600 mt-2">We Make Engineering Fun</h2>
//         </div>
//       </div>

//       <div className="flex justify-center space-x-6">
//         <div className="w-1/3">
//           <img
//             src="path-to-your-first-image.jpg"
//             alt="First"
//             className="w-full h-auto rounded-full"
//           />
//         </div>
//         <div className="w-1/3">
//           <img
//             src="path-to-your-second-image.jpg"
//             alt="Second"
//             className="w-full h-auto rounded-full"
//           />
//         </div>
//         <div className="w-1/3">
//           <img
//             src="path-to-your-third-image.jpg"
//             alt="Third"
//             className="w-full h-auto rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearningComponent;
import React from 'react';
// import './index.css'; // Import the CSS file

const LearningComponent = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center relative mb-10">
        <h2 className="sm:text-[7rem] text-[2.5rem] font-extrabold uppercase tracking-wider opacity-40 innovations-text">
          Innovations
        </h2>
        <div className="absolute inset-0 flex flex-col justify-center gap-10 items-center">
          <h1 className="sm:text-3xl text-sm font-bold text-black mt-20">
            With Us There Are So Many Ways of Learning
          </h1>
          <h2 className="text-xl text-gray-600 mt-2">We Make Engineering Fun</h2>
        </div>
      </div>

      <div className="flex justify-center space-x-6">
        <div className="w-1/3">
          <img
            src="path-to-your-first-image.jpg"
            alt="First"
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="w-1/3">
          <img
            src="path-to-your-second-image.jpg"
            alt="Second"
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="w-1/3">
          <img
            src="path-to-your-third-image.jpg"
            alt="Third"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningComponent;

