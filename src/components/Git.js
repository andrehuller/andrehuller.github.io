const Git = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col lg="6" cols="12">
          <v-card outlined>
            <v-card-text>
              <p><kbd>git clone https://github.com/andrehuller/andrehuller.github.io</kbd></p>
              <v-divider class="pb-4"></v-divider>

              <p><b>Push an existing folder</b></p>
              <p><kbd>cd existing_folder</kbd></p>
              <p><kbd>git init</kbd></p>
              <p><kbd>git remote add origin https://github.com/andrehuller/andrehuller.github.io</kbd></p>
              <p><kbd>git add .</kbd></p>
              <p><kbd>git commit -m "Initial commit"</kbd></p>
              <p><kbd>git push -u origin master</kbd></p>
              <v-divider class="pb-4"></v-divider>

              <p><kbd>git add .</kbd> staging files</p>
              <p><kbd>git status</kbd></p>
              <p><kbd>git commit -m "Update index.html"</kbd></p>
              <p><kbd>git push -u origin master</kbd></p>
              <v-divider class="pb-4"></v-divider>
              
              <p><kbd>npm version 1.0.20</kbd></p>
              <p><kbd>git tag -a v1.0 -m 'Version 1.0'</kbd></p>
              <p><kbd>git push origin v1.0</kbd></p>
              <v-divider class="pb-4"></v-divider>
              
              <p><kbd>git fetch</kbd></p>
              <p><kbd>git pull</kbd></p>
              
              <v-divider class="pb-4"></v-divider>

              <p>use <kbd>git restore &lt;file&gt;...</kbd> to discard changes in working directory</p>
              <v-divider class="pb-4"></v-divider>
              
              <p><kbd>npm run serve</kbd></p>
              
              <v-divider class="pb-4"></v-divider>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="6" cols="12">
          <v-card outlined>
            <v-card-text>
              <p><b>git push using personal access token</b></p>
              <p><kbd>
                git push https://&lt;username>:&lt;personal_access_token&gt;@github.com/&lt;username&gt;/&lt;project_name&gt;.git master
              </kbd></p>
              
              <p><b>Install the Eclipse snap package</b></p>
              
              <p><kbd>sudo snap install --classic eclipse</kbd></p>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `
}
