const Libraries = {
  template: `
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <v-card>
            <v-card-title>
              Libraries
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                clearable
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="libraries"
              :search="search"
              group-by="group" disable-pagination hide-default-footer
            >
              <template v-slot:item.title="{ item }">
                <v-chip :href="item.href" outlined>
                  <template v-if="item.highlight">
                    <v-icon left color="indigo">
                      mdi-alert-circle-outline
                    </v-icon>
                  </template>
                  {{ item.title }}
                </v-chip>
              </template>
              <template v-slot:item.subtitle="{ item }">
                <span v-html="item.subtitle"></span>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    search: null,
    headers: [
      { text: 'Nome', value: 'title' },
      { text: 'Descrição', value: 'subtitle'}
    ],
    libraries: [
      {
        "title": "pgAdmin",
        "subtitle": "administration and development platform for PostgreSQL",
        "href": "https://www.pgadmin.org/",
        "group": "Database",
        "highlight": true
      },
      {
        "title": "pgRouting",
        "subtitle": "Open Source Routing Library",
        "href": "https://pgrouting.org",
        "group": "Database"
      },
      {
        "title": "PostGIS",
        "subtitle": "Spatial and Geographic Objects for PostgreSQL",
        "href": "https://postgis.net/",
        "group": "Database",
        "highlight": true
      },
      {
        "title": "PostgreSQL",
        "subtitle": "The World's Most Advanced Open Source Relational Database",
        "href": "https://www.postgresql.org",
        "group": "Database",
        "highlight": true
      },
      {
        "title": "date-fns",
        "subtitle": "Modern JavaScript date utility library",
        "href": "https://date-fns.org/",
        "group": "Date"
      },
      {
        "title": "apiDoc",
        "subtitle": "Inline Documentation for RESTful web APIs",
        "href": "http://apidocjs.com/",
        "group": "Documentation"
      },
      {
        "title": "JSDoc",
        "subtitle": "API documentation generator for JavaScript",
        "href": "https://jsdoc.app/",
        "group": "Documentation",
        "highlight": true
      },
      {
        "title": "ol-ext",
        "subtitle": "Extensions for OpenLayers",
        "href": "https://viglino.github.io/ol-ext/",
        "group": "Extensions"
      },
      {
        "title": "OpenJS Foundation",
        "href": "https://openjsf.org/",
        "group": "Foundations"
      },
      {
        "title": "The Linux Foundation",
        "href": "https://www.linuxfoundation.org/",
        "group": "Foundations"
      },
      {
        "title": "Angular",
        "subtitle": "One framework. Mobile & desktop.",
        "href": "https://angular.io/",
        "group": "Frameworks"
      },
      {
        "title": "Backbone.js",
        "subtitle": "Give your JS App some Backbone with Models, Views, Collections, and Events",
        "href": "https://backbonejs.org/",
        "group": "Frameworks"
      },
      {
        "title": "Dojo",
        "subtitle": "A Progressive Framework for Modern Web Apps",
        "href": "https://dojo.io/",
        "group": "Frameworks"
      },
      {
        "title": "Ember",
        "subtitle": "A framework for ambitious web developers",
        "href": "https://emberjs.com/",
        "group": "Frameworks"
      },
      {
        "title": "Foundation",
        "subtitle": "The most advanced responsive <strong>front-end framework</strong> in the world",
        "href": "https://foundation.zurb.com/",
        "group": "Frameworks"
      },
      {
        "title": "Framework7",
        "subtitle": "Full featured framework for building iOS, Android & Desktop apps",
        "href": "https://framework7.io/",
        "group": "Frameworks"
      },
      {
        "title": "Ionic",
        "subtitle": "One codebase. Any platform.",
        "href": "https://ionicframework.com/",
        "group": "Frameworks"
      },
      {
        "title": "Knockout",
        "subtitle": "Simplify dynamic JavaScript UIs with the Model-View-View-Model (MVVM) pattern",
        "href": "https://knockoutjs.com/",
        "group": "Frameworks"
      },
      {
        "title": "Meteor",
        "subtitle": "Meteor is an open source platform for web, mobile, and desktop",
        "href": "https://www.meteor.com/",
        "group": "Frameworks"
      },
      {
        "title": "Mithril",
        "subtitle": "Mithril is a modern client-side JavaScript framework for building Single Page Applications",
        "href": "https://mithril.js.org/",
        "group": "Frameworks"
      },
      {
        "title": "Prototype",
        "subtitle": "A foundation for ambitious web user interfaces",
        "href": "http://prototypejs.org/",
        "group": "Frameworks"
      },
      {
        "title": "React",
        "subtitle": "A JavaScript library for building user interfaces",
        "href": "https://reactjs.org/",
        "group": "Frameworks"
      },
      {
        "title": "Svelte",
        "subtitle": "Cybernetically enhanced web apps",
        "href": "https://svelte.dev/",
        "group": "Frameworks"
      },
      {
        "title": "Font Awesome",
        "subtitle": "the web's most popular icon set and toolkit",
        "href": "https://fontawesome.com/",
        "group": "Icons"
      },
      {
        "title": "Ionicons",
        "subtitle": "Beautifully crafted open source icons",
        "href": "https://ionicons.com/",
        "group": "Icons"
      },
      {
        "title": "Material Design Icons",
        "subtitle": "Community-led Iconography",
        "href": "https://materialdesignicons.com",
        "group": "Icons",
        "highlight": true
      },
      {
        "title": "Material Icons",
        "subtitle": "Material icons are delightful, beautifully crafted symbols for common actions and items",
        "href": "https://material.io/resources/icons/?style=baseline",
        "group": "Icons"
      },
      {
        "title": "Octicons",
        "subtitle": "Your project. GitHub's icons.",
        "href": "https://octicons.github.com/",
        "group": "Icons"
      },
      {
        "title": "WebStorm",
        "subtitle": "The smartest JavaScript IDE",
        "href": "https://www.jetbrains.com/webstorm/",
        "group": "IDE"
      },
      {
        "title": "Sass",
        "subtitle": "Syntactically Awesome Style Sheets",
        "href": "https://sass-lang.com/",
        "group": "Languages"
      },
      {
        "title": "TypeScript",
        "subtitle": "Typed JavaScript at Any Scale",
        "href": "https://www.typescriptlang.org/",
        "group": "Languages"
      },
      {
        "title": "NativeScript",
        "subtitle": "Create Native iOS and Android Apps with JavaScript",
        "href": "https://www.nativescript.org/",
        "group": "Mobile"
      },
      {
        "title": "NativeScript-Vue",
        "subtitle": "Truly native apps using Vue.js and NativeScript",
        "href": "https://nativescript-vue.org/",
        "group": "Mobile"
      },
      {
        "title": "React Native",
        "subtitle": "Learn once, write anywhere",
        "href": "https://facebook.github.io/react-native/",
        "group": "Mobile"
      },
      {
        "title": "Numeral.js",
        "subtitle": "A javascript library for formatting and manipulating numbers",
        "href": "http://numeraljs.com/",
        "group": "Number"
      },
      {
        "title": "Papa Parse",
        "subtitle": "The powerful, in-browser CSV parser for big boys and girls",
        "href": "https://www.papaparse.com/",
        "group": "Parser"
      },
      {
        "title": "GeoServer",
        "subtitle": "GeoServer is an open source server for sharing geospatial data.",
        "href": "http://geoserver.org/",
        "group": "Software",
        "highlight": true
      },
      {
        "title": "GitLab",
        "subtitle": "GitLab named a Leader in Cloud-Native CI",
        "version": "11.11.8",
        "href": "https://about.gitlab.com/",
        "group": "Software",
        "highlight": true
      },
      {
        "title": "Node.js",
        "subtitle": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine",
        "href": "https://nodejs.org/en/",
        "group": "Software",
        "highlight": true
      },
      {
        "title": "npm",
        "subtitle": "npm is a package manager for the JavaScript programming language",
        "href": "https://www.npmjs.com/",
        "group": "Software",
        "highlight": true
      },
      {
        "title": "Voca",
        "subtitle": "The JavaScript string library",
        "href": "https://vocajs.com/",
        "group": "String"
      },
      {
        "title": "Handlebars",
        "subtitle": "Minimal templating on steriods",
        "href": "https://handlebarsjs.com/",
        "group": "Template"
      },
      {
        "title": "Mustache",
        "href": "https://mustache.github.io/",
        "group": "Template"
      },
      {
        "title": "Babel",
        "subtitle": "Babel is a JavaScript compiler",
        "href": "https://babeljs.io/",
        "group": "Tools",
        "highlight": true
      },
      {
        "title": "ESLint",
        "subtitle": "The pluggable linting utility for JavaScript and JSX",
        "href": "https://eslint.org/",
        "group": "Tools",
        "highlight": true
      },
      {
        "title": "RequireJS",
        "subtitle": "RequireJS is a JavaScript file and module loader",
        "href": "https://requirejs.org/",
        "group": "Tools"
      },
      {
        "title": "Rollup",
        "subtitle": "Rollup is a module bundler for JavaScript",
        "href": "https://rollupjs.org/guide/en/",
        "group": "Tools"
      },
      {
        "title": "Webpack",
        "subtitle": "Webpack is an open-source JavaScript module bundler",
        "href": "https://webpack.js.org/",
        "group": "Tools"
      },
      {
        "title": "Angular Material",
        "subtitle": "Material Design components for Angular",
        "href": "https://material.angular.io/",
        "group": "UI Components",
        "highlight": true
      },
      {
        "title": "Ant Design",
        "subtitle": "The world's second most popular React UI framework",
        "href": "https://ant.design/",
        "group": "UI Components"
      },
      {
        "title": "BootstrapVue",
        "subtitle": "Quickly integrate Bootstrap v4 components with Vue.js",
        "href": "https://bootstrap-vue.js.org/",
        "group": "UI Components"
      },
      {
        "title": "Buefy",
        "subtitle": "Lightweight UI components for Vue.js based on Bulma",
        "href": "https://buefy.org/",
        "group": "UI Components"
      },
      {
        "title": "Element",
        "subtitle": "A Desktop UI Library",
        "href": "https://element.eleme.io/#/en-US",
        "group": "UI Components"
      },
      {
        "title": "Keen-UI",
        "subtitle": "Keen UI is a lightweight Vue.js UI library with a simple API",
        "href": "https://josephuspaye.github.io/Keen-UI",
        "group": "UI Components"
      },
      {
        "title": "Material-UI",
        "subtitle": "A popular React UI framework",
        "href": "https://material-ui.com/",
        "group": "UI Components",
        "highlight": true
      },
      {
        "title": "Materialize",
        "subtitle": "A modern responsive front-end framework based on Material Design",
        "href": "https://materializecss.com/",
        "group": "UI Components"
      },
      {
        "title": "Muse-UI",
        "subtitle": "Based on the Vue 2.0 elegant Material Design UI component library",
        "href": "https://muse-ui.org/#/en-US",
        "group": "UI Components"
      },
      {
        "title": "Polythene",
        "subtitle": "Material Design component library for Mithril and React.",
        "href": "https://github.com/ArthurClemens/Polythene",
        "group": "UI Components"
      },
      {
        "title": "PrimeVue",
        "subtitle": "The Most Complete UI Framework for VUE",
        "href": "https://primefaces.org/primevue/#/",
        "group": "UI Components"
      },
      {
        "title": "Quasar",
        "subtitle": "Build high-performance VueJS user interfaces in record time",
        "href": "https://quasar.dev/",
        "group": "UI Components"
      },
      {
        "title": "Semantic UI",
        "subtitle": "User Interface is the language of the web",
        "href": "https://semantic-ui.com/",
        "group": "UI Components"
      },
      {
        "title": "UIkit",
        "href": "https://getuikit.com/",
        "group": "UI Components"
      },
      {
        "title": "Vue Material",
        "subtitle": "Material Design for Vue.js",
        "href": "https://vuematerial.io/",
        "group": "UI Components"
      },
      {
        "title": "Vuecidity",
        "subtitle": "Component Library for Vue.JS",
        "href": "https://vuecidity.wemakesites.net/",
        "group": "UI Components"
      },
      {
        "title": "Underscore",
        "subtitle": "JavaScript's utility _ belt",
        "href": "https://underscorejs.org/",
        "group": "Utilities"
      },
      {
        "title": "Vue CLI",
        "subtitle": "Standard Tooling for Vue.js Development",
        "href": "https://cli.vuejs.org/",
        "group": "Vue",
        "highlight": true
      },
      {
        "title": "Vue Router",
        "subtitle": "Vue Router is the official router for Vue.js",
        "href": "https://router.vuejs.org/",
        "group": "Vue",
        "highlight": true
      },
      {
        "title": "Vuex",
        "subtitle": "Vuex is a state management pattern + library for Vue.js applications",
        "href": "https://vuex.vuejs.org/",
        "group": "Vue",
        "highlight": true
      }
    ]
  }),
  mounted () {
    this.libraries = this.libraries.concat(libraries)
  }
}