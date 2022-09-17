const DataTable = {
  template: `
    <v-container fluid>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
      </v-data-table>
    </v-container>
  `,
  data: () => ({
    headers: [
      {
        text: 'Title',
        value: 'title',
        width: '20%'
      },
      {
        text: 'Director',
        value: 'director',
        width: '20%'
      },
      {
        text: 'Year',
        value: 'year',
        width: '20%'
      },
      {
        text: 'Country',
        value: 'country',
        width: '20%'
      },
      {
        text: 'Genre',
        value: 'genre',
        width: '20%'
      }
    ],
    items: []
  }),
  mounted: function () {
    for (var i = 0; i < lists.length; i++) {
      this.items = this.items.concat(lists[i].items)
    }
  }
}
