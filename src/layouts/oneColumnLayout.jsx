import React from "react";
import "../styles/oneColumnLayout.scss";

const OneColumnLayout = (props) => {
  return (
    <main className="dc-one-column-container">
      <section className="dc-one-column-subContainer">
       {props.children}
      </section>
    </main>
  );
};

export default OneColumnLayout;
