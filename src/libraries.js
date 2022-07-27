const categories = [
  {
    "name": "Frameworks",
    "items": [
      {
        "title": "Svelte",
        "subtitle": "Cybernetically enhanced web apps",
        "href": "https://svelte.dev/",
        "release": "26/11/2016",
        "src": "assets/frameworks/Svelte.png"
      },
      {
        "title": "Vue",
        "subtitle": "The Progressive JavaScript Framework",
        "href": "https://vuejs.org",
        "src": "assets/frameworks/Vue.png",
        "release": "02/2014",
        "highlight": true
      },
      {
        "title": "React",
        "subtitle": "A JavaScript library for building user interfaces",
        "href": "https://reactjs.org/",
        "release": "29/05/2013",
        "src": "assets/frameworks/React.png"
      },
      {
        "title": "Ionic",
        "subtitle": "One codebase. Any platform.",
        "href": "https://ionicframework.com/",
        "release": "2013",
        "src": "assets/libraries/Ionic.png"
      },
      {
        "title": "Meteor",
        "subtitle": "Meteor is an open source platform for web, mobile, and desktop",
        "href": "https://www.meteor.com/",
        "release": "20/01/2012",
        "src": "assets/frameworks/Meteor.png"
      },
      {
        "title": "Ember",
        "subtitle": "A framework for ambitious web developers",
        "href": "https://emberjs.com/",
        "release": "08/12/2011",
        "src": "assets/libraries/Ember.png"
      },
      {
        "title": "Foundation",
        "subtitle": "The most advanced responsive <strong>front-end framework</strong> in the world",
        "href": "https://foundation.zurb.com/",
        "src": "assets/libraries/Foundation.png",
        "release": "09/2011"
      },
      {
        "title": "Angular",
        "subtitle": "One framework. Mobile & desktop.",
        "href": "https://angular.io/",
        "src": "assets/libraries/Angular.png",
        "release": "20/10/2010"
      },
      {
        "title": "Backbone.js",
        "subtitle": "Give your JS App some Backbone with Models, Views, Collections, and Events",
        "href": "https://backbonejs.org/",
        "release": "13/10/2010",
        "src": "assets/frameworks/Backbone.png"
      },
      {
        "title": "Knockout",
        "subtitle": "Simplify dynamic JavaScript UIs with the Model-View-View-Model (MVVM) pattern",
        "href": "https://knockoutjs.com/",
        "release": "05/07/2010",
        "src": "assets/frameworks/Knockout.png"
      },
      {
        "title": "jQuery",
        "subtitle": "write less, do more.",
        "href": "https://jquery.com/",
        "release": "01/2006",
        "src": "assets/frameworks/jQuery.png"
      },
      {
        "title": "Dojo",
        "subtitle": "A Progressive Framework for Modern Web Apps",
        "href": "https://dojo.io/",
        "src": "assets/libraries/Dojo.png",
        "release": "03/2005 ?"
      },
      {
        "title": "Prototype",
        "subtitle": "A foundation for ambitious web user interfaces",
        "href": "http://prototypejs.org/",
        "release": "02/2005",
        "src": "assets/frameworks/Prototype.png"
      },

      {
        "title": "Framework7",
        "subtitle": "Full featured framework for building iOS, Android & Desktop apps",
        "href": "https://framework7.io/",
        "release": "v3.0.0 Jul 05, 2018",
        "src": "assets/libraries/Framework7.png"
      },
      {
        "title": "Mithril",
        "subtitle": "Mithril is a modern client-side JavaScript framework for building Single Page Applications",
        "href": "https://mithril.js.org/",
        "src": "assets/frameworks/Mithril.png"
      }
    ]
  },
  {
    "name": "Icons",
    "items": [
      {
        "title": "Font Awesome",
        "subtitle": "the web's most popular icon set and toolkit",
        "href": "https://fontawesome.com/",
        "src": "assets/libraries/Font Awesome.png"
      },
      {
        "title": "Ionicons",
        "subtitle": "Beautifully crafted open source icons",
        "href": "https://ionicons.com/",
        "src": "assets/libraries/Ionicons.png"
      },
      {
        "title": "Material Design Icons",
        "subtitle": "Community-led Iconography",
        "href": "https://materialdesignicons.com",
        "src": "assets/libraries/Material Design Icons.png",
        "highlight": true
      },
      {
        "title": "Material Icons",
        "subtitle": "Material icons are delightful, beautifully crafted symbols for common actions and items",
        "href": "https://material.io/resources/icons/?style=baseline",
        "src": "assets/libraries/Material Icons.png",
      },
      {
        "title": "Octicons",
        "subtitle": "Your project. GitHub's icons.",
        "href": "https://octicons.github.com/",
        "src": "assets/libraries/Octicons.png",
      }
    ]
  },
  {
    "name": "Libraries",
    "items": [
      {
        "title": "Standard.js",
        "subtitle": "JavaScript Standard Style",
        "href": "https://standardjs.com/",
        "group": "Formatting",
        "src": "assets/libraries/Standard.png",
        "highlight": true
      },
      {
        "title": "Babel",
        "subtitle": "Babel is a JavaScript compiler",
        "href": "https://babeljs.io/",
        "group": "Tools",
        "src": "assets/libraries/Babel.png",
        "highlight": true
      },
      {
        "title": "ESLint",
        "subtitle": "The pluggable linting utility for JavaScript and JSX",
        "href": "https://eslint.org/",
        "group": "Tools",
        "highlight": true,
        "src": "assets/libraries/ESLint.png"
      },
    
      {
        "title": "Bootstrap",
        "subtitle": "The most popular HTML, CSS, and JS library in the world",
        "href": "https://getbootstrap.com/",
        "group": "Library",
        "src": "assets/libraries/Bootstrap.png"
      },
    
    
    
      {
        "title": "GitLab",
        "subtitle": "GitLab named a Leader in Cloud-Native CI",
        "version": "11.11.8",
        "href": "https://about.gitlab.com/",
        "group": "Software",
        "highlight": true,
        "src": "assets/libraries/GitLab.png"
      },
    
      {
        "title": "Lodash",
        "subtitle": "A modern JavaScript utility library delivering modularity, performance & extras",
        "href": "https://lodash.com/",
        "group": "Utilities",
        "highlight": true,
        "src": "assets/libraries/Lodash.png"
      },

      {
        "title": "OpenJS Foundation",
        "href": "https://openjsf.org/",
        "src": "assets/libraries/OpenJS Foundation.png"
      },
      {
        "title": "The Linux Foundation",
        "href": "https://www.linuxfoundation.org/",
        "group": "Foundations",
        "src": "assets/libraries/Linux Foundation.png"
      },

      {
        "title": "Node.js",
        "subtitle": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine",
        "href": "https://nodejs.org/en/",
        "group": "Software",
        "src": "assets/libraries/Node.png",
        "highlight": true
      },
      {
        "title": "npm",
        "subtitle": "npm is a package manager for the JavaScript programming language",
        "href": "https://www.npmjs.com/",
        "src": "assets/libraries/npm.png",
        "group": "Software",
        "highlight": true
      },
      {
        "title": "pgAdmin",
        "subtitle": "administration and development platform for PostgreSQL",
        "href": "https://www.pgadmin.org/",
        "src": "assets/libraries/pgAdmin.png",
        "group": "Database",
        "highlight": true
      },

      {
        "title": "PostgreSQL",
        "subtitle": "The World's Most Advanced Open Source Relational Database",
        "href": "https://www.postgresql.org",
        "src": "assets/libraries/PostgreSQL.png",
        "group": "Database",
        "highlight": true
      },

      {
        "title": "apiDoc",
        "subtitle": "Inline Documentation for RESTful web APIs",
        "href": "http://apidocjs.com/",
        "src": "assets/libraries/apiDoc.png",
        "group": "Documentation"
      },
      {
        "title": "JSDoc",
        "subtitle": "API documentation generator for JavaScript",
        "href": "https://jsdoc.app/",
        "src": "assets/libraries/JSDoc.png",
        "group": "Documentation",
        "highlight": true
      },

      {
        "title": "WebStorm",
        "subtitle": "The smartest JavaScript IDE",
        "href": "https://www.jetbrains.com/webstorm/",
        "src": "assets/libraries/WebStorm.png",
        "group": "IDE"
      },
      {
        "title": "Sass",
        "subtitle": "Syntactically Awesome Style Sheets",
        "href": "https://sass-lang.com/",
        "src": "assets/libraries/Sass.png",
        "group": "Languages"
      },
      {
        "title": "TypeScript",
        "subtitle": "Typed JavaScript at Any Scale",
        "href": "https://www.typescriptlang.org/",
        "src": "assets/libraries/TypeScript.png",
        "group": "Languages"
      },
      {
        "title": "NativeScript",
        "subtitle": "Create Native iOS and Android Apps with JavaScript",
        "href": "https://www.nativescript.org/",
        "src": "assets/libraries/NativeScript.png",
        "group": "Mobile"
      },

      {
        "title": "React Native",
        "subtitle": "Learn once, write anywhere",
        "href": "https://facebook.github.io/react-native/",
        "src": "assets/libraries/React Native.png",
        "group": "Mobile"
      },

      {
        "title": "Papa Parse",
        "subtitle": "The powerful, in-browser CSV parser for big boys and girls",
        "href": "https://www.papaparse.com/",
        "src": "assets/libraries/Papa Parse.png",
        "group": "Parser"
      },

      {
        "title": "RequireJS",
        "subtitle": "RequireJS is a JavaScript file and module loader",
        "href": "https://requirejs.org/",
        "src": "assets/libraries/RequireJS.png",
        "group": "Tools"
      },
      {
        "title": "Rollup",
        "subtitle": "Rollup is a module bundler for JavaScript",
        "href": "https://rollupjs.org/guide/en/",
        "src": "assets/libraries/Rollup.png",
        "group": "Tools"
      },
      {
        "title": "Webpack",
        "subtitle": "Webpack is an open-source JavaScript module bundler",
        "href": "https://webpack.js.org/",
        "src": "assets/libraries/webpack.png",
        "group": "Tools"
      },


      {
        "title": "Underscore",
        "subtitle": "JavaScript's utility _ belt",
        "href": "https://underscorejs.org/",
        "src": "assets/libraries/Underscore.png",
        "group": "Utilities"
      },
      {
        "title": "Vue Router",
        "subtitle": "Vue Router is the official router for Vue.js",
        "href": "https://router.vuejs.org/",
        "src": "assets/libraries/Vue Router.png",
        "group": "Vue",
        "highlight": true
      },
      {
        "title": "axios",
        "subtitle": "Promise based HTTP client for the browser and node.js",
        "href": "https://axios-http.com/",
        "src": "assets/libraries/Axios.png",
        "group": "Library",
        "highlight": true
      },
    
      {
        "title": "Firebase",
        "subtitle": "Firebase is a platform developed by Google for creating mobile and web applications.",
        "href": "https://firebase.google.com/",
        "src": "assets/libraries/Firebase.png",
        "group": "Other"
      },
      {
        "title": "Flutter",
        "subtitle": "Beautiful native apps in record time",
        "href": "https://flutter.dev/",
        "src": "assets/libraries/Flutter.png",
        "group": "Other"
      }
    ]
  },
  {
    name: "Charts",
    items: [
      {
        "title": "Chart.js",
        "subtitle": "Simple yet flexible JavaScript charting for designers & developers",
        "href": "https://www.chartjs.org/",
        "group": "Charts",
        "highlight": true,
        "src": "assets/libraries/Chart.js.png"
      },
      {
        "title": "ApexCharts.js",
        "subtitle": "Modern & Interactive Open-source Charts",
        "href": "https://apexcharts.com/",
        "group": "Charts",
        "src": "assets/libraries/ApexCharts.png"
      },
      {
        "title": "D3.js",
        "subtitle": "Data-Driven Documents",
        "href": "https://d3js.org/",
        "group": "Data",
        "src": "assets/libraries/D3.js.png"
      },
      {
        "title": "DataTables",
        "subtitle": "Table plug-in for jQuery",
        "href": "https://datatables.net/",
        "group": "Data",
        "src": "assets/libraries/DataTables.png"
      },

      {
        "title": "vue-svg-map",
        "href": "https://victorcazanave.github.io/vue-svg-map/",
        "src": "assets/libraries/vue-svg-map.png",
        "group": "Charts"
      },

      {
        "title": "date-fns",
        "subtitle": "Modern JavaScript date utility library",
        "href": "https://date-fns.org/",
        "group": "Date",
        "src": "assets/libraries/date-fns.png"
      },
      {
        "title": "Moment",
        "subtitle": "Parse, validate, manipulate, and display dates and times in JavaScript.",
        "href": "https://momentjs.com/",
        "src": "assets/libraries/Moment.png",
        "group": "Date"
      },
      {
        "title": "Numeral.js",
        "subtitle": "A javascript library for formatting and manipulating numbers",
        "href": "http://numeraljs.com/",
        "src": "assets/libraries/Numeral.png",
        "group": "Number"
      },
      {
        "title": "Voca",
        "subtitle": "The JavaScript string library",
        "href": "https://vocajs.com/",
        "src": "assets/libraries/Voca.png",
        "group": "String"
      },
      {
        "title": "Handlebars",
        "subtitle": "Minimal templating on steriods",
        "href": "https://handlebarsjs.com/",
        "src": "assets/libraries/Handlebars.png",
        "group": "Template"
      },
      {
        "title": "Mustache",
        "href": "https://mustache.github.io/",
        "src": "assets/libraries/Mustache.png",
        "group": "Template"
      }
    ]
  },
  {
    "name": "Maps",
    "items": [
      {
        "title": "Leaflet",
        "subtitle": "mobile-friendly interactive maps",
        "href": "https://leafletjs.com/",
        "group": "Map",
        "src": "assets/libraries/Leaflet.png",
        "highlight": true
      },
      {
        "title": "Leaflet Geoman",
        "subtitle": "Geometry editing tools.",
        "href": "https://geoman.io/leaflet-geoman",
        "src": "assets/libraries/Leaflet-Geoman.png",
        "install": "npm i @geoman-io/leaflet-geoman-free",
        "highlight": true
      },
      {
        "title": "Leaflet markercluster",
        "href": "http://leaflet.github.io/Leaflet.markercluster/",
        "src": "assets/libraries/Leaflet markercluster.png",
        "highlight": true
      },
      {
        "title": "Turf.js",
        "subtitle": "Advanced geospatial analysis for browsers and Node.js",
        "href": "https://turfjs.org/",
        "src": "assets/libraries/Turf.png"
      },
      {
        "title": "OpenLayers",
        "subtitle": "A high-performance, feature-packed library for all your mapping needs",
        "href": "https://openlayers.org/",
        "group": "Map",
        "src": "assets/libraries/OpenLayers.png"
      },

      {
        "title": "ColorBrewer",
        "subtitle": "Color Advice for Maps",
        "href": "https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3",
        "src": "assets/libraries/ColorBrewer.png"
      },
      {
        "title": "Map Icons",
        "href": "https://mapicons.mapsmarker.com/",
        "src": "assets/libraries/Map Icons.png"
      },

      {
        "title": "Pelias",
        "subtitle": "A modular, open-source search engine for our world.",
        "href": "https://www.pelias.io/",
        "src": "assets/libraries/Pelias Geocoder.png"
      },

      {
        "title": "VROOM",
        "subtitle": "Vehicle Routing Open-source Optimization Machine",
        "href": "http://vroom-project.org/",
        "src": "assets/libraries/VROOM.png"
      },

      {
        "title": "PostGIS",
        "subtitle": "Spatial and Geographic Objects for PostgreSQL",
        "href": "https://postgis.net/",
        "group": "Map",
        "highlight": true,
        "src": "assets/libraries/PostGIS.png"
      },
      {
        "title": "pgRouting",
        "subtitle": "Open Source Routing Library",
        "href": "https://pgrouting.org",
        "group": "Database",
        "src": "assets/libraries/pgRouting.png"
      },

      {
        "title": "GeoServer",
        "subtitle": "GeoServer is an open source server for sharing geospatial data.",
        "href": "https://geoserver.org",
        "group": "Map",
        "highlight": true,
        "src": "assets/libraries/GeoServer.png"
      },
      {
        "title": "GeoNetwork",
        "subtitle": "manage spatially referenced resources",
        "href": "https://www.geonetwork-opensource.org/",
        "src": "assets/libraries/GeoNetwork.png"
      },
      {
        "title": "GeoNode [Demo]",
        "href": "https://master.demo.geonode.org/",
        "src": "assets/libraries/GeoNode [demo].png"
      },

      {
        "title": "Batch geocoder for journalists",
        "subtitle": "Locations to coordinates at rocket speed",
        "href": "https://geocode.localfocus.nl/",
        "src": "assets/libraries/geocode.localfocus.png"
      },

      {
        "title": "Openrouteservice",
        "subtitle": "Openpoiservice allows you to find places of interest around or within given geographic coordinates.",
        "href": "https://openrouteservice.org/",
        "src": "assets/libraries/openrouteservice.png"
      }
    ]
  },
  {
    "name": "UI Library",
    "items": [
      {
        "title": "Angular Material",
        "subtitle": "Material Design components for Angular",
        "href": "https://material.angular.io/",
        "highlight": true,
        "src": "assets/libraries/Angular Material.png"
      },
    
      {
        "title": "Material-UI",
        "subtitle": "A popular React UI framework",
        "href": "https://mui.com/",
        "highlight": true,
        "src": "assets/libraries/MUI.png"
      },
      {
        "title": "Ant Design",
        "subtitle": "A design system for enterprise-level products. Create an efficient and enjoyable work experience.",
        "href": "https://ant.design/",
        "src": "assets/libraries/Ant Design.png"
      },
      {
        "title": "Quasar",
        "subtitle": "Build high-performance VueJS user interfaces in record time",
        "href": "https://quasar.dev/",
        "src": "assets/libraries/Quasar.png"
      },
      {
        "title": "Vuetify",
        "subtitle": "Material Design Component Framework",
        "href": "https://vuetifyjs.com/en/",
        "highlight": true,
        "src": "assets/libraries/Vuetify.png"
      },

      {
        "title": "Element",
        "subtitle": "A Desktop UI Library",
        "href": "https://element.eleme.io/#/en-US",
        "src": "assets/libraries/Element.png"
      },
      {
        "title": "Keen-UI",
        "subtitle": "Keen UI is a lightweight Vue.js UI library with a simple API",
        "href": "https://josephuspaye.github.io/Keen-UI",
        "src": "assets/libraries/Keen-UI.png"
      },

      {
        "title": "Materialize",
        "subtitle": "A modern responsive front-end framework based on Material Design",
        "href": "https://materializecss.com/",
        "src": "assets/libraries/Materialize.png"
      },
      {
        "title": "Muse-UI",
        "subtitle": "Based on the Vue 2.0 elegant Material Design UI component library",
        "href": "https://muse-ui.org/#/en-US",
        "src": "assets/libraries/Muse-UI.png"
      },
      {
        "title": "Polythene",
        "subtitle": "Material Design component library for Mithril and React.",
        "href": "https://github.com/ArthurClemens/Polythene",
        "src": "assets/libraries/Polythene.png"
      },

      {
        "title": "Semantic UI",
        "subtitle": "User Interface is the language of the web",
        "href": "https://semantic-ui.com/",
        "src": "assets/libraries/Semantic UI.png"
      },
      {
        "title": "UIkit",
        "href": "https://getuikit.com/",
        "src": "assets/libraries/UIkit.png"
      }
    ]
  },
  {
    name: "VUE",
    items: [
      {
        "title": "Vue CLI",
        "subtitle": "Standard Tooling for Vue.js Development",
        "href": "https://cli.vuejs.org/",
        "src": "assets/libraries/Vue CLI.png",
        "group": "Vue",
        "highlight": true
      },
      {
        "title": "Vuex",
        "subtitle": "Vuex is a state management pattern + library for Vue.js applications",
        "href": "https://vuex.vuejs.org/",
        "src": "assets/libraries/Vuex.png",
        "group": "Vue",
        "highlight": true
      },
      {
        "title": "NativeScript-Vue",
        "subtitle": "Truly native apps using Vue.js and NativeScript",
        "href": "https://nativescript-vue.org/",
        "src": "assets/libraries/NativeScript-Vue.png",
        "group": "Mobile"
      },
      {
        "title": "BootstrapVue",
        "subtitle": "Quickly integrate Bootstrap v4 components with Vue.js",
        "href": "https://bootstrap-vue.org/",
        "src": "assets/libraries/BootstrapVue.png"
      },
      {
        "title": "Buefy",
        "subtitle": "Lightweight UI components for Vue.js based on Bulma",
        "href": "https://buefy.org/",
        "src": "assets/libraries/Buefy.png"
      },
      {
        "title": "PrimeVue",
        "subtitle": "The Most Complete UI Framework for VUE",
        "href": "https://primefaces.org/primevue/#/",
        "src": "assets/libraries/PrimeVUE.png"
      },
      {
        "title": "Vue Material",
        "subtitle": "Material Design for Vue.js",
        "href": "https://vuematerial.io/",
        "src": "assets/libraries/Vue Material.png"
      },
      {
        "title": "Vuecidity",
        "subtitle": "Component Library for Vue.JS",
        "href": "https://vuecidity.wemakesites.net/",
        "src": "assets/libraries/Vuecidity.png"
      }
    ]
  },
  {
    "name": "Companies",
    "items": [
      {
        "title": "Airflow",
        "subtitle": "Programmatically author, schedule and monitor workflows.",
        "href": "https://airflow.apache.org/",
        "src": "assets/resources/Airflow.png"
      },
      {
        "title": "Here",
        "subtitle": "https://www.here.com/",
        "href": "https://www.here.com/",
        "src": "assets/screenshots/here.jpg"
      },
      {
        "title": "kepler.gl",
        "subtitle": "Make an impact with your location data",
        "href": "https://kepler.gl/",
        "src": "assets/libraries/kepler.png",
        "group": "Other"
      },
      {
        "title": "Material Design",
        "subtitle": "Build beautiful products, faster.",
        "href": "https://material.io/",
        "src": "assets/screenshots/material.png"
      },
      {
        "title": "OneZoom Tree of Life Explorer",
        "subtitle": "https://www.onezoom.org/",
        "href": "https://www.onezoom.org/",
        "src": "assets/screenshots/onezoom.png"
      },
      {
        "title": "TinyPNG",
        "subtitle": "Smart PNG and JPEG compression",
        "href": "https://tinypng.com/",
        "src": "assets/resources/tinypng.png"
      },
      {
        "title": "Unsplash",
        "subtitle": "The internet’s source of freely-usable images. Powered by creators everywhere.",
        "href": "https://unsplash.com/",
        "src": "assets/screenshots/unsplash.png"
      },
      {
        "title": "ZDoom",
        "href": "https://www.zdoom.org",
        "src": "assets/screenshots/ZDoom.png"
      }
    ]
  }
]