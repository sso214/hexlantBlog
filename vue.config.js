module.exports = {
    css : {
        loaderOptions : {
            sass : {
                additionalData: `
          @import "@/styles/_color.scss";
          @import "@/styles/_layout.scss";
        `
            }
        }
    }
}
