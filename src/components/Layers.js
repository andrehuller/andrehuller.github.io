const Layers = {
  template: `
    <v-container fluid>
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
      const GEOSERVER = 'https://geoserver.pr.gov.br/geoserver/ows'

      this.layers = L.control.layers({
        'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        'Gray Labels': L.esri.basemapLayer('GrayLabels'),
        'Imagery': L.esri.basemapLayer('Imagery').addTo(this.map),
        'Topographic': L.esri.basemapLayer('Topographic'),
        'Empty': L.tileLayer('')
      }, {
        'ImageryLabels': L.esri.basemapLayer('ImageryLabels').addTo(this.map),
        'Municípios do Paraná': L.tileLayer.wms(GEOSERVER, {
          layers: 'itcg:municipios_pol_p31982_e50',
          format: 'image/png',
          transparent: true
        }),
        'Áreas Urbanas': L.tileLayer.wms(GEOSERVER, {
          layers: 'sedu_paranacidade:areas_urbanas_pol_p31982',
          format: 'image/png',
          transparent: true
        }),
        // SEIL/DER
        'Rodovias (2014)': L.tileLayer.wms(GEOSERVER, {
          layers: 'seil_der:rodovias_trechos_lin_p29192_a2014',
          format: 'image/png',
          transparent: true
        }),
        'Sistema Rodoviário': L.tileLayer.wms(GEOSERVER, {
          layers: 'seil_der:sistema_rodoviario_lin_p31982',
          format: 'image/png',
          transparent: true
        }),
        // SEMA/ÁguasParaná
        'Principais Massas d\'Água (2011)': L.tileLayer.wms(GEOSERVER, {
          layers: 'sema_aguasparana:hidrografia_pol_p31982_e50_a2011_v002',
          format: 'image/png',
          transparent: true
        }),
        // SEMA/IAP
        'Ecossistemas': L.tileLayer.wms(GEOSERVER, {
          layers: 'sema_iap:ecossistemas_pol_p29192',
          format: 'image/png',
          transparent: true
        }),
        'Regiões Bioclimáticas (2020)': L.tileLayer.wms(GEOSERVER, {
          layers: 'sema_iap:regioes_bioclimaticas_pol_p31982',
          format: 'image/png',
          transparent: true
        }),
        // SESA
        'Clínicas': L.tileLayer.wms(GEOSERVER, {
          layers: 'sesa:clinica_pto_p4674',
          format: 'image/png',
          transparent: true
        }),
        'Hospitais': L.tileLayer.wms(GEOSERVER, {
          layers: 'sesa:hospital_pto_p4674',
          format: 'image/png',
          transparent: true
        }),
        'Laboratórios': L.tileLayer.wms(GEOSERVER, {
          layers: 'sesa:laboratorio_pto_p4674',
          format: 'image/png',
          transparent: true
        }),
        'Regionais SESA (2008)': L.tileLayer.wms(GEOSERVER, {
          layers: 'sesa:regional_sesa_site_pol_p29192_a2008',
          format: 'image/png',
          transparent: true
        }),

        'Balsas': L.tileLayer.wms(GEOSERVER, {
          layers: 'seil_der:balsa_pto_p29192',
          format: 'image/png',
          transparent: true
        }),
        'Portos': L.tileLayer.wms(GEOSERVER, {
          layers: 'seil_der:portos_pto_p29192',
          format: 'image/png',
          transparent: true
        }),
        'Aeroportos': L.tileLayer.wms(GEOSERVER, {
          layers: 'seil_der:aerodromos_pto_p29192_a2006',
          format: 'image/png',
          transparent: true
        }),
        'Ferrovias': L.tileLayer.wms(GEOSERVER, {
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