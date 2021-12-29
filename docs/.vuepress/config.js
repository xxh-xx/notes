module.exports = {
  base: "/notes/",
  title: "Some Notes",
  themeConfig: {
    nav: [
      {
        text: "前端",
        ariaLabel: "前端菜单",
        items: [{ text: "CSS", link: "/front-end/CSS/transform" }],
      },
      { text: "Github", link: "https://xxh-xx.github.io/notes/" },
    ],
    sidebar: {
      "/front-end/": [
        {
          title: "CSS",
          collapsable: false,
          children: [
            "CSS/transform",
            "CSS/animation",
            "CSS/CSS-Unit",
            "CSS/CSS-Grid",
            "CSS/flex",
          ],
        },
      ],
    },
    lastUpdated: "上次更新",
    smoothScroll: true,
  },
  plugins: ["@vuepress/back-to-top", "@vuepress/medium-zoom"],
  markdown: {
    lineNumbers: true,
  },
};
