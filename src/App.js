import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <h1 className="faq1">FAQ</h1>
      <h1 className="faq2">Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
