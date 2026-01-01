module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "." });

  return {
    dir: {
      output: "docs",
    },
    pathPrefix: "/moje-wypieki/", // <-- only for project pages
  };
};

// module.exports = function (eleventyConfig) {
//   eleventyConfig.addPassthroughCopy("public");

//   return {
//     dir: {
//       output: "docs",
//     },
//   };
// };
