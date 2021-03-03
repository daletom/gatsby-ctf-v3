module.exports = [{
      plugin: require('../node_modules/@imgix/gatsby/gatsby-browser.js'),
      options: {"plugins":[],"domain":"tom-proxy.imgix.net","secureURLToken":"UeCnTaStKyB9Vrca","sourceType":"webProxy","defaultImgixParams":{"auto":"format,compress"},"fields":[{"nodeType":"ContentfulAsset","fieldName":"imgixImage"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-ETGGVHPR5J"],"gtagConfig":{"optimize_id":"OPT-NP53F4X","anonymize_ip":true,"cookie_expires":0},"pluginConfig":{"head":false,"respectDNT":true,"exclude":["/preview"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
