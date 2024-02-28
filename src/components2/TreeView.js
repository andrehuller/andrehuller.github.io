const TreeView = {
  template: `
    <v-container fluid>
      <v-card outlined>
        <v-card-title>
          Choose a location
        </v-card-title>
        <v-divider></v-divider>
        <v-treeview
          :items="items"
          activatable
          open-all
          open-on-click
          selectable
        ></v-treeview>
      </v-card>
    </v-container>
  `,
  data: () => ({
    items: []
  }),
  created () {
    var countries = _.groupBy(locations, 'country')
    for (var country in countries) {
      var node = {
        id: _.uniqueId(),
        name: country,
        children: []
      }
      
      this.items.push(node)
      
      for (var i = 0; i < countries[country].length; i++) {
        node.children.push({
          id: _.uniqueId(),
          name: countries[country][i].title
        })
      }
    }
  }
}
