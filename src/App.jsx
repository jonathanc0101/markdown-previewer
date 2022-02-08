import React from "react";

import Previewer from "./components/Previewer";
import Editor from "./components/Editor";

// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

// styles
import { wrapperStyle, titleStyle, backgroundColorStyle } from "./styles";

function setTitle(title) {
  document.title = title;
}

setTitle("Markdown Previewer");

export default function App(props) {
  return (
    <Container style={wrapperStyle} fluid className="vh-100 d-flex flex-column">
      <Row>
        <h1 style={titleStyle}>Markdown previewer</h1>
      </Row>
      <Row className="h-100">
        <Col style={backgroundColorStyle} xs={6} sm={6} md={6}>
          <Editor></Editor>
        </Col>
        <Col style={backgroundColorStyle} xs={6} sm={6} md={6}>
          <Previewer></Previewer>
        </Col>
      </Row>
    </Container>
  );
}
