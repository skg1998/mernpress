import {
  defaultFont,
  container,
  primaryColor,
  grayColor
} from "../../mernpress";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    display: "block",
    ...defaultFont,
    fontWeight: "500",
    fontSize: "12px"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    display:"flex",
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important",
    listStyleType:"none"
  },
  footer: {
    left: "0",
    bottom: "0",
    width: "100%",
    borderTop: "1px solid " + grayColor[11],
    padding: "15px 0",
    ...defaultFont
  },
  container,
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  paymentMethods:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#b2b2b2",
    width: "60%",
    listStyleType:"none"
  },
  credibility:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#b2b2b2",
    width: "40%",
    fontSize: "15px",
    listStyleType:"none"
  },
  topFooter:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  logo:{
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontSize: "24px",
    letterSpacing:" 1.25px",
    color: "#4c4c4c",
    textDecoration: "none",
  },
  bottomFooter:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  desc:{
    fontSize:15
  },
  socialLinks:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "13%",
    listStyleType:"none"
  },
  links:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "35%",
    listStyleType:"none"
  },
  link:{},
  lineDiv : {
    width: "100%",
    height:" 2px",
    backgroundColor:" #f5f5f5",
  }
};
export default footerStyle;
