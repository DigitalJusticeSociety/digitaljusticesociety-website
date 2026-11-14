export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"./template/css/": "css"});
  eleventyConfig.addWatchTarget("./template/css/");

  eleventyConfig.addPassthroughCopy({"./template/robots.txt": "robots.txt"});

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	eleventyConfig.addGlobalData("siteName", "Digital Justice Society");

  return {
    dir: {
      includes: "../template",
      data: "../data",
      input: "pages",
      output: "public",
    },
  };
};
