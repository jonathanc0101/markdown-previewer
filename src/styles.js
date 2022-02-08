export const blockStyle = {
  width: "100%",
  height: "100%",
  padding: 0,
  display: "block",
};

const bgColor = "lightblue";
const fgColor = "white";

export const innerTextStyle = { ...blockStyle, padding: "4rem" };

export const backgroundColorStyle = { backgroundColor: bgColor };

export const wrapperStyle = {
  ...blockStyle,
  backgroundColor: bgColor,
};

const simpleRadius = { borderRadius: "10px" };

export const simpleBorder = {
  border: "3px solid " + bgColor,
  ...simpleRadius,
};
export const noBorderStyle = { border: "none" };

export const editorStyle = {
  ...simpleBorder,
  backgroundColor: fgColor,
};

export const titleStyle = {
  padding: "1rem",
  fontWeight: "600",
  textAlign: "center",
};

export const markDownStyle = {
  ...innerTextStyle,
  ...simpleBorder,
  paddingTop: "6rem",
  display: "flex",
  flexDirection: "column",
  backgroundColor: fgColor,
};

export const buttonRightStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "0",
};

export const littleMarginStyle = {
  margin: "2rem",
};

export const textAreaStyle = {
  ...innerTextStyle,
  ...noBorderStyle,
  ...simpleRadius,
  backgroundColor: fgColor,
};
