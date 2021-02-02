const Layers = {
  template: `
    <v-container fluid class="py-0">
      <v-row>
        <v-col class="pa-0">
          <div id="map" style="width: 100%; height: calc(100vh - 64px); z-index: 0;"></div>
        </v-col>
      </v-row>
    </v-container>
  `,
  mounted () {
    this.$nextTick(() => {
      this.map = L.map('map').setView([-24.618588, -51.316993], 8) //.setView([-24.618588, -51.316993], 7)

      L.control.defaultExtent()
        .addTo(this.map)

      // info_format: 'application/json',
      // tiled: true,
      // feature_count: 500

      this.layers = L.control.layers({
        'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map),
        'Topographic': L.esri.basemapLayer('Topographic'),
        'ImageryClarity': L.esri.basemapLayer('ImageryClarity')
      }, {
        'Municípios do Paraná': L.tileLayer.wms('https://geoservertre.pr.gov.br/geoserver/ows', {
          layers: 'itcg:municipios_pol_p31982_e50',
          format: 'image/png',
          transparent: true
        }).addTo(this.map),
        'Áreas Urbanas': L.tileLayer.wms('https://geoservertre.pr.gov.br/geoserver/ows', {
          layers: 'sedu_paranacidade:areas_urbanas_pol_p31982',
          format: 'image/png',
          transparent: true
        }),
        'Clínicas': L.tileLayer.wms('https://geoservertre.pr.gov.br/geoserver/ows', {
          layers: 'sesa:clinica_pto_p4674',
          format: 'image/png',
          transparent: true
        }),
        'Hospitais': L.tileLayer.wms('https://geoservertre.pr.gov.br/geoserver/ows', {
          layers: 'sesa:hospital_pto_p4674',
          format: 'image/png',
          transparent: true
        }),
        'Laboratórios': L.tileLayer.wms('https://geoservertre.pr.gov.br/geoserver/ows', {
          layers: 'sesa:laboratorio_pto_p4674',
          format: 'image/png',
          transparent: true
        }),
        'Regionais SESA (2008)': L.tileLayer.wms('https://geoserver.pr.gov.br/geoserver/ows', {
          layers: 'sesa:regional_sesa_site_pol_p29192_a2008',
          format: 'image/png',
          transparent: true
        }),

        'Balsas': L.tileLayer.wms('https://geoserver.pr.gov.br/geoserver/ows', {
          layers: 'seil_der:balsa_pto_p29192',
          format: 'image/png',
          transparent: true
        }),
        'Portos': L.tileLayer.wms('https://geoserver.pr.gov.br/geoserver/ows', {
          layers: 'seil_der:portos_pto_p29192',
          format: 'image/png',
          transparent: true
        }),
        'Aeroportos': L.tileLayer.wms('https://geoserver.pr.gov.br/geoserver/ows', {
          layers: 'seil_der:aerodromos_pto_p29192_a2006',
          format: 'image/png',
          transparent: true
        }),
        'Ferrovias': L.tileLayer.wms('https://geoservertre.pr.gov.br/geoserver/ows', {
          layers: 'seil_der:ferrovias_lin_p31982',
          format: 'image/png',
          transparent: true
        })
          
      }, {
        collapsed: false
      }).addTo(this.map)
    })
  }
}