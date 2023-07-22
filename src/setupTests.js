import "@testing-library/jest-dom/extend-expect";
import { configure } from "@testing-library/react";
import { JSDOM } from "jsdom";

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};

configure({ testIdAttribute: "data-testid" });
