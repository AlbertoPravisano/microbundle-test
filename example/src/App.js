import React from "react";
import { Placeholder } from "microbundle-test";

const App = () => {
  return (
    <div style={{ marginRight: "10em", marginLeft: "10em", marginTop: "5em" }}>
      Start of showcase *****
      <br />
      <br />
      Component with lines inserted manually
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
      <br /> Component with lines generated
      <Placeholder>
        <Placeholder.Header nLines={2} />
        <Placeholder.Paragraph nLines={5} />
      </Placeholder>
      <br />
      <br />
      ***** End of Showcase
    </div>
  );
};

export default App;
