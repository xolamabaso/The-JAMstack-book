//Create variables that require() any packages we need

module.exports = function(eleventyConfig) {
   // copy `assets/` to `_site/assets/`
   eleventyConfig.addPassthroughCopy("assets");
   // Set the source for 11ty to the /src directory
   // Otherwise, this defaults the project to root
   // This provides a better project structure
   return {
      dir:{
         input: "src",
         output: "_site",// default destination
         includes: "_templates"// to remove confusion from general "includes"
      }
   }
}