import React from "react";

import Markdown from "marked-react";

// redux
import { connect } from "react-redux";

// styles
import { blockStyle, titleStyle, markDownStyle } from "../styles";
import { Container } from "react-bootstrap";

//connect
const mapDispatchToProps = {};
const mapStateToProps = (state) => {
  return { editorText: state.editorText };
};

function Previewer(props) {
  return (
    <div style={blockStyle}>
      <h2 className="h-15" style={titleStyle}>
        How it looks:
      </h2>
      <Container style={{ ...markDownStyle }}>
        <Markdown>{props.editorText}</Markdown>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Previewer);
