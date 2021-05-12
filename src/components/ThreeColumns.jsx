import React from "react";
import "../assets/scss/elements/threeColumns.scss";

const donatedBags = [10];
const supported = [5];
const collection = [7];

const ThreeColumns = () => {
  return (
    <section className="threeColumns">
      <div class="grid-container">
        <div className="three_box">
          <h1 className="three_nr">{donatedBags}</h1>
          <p>ODDANYCH WORKÓW</p>
          <p className='three_longText'>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="three_box">
          <h1 className="three_nr">{supported}</h1>
          <p>WSPARTYCH ORGANIZACJI</p>
          <p className='three_longText'>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="three_box">
          <h1 className="three_nr">{collection}</h1>
          <p>ZORGANIZOWANY ZBIÓREK</p>
          <p className='three_longText'>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumns;
