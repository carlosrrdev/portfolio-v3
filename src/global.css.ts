import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});
globalStyle("html, body", {
  height: "100%",
});
globalStyle("body", {
  fontFamily: "Mulish, sans-serif",
  background: "#000",
  color: "#fff",
});
