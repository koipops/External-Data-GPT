
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("scripts");
  return {
      dir: {
          input: ".",
          output: "_site"
      }
  };
};