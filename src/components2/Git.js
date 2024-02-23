const Git = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col lg="6" cols="12">
          <v-card color="indigo" variant="outlined">
            <v-card-text>
              <p class="mb-4"><v-kbd>git clone https://github.com/andrehuller/andrehuller.github.io</v-kbd></p>
              <v-divider class="pb-4"></v-divider>

              <p class="mb-4"><b>Push an existing folder</b></p>
              <p class="mb-4"><v-kbd>cd existing_folder</v-kbd></p>
              <p class="mb-4"><v-kbd>git init</v-kbd></p>
              <p class="mb-4"><v-kbd>git remote add origin https://github.com/andrehuller/andrehuller.github.io</v-kbd></p>
              <p class="mb-4"><v-kbd>git add .</v-kbd></p>
              <p class="mb-4"><v-kbd>git commit -m "Initial commit"</v-kbd></p>
              <p class="mb-4"><v-kbd>git push -u origin master</v-kbd></p>
              <v-divider class="pb-4"></v-divider>

              <p class="mb-4"><v-kbd>git add .</v-kbd> staging files</p>
              <p class="mb-4"><v-kbd>git status</v-kbd></p>
              <p class="mb-4"><v-kbd>git commit -m "Update index.html"</v-kbd></p>
              <p class="mb-4"><v-kbd>git push -u origin master</v-kbd></p>
              <v-divider class="pb-4"></v-divider>
              
              <p class="mb-4"><v-kbd>npm version 1.0.20</v-kbd></p>
              <p class="mb-4"><v-kbd>git tag -a v1.0 -m 'Version 1.0'</v-kbd></p>
              <p class="mb-4"><v-kbd>git push origin v1.0</v-kbd></p>
              <v-divider class="pb-4"></v-divider>
              
              <p class="mb-4"><v-kbd>git fetch</v-kbd></p>
              <p class="mb-4"><v-kbd>git pull</v-kbd></p>
              
              <v-divider class="pb-4"></v-divider>

              <p class="mb-4">use <v-kbd>git restore &lt;file&gt;...</v-kbd> to discard changes in working directory</p>
              <v-divider class="pb-4"></v-divider>
              
              <p class="mb-4"><v-kbd>npm run serve</v-kbd></p>
              
              <v-divider class="pb-4"></v-divider>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="6" cols="12">
          <v-card color="indigo" variant="outlined">
            <v-card-text>
              <p class="mb-4"><b>git push using personal access token</b></p>
              <p class="mb-4"><v-kbd>
                git push https://&lt;username>:&lt;personal_access_token&gt;@github.com/&lt;username&gt;/&lt;project_name&gt;.git master
              </v-kbd></p>
              
              <p class="mb-4"><b>Install the Eclipse snap package</b></p>
              
              <p class="mb-4"><v-kbd>sudo snap install --classic eclipse</v-kbd></p>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `
}
