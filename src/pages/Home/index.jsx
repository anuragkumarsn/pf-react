// import React, { useEffect, useState } from "react";
// import "./index.css";
// import { mapper } from "../../helpers/mapper";
// import { getElement } from "../../helpers/getElement";

// const Home = () => {
//   const [currentScrollValue, setCurrentScrollValue] = useState(false);
//   useEffect(() => {
//     const cleanup1 = mapper(
//       "font-1",
//       "left",
//       "",
//       (object_position, mid_size_indicator, rotation_degrees) => {
//         console.log("mid_size_indicator : ", mid_size_indicator);
//         setCurrentScrollValue(Boolean(object_position));
//         if (object_position < mid_size_indicator + 6) {
//           getElement("heading-top").classList.remove("glitch");
//           getElement("noise-bg").classList.remove("noise-bg");
//           getElement("font-1").style.left = object_position + "px";
//           getElement("font-1").style.opacity = object_position / 100;
//           getElement("font-2").style.right = object_position - 20 + "px";
//           getElement("font-2").style.letterSpacing =
//             object_position / 15 + "px";
//           getElement("font-2").style.opacity = object_position / 100;
//           getElement("font-3").style.left = object_position + "px";
//           getElement("font-3").style.letterSpacing =
//             object_position / 20 + "px";
//           getElement("font-3").style.opacity = object_position / 100;
//           getElement("font-4").style.right = object_position - 20 + "px";
//           getElement("font-4").style.letterSpacing =
//             object_position / 20 + "px";
//           getElement("font-4").style.opacity = object_position / 100;
//         } else {
//           getElement("heading-top").classList.add("glitch");
//           getElement("noise-bg").classList.add("noise-bg");
//         }
//       }
//     );
//     return () => cleanup1();
//   }, []);
//   return (
//     <>
//       <div>
//         <div className="flex w-100 justify-center home-container">
//           {/* <div className="heading-lg-top"></div> */}
//           <div id="heading-lg" className="flex justify-center items-center">
//             <div id="font-1" className="wrapper">
//               <h1 id="heading-top" className="default-heading-top">
//                 {currentScrollValue && "JOHN DEO"}
//               </h1>
//             </div>
//             <div id="font-2" className="mt-8 comfortaa-font">
//               {currentScrollValue && "SOFTWARE DEVELOPER"}
//             </div>
//             <div id="font-gretting" className="mt-36">
//               <h1 className="glitch">{!currentScrollValue && "Hello World"}</h1>
//             </div>
//             <div id="font-3" className="mt-8">
//               {currentScrollValue && "7+ YEARS EXPERIENCED"}
//             </div>
//             <div id="font-4" className="mt-8 comfortaa-font">
//               {currentScrollValue && "PRIMARY MERN"}
//             </div>
//           </div>
//           <div className="heading-lg-bottom"></div>
//         </div>
//       </div>
//       <div id="noise-bg" className=""></div>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { mapper } from "../../helpers/mapper";
import { getElement } from "../../helpers/getElement";

/**
 * The Home function is a React component that represents the home page of the application.
 * It displays a heading with various fonts and styles that are updated based on the scroll position.
 * The function uses the useState, useEffect, and useRef hooks from React.
 *
 * @returns {JSX.Element} The rendered home page component.
 */
/**
 * Renders the home page of the application.
 * Uses the useState, useEffect, and useRef hooks from React to manage state and perform side effects.
 * Elements on the page are updated based on the scroll position.
 * @returns {JSX.Element} The rendered home page.
 */
const Home = () => {
  const [currentScrollValue, setCurrentScrollValue] = useState(false);
  const headingTopRef = useRef(null);
  const noiseBgRef = useRef(null);
  const font1Ref = useRef(null);
  const font2Ref = useRef(null);
  const font3Ref = useRef(null);
  const font4Ref = useRef(null);
  const brifIntro = useRef(null);
  const primarySkill = useRef(null);

  useEffect(() => {
    /**
     * Updates the styles of certain elements based on the scroll position.
     * @param {number} object_position - The scroll position.
     * @param {number} mid_size_indicator - The mid-size indicator.
     */
    const updateElements = (object_position, mid_size_indicator) => {
      console.log("object_position : ", object_position);
      setCurrentScrollValue(Boolean(object_position));
      const elementsToUpdate = [
        {
          ref: font1Ref,
          style: {
            left: `${object_position}px`,
            opacity: object_position / 100,
          },
        },
        {
          ref: font2Ref,
          style: {
            right: `${object_position - 20}px`,
            letterSpacing: `${object_position / 20}px`,
            opacity: object_position / 100,
          },
        },
        {
          ref: font3Ref,
          style: {
            left: `${object_position}px`,
            letterSpacing: `${object_position / 20}px`,
            opacity: object_position / 100,
          },
        },
        {
          ref: font4Ref,
          style: {
            right: `${object_position - 20}px`,
            letterSpacing: `${object_position / 20}px`,
            opacity: object_position / 100,
          },
        },
      ];
      if (object_position < mid_size_indicator + 6) {
        elementsToUpdate.forEach(({ ref, style }) => {
          Object.assign(ref.current.style, style);
        });
        headingTopRef.current.classList.remove("glitch");
        noiseBgRef.current.classList.remove("noise-bg");
        primarySkill.current.classList.remove("glitch");
      } else {
        headingTopRef.current.classList.add("glitch");
        noiseBgRef.current.classList.add("noise-bg");
        primarySkill.current.classList.add("glitch");
      }
      const rect = brifIntro.current.getBoundingClientRect();
      if (rect.top <= 0) {
        noiseBgRef.current.classList.remove("noise-bg");
      }
    };

    const cleanup1 = mapper("font-1", "left", "", updateElements);
    return () => cleanup1();
  }, []);

  return (
    <>
      <div>
        <div className="flex w-100 justify-center home-container">
          <div id="heading-lg" className="flex justify-center items-center">
            <div id="font-1" className="wrapper" ref={font1Ref}>
              <h1
                id="heading-top"
                className="default-heading-top"
                ref={headingTopRef}
              >
                {currentScrollValue && "JOHN DEO"}
              </h1>
            </div>
            <div id="font-2" className="mt-8 comfortaa-font" ref={font2Ref}>
              {currentScrollValue && "SOFTWARE DEVELOPER"}
            </div>
            <div id="font-gretting" className="mt-36">
              <h1 className={!currentScrollValue ? "visible" : "hidden"}>
                Hello World
              </h1>
            </div>
            <div id="font-3" className="mt-8 comfortaa-font" ref={font3Ref}>
              {currentScrollValue && "7+ YEARS EXPERIENCED"}
            </div>
            <div
              id="font-4"
              className="mt-8 comfortaa-font wrapper"
              ref={font4Ref}
            >
              <h1
                id="primary-skill"
                ref={primarySkill}
                style={{ fontSize: "20px" }}
              >
                {currentScrollValue && "(PRIMARY MERN)"}
              </h1>
            </div>
          </div>
          <div className="heading-lg-bottom"></div>
        </div>
      </div>
      <div id="noise-bg" className="" ref={noiseBgRef}></div>
      <div
        ref={brifIntro}
        id="brif-intro-div"
        style={{
          border: "2px solid red",
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 100,
        }}
      ></div>
    </>
  );
};

export default Home;
