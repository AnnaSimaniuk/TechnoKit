import ReactDom from "react-dom";
import App from "./App";

jest.mock("react-dom", () => ({ render: jest.fn() }));
it("successfully render", () => {
  const div = document.createElement("div");
  ReactDom.render(<App />, div);
  global.document.getElementById = (id) => id === "root" && div;
  expect(ReactDom.render).toHaveBeenCalledWith(<App />, div);
});

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia =
  global.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
