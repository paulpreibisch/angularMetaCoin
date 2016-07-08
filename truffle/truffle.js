module.exports = {
  build: {
    "index.html": "index.html",
    "main.html": "views/main.html",
    "about.html": "views/about.html",
    "app.js": [

      "bower_components/jquery/dist/jquery.js",
      "bower_components/angular/angular.js",
      "bower_components/angular-animate/angular-animate.js",
      "bower_components/angular-cookies/angular-cookies.js",
      "bower_components/angular-resource/angular-resource.js",
      "bower_components/angular-route/angular-route.js",
      "bower_components/angular-sanitize/angular-sanitize.js",
      "bower_components/angular-touch/angular-touch.js",
      "scripts/app.init.js",
      "scripts/controllers/about.js",
      "scripts/controllers/main.js",

    ],

    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [
    "MetaCoin",
    "ConvertLib"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
