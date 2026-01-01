// module.exports = function (eleventyConfig) {
//   eleventyConfig.addPassthroughCopy("public");
// };

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      output: "docs",
    },
  };
};

// module.exports = function (eleventyConfig) {
//   eleventyConfig.addPassthroughCopy('script.js');
// };
