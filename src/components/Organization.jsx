import React from 'react'
import FundCard from "../assets/whoWeHelp/FundCard";
import { organization } from "../assets/whoWeHelp/FoundationInfo";
import Card from "./card";

const Organization = () => {
  return (
    <>
      <Card />
      <section id="whoweHelp" className="WhoweHelp">
        <div className="container">
          <div className="whoweHelp_card">
            {
              organization.map((el) => (
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

export default Organization
