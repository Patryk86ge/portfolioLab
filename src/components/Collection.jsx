import React from 'react'
import FundCard from "../assets/whoWeHelp/FundCard";
import { collection } from "../assets/whoWeHelp/FoundationInfo";
import Card from "./card";

const Collection = () => {
  return (
    <>
      <Card />
      <section id="whoweHelp" className="WhoweHelp">
        <div className="container">
          <div className="whoweHelp_card">
            {collection.map((el) => (
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
}

export default Collection
