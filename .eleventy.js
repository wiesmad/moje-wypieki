module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  return {
    // ADD THESE TWO LINES:
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    dir: {
      input: ".",
      includes: "_includes",
      output: "docs",
    },
    pathPrefix: "/moje-wypieki/",
  };
};
