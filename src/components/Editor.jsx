import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

// redux
import { connect } from "react-redux";
// action
import { changeText } from "../actions/editorActions";

// styles
import {
  blockStyle,
  titleStyle,
  editorStyle,
  buttonRightStyle,
  textAreaStyle,
} from "../styles";

//connect
const mapDispatchToProps = { changeText };
const mapStateToProps = (state) => {
  return { text: state.editorText };
};

function Editor(props) {
  const [text, setText] = useState("");

  const pageLink = "https://jonathanc0101.github.io/markdown-previewer";

  function getTextFromUrl() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("code");
  }

  function copyShareLinkToClipBoard() {
    const myShareText = `${pageLink}/?code=${encodeURIComponent(text)}`;
    navigator.clipboard.writeText(myShareText);
  }

  // set default text
  useEffect(() => {
    const paramText = getTextFromUrl();
    console.log(paramText);
    if (paramText) {
      setText(paramText);
    } else {
      setText(props.text);
    }
  }, []);

  // update text on editor after 300ms
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      props.changeText(text);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [text, props]);

  return (
    <div style={blockStyle}>
      <h2 className="h-15" style={titleStyle}>
        Your Code
      </h2>
      <Container
        fluid
        style={{
          ...blockStyle,
          ...editorStyle,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ButtonGroup style={{ display: "flex", flexDirection: "row" }}>
          <Button
            style={buttonRightStyle}
            title="Copy share link to clipboard"
            onClick={() => {
              // copy share link to clipboard
              copyShareLinkToClipBoard();
            }}
            variant="outline-dark"
          >
            🔗
          </Button>
          <Button
            style={buttonRightStyle}
            title="Copy to clipboard"
            onClick={() => {
              // copy to clipboard
              navigator.clipboard.writeText(text);
            }}
            variant="outline-dark"
          >
            📋
          </Button>
        </ButtonGroup>
        <textarea 
          style={textAreaStyle}
          value={text}
          name="editor"
          id="editor"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Container>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
