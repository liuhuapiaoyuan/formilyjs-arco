const path = require("path");

function resolve(dir) {
  console.log("path.join(__dirname, dir)" ,path.join(__dirname, dir))
  return path.join(__dirname, dir);
}

export default {
  outputPath: "site",
  exportStatic: {},
  mode: "site",
  title: "@formily/arco",
  alias: {
    "@formily/arco":resolve("src")
  },
  links: [{ rel: "stylesheet", href: "/style.css" }],
  manifest: {},
  hash: true,
  resolve: {
    includes: ["src"],
  },
  navs: [
    {
      title: "组件",
      path: "/components",
    },
    {
      title: "github",
      path: "https://github.com/formilyjs/semi",
    },
    {
      title: "issues",
      path: "https://github.com/formilyjs/semi/issues",
    },
    {
      title: "formily v2",
      path: "https://v2.formilyjs.org/",
    },
  ],
};
