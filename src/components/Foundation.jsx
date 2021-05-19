import React from "react";
import FundCard from "../assets/whoWeHelp/FundCard";
import FoundationInfo from "../assets/whoWeHelp/FoundationInfo";
import Card from './card'

const Foundation = () => {
  return (
    <>
      <Card />
      <section id="whoweHelp" className="WhoweHelp">
        <div className="container">
          <div className="whoweHelp_card">
            {FoundationInfo.map((el) => (
              <FundCard
                key={el.key}
                title={el.title}
                name={el.name}
                nameTwo={el.nameTwo}
                text={el.text}
                path="/"
                id={el.key}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Foundation;

// [
//
//  //       <Strip text="Komu pomagamy?" />
//  //     
//  //         <div className="WhoweHelp__btnBox">
//  //           <Link
//             to="/Foundation"
//           >
//             Fundacjom
//           </Link>
//           <Link
//             to="/"
//           >
//             Organizacjom
//             <br />
//             pozarządowym
//           </Link>
//           <Link
//             to="/"
//           >
//             Lokalnym
//             <br />
//             zbiórkom
//           </Link>
//         </div>
//         {/*
//       </div>
//     
// ]
