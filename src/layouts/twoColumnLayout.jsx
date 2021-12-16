import React from "react";
import "../styles/twoColumnLayout.scss";

const TwoColumnLayout = (props) => {
  return (
    <main className="dc-two-column-layout-container">
      <div className="row">
        <section className="dc-left-style column">
          <img className="dc-imgAlign" src={require(`./../assets/${props.img}`)} alt="Some Logo" />
        </section>
        <section className="column">
          <div className="dc-right-style">
           {props.componentChild}
           
          </div>
        </section>
      </div>
    </main>
  );
};

export default TwoColumnLayout;
