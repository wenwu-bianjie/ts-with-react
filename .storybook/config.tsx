import { configure, addDecorator, addParameters } from "@storybook/react";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../src/styles/index.scss";

library.add(fas);
// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx$/), module);

const wrapperStyles: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (storyFn: any) => (
  <div style={wrapperStyles}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
);

addParameters({
  info: {
    inline: true,
    header: false,
  },
});
addDecorator(storyWrapper);
addDecorator(withInfo);
