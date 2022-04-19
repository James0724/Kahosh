module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-crisp-chat/gatsby-browser.js'),
      options: {"plugins":[],"websiteId":"CRISP_WEBSITE_ID","enableDuringDevelop":false,"defer":true,"enableImprovedAccessibility":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[],"threshold":0.01,"once":true,"disable":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-anchor-links/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
