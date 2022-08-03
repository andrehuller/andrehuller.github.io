const Leaflet = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card outlined>
            <div id="map" style="width: 100%; height: 500px; z-index: 0;"></div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4"
          v-for="plugin in sortedPlugins"
          :key="plugin.title"
        >
          <v-card outlined :href="plugin.href">
            <v-list>
              <v-list-item>
                <v-list-item-avatar class="indigo darken-1">
                  <v-icon dark>{{ plugin.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ plugin.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ plugin.subtitle }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    plugins: [
      {
        "icon": "mdi-map",
        "title": "Leaflet.GestureHandling",
        "subtitle": "Gesture Handling",
        "href": "https://github.com/elmarquis/Leaflet.GestureHandling"
      },
      {
        "icon": "mdi-home",
        "title": "Leaflet.defaultextent",
        "subtitle": "Default Extent Button",
        "href": "https://github.com/nguyenning/Leaflet.defaultextent"
      },
      {
        "icon": "mdi-map-marker",
        "title": "Leaflet.markercluster",
        "subtitle": "Marker Cluster",
        "href": "https://github.com/Leaflet/Leaflet.markercluster"
      },
      {
        "icon": "mdi-map-marker-plus",
        "title": "leaflet-geoman",
        "subtitle": "the best geometry editing for Leaflet Maps",
        "href": "https://geoman.io/leaflet-geoman"
      },
      {
        "icon": "mdi-lasso",
        "title": "leaflet-lasso",
        "subtitle": "Lasso selection plugin for Leaflet",
        "href": "https://github.com/zakjan/leaflet-lasso"
      },
      {
        "icon": "mdi-crosshairs-gps",
        "title": "leaflet-locatecontrol",
        "subtitle": "A customizable locate control",
        "href": "https://github.com/domoritz/leaflet-locatecontrol/"
      },
      {
        "icon": "mdi-map",
        "title": "leaflet.wms",
        "subtitle": "Enhanced WMS support for Leaflet",
        "href": "https://github.com/heigeo/leaflet.wms"
      }
    ]
  }),
  computed: {
    sortedPlugins () {
      return _.sortBy(this.plugins, 'title')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.onResize()
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.map = L.map('map').setView([25, 0], 2) //.setView([-24.618588, -51.316993], 7) // FIXME

      this.layers = L.control.layers({
        'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
        'Imagery': L.esri.basemapLayer('Imagery'),
        'Topographic': L.esri.basemapLayer('Topographic').addTo(this.map),
      }).addTo(this.map)

      L.control.defaultExtent()
        .addTo(this.map)
      
      this.map.gestureHandling.enable()

      var countries = [
        ['Algeria', 18.968147, 37.2962055, -8.668908, 11.997337],
        ['Australia', -55.3228175, -9.0882278, 72.2460938, 168.2249543],
        ['Brazil', -33.8689056, 5.2842873, -73.9830625, -28.6341164],
        ['Canada', 41.6765556, 83.3362128, -141.00275, -52.3231981],
        ['Czech Republic', 48.5518083, 51.0557036, 12.0905901, 18.859216],
        ['Denmark', 54.4516667, 57.9524297, 7.7153255, 15.5530641],
        ['France', 41.2632185, 51.268318, -5.4534286, 9.8678344],
        ['Germany', 47.2701114, 55.099161, 5.8663153, 15.0419319],
        ['Hong Kong', 22.1193278, 22.4393278, 114.0028131, 114.3228131],
        ['India', 6.5546079, 35.6745457, 68.1113787, 97.395561],
        ['Iran', 24.8465103, 39.7816502, 44.0318908, 63.3332704],
        ['Italy', 35.2889616, 47.0921462, 6.6272658, 18.7844746],
        ['Japan', 20.2145811, 45.7112046, 122.7141754, 154.205541],
        ['Mexico', 19.2726009, 19.5926009, -99.2933416, -98.9733416],
        ['Poland', 49.0020468, 55.0336963, 14.1229707, 24.145783],
        ['Russia', 41.1850968, 82.0586232, 19.6389, 180],
        ['Spain', 27.4335426, 43.9933088, -18.3936845, 4.5918885],
        ['Sweden', 55.1331192, 69.0599699, 10.5930952, 24.1776819],
        // ['United Kingdom', 25.2223186, 25.2241651, 55.1579517, 55.1606916],
        ['United States', 24.9493, 49.5904, -125.0011, -66.9326]
      ]

      for (var i = 0; i < countries.length; i++) {
        var country = countries[i]
        var lat0 = country[1]
        var lat1 = country[2]
        var lng0 = country[3]
        var lng1 = country[4]
        var center = L.bounds([[lng0, lat0], [lng1, lat1]]).getCenter()
        L.marker([center.y, center.x])
          .bindPopup(country[0])
          .addTo(this.map)
      }

      L.geoJson(customgeojson, {
        // clickable: false,
        // style: myCustomStyle
      }).addTo(this.map)
    })
  },
  methods: {
    onResize () {
      if (this.map) {
        this.map.invalidateSize()
      }
    }
  }
}