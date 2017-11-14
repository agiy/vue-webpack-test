<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>

        <v-app>
            <v-container fluid class="text-xs-center">
                <v-layout row wrap>
                    <v-flex xs12 sm6><span>Light Theme</span>
                        <v-card height="185px" flat color="white">
                            <v-card-text>
                                <div>
                                    <v-btn flat>Normal</v-btn>
                                </div>
                                <div>
                                    <v-btn flat color="primary">Primary</v-btn>
                                </div>
                                <div>
                                    <v-btn flat disabled>Disabled</v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6><span>Dark Theme</span>
                        <v-card height="185px" flat color="secondary">
                            <v-card-text>
                                <div>
                                    <v-btn flat dark>Normal</v-btn>
                                </div>
                                <div>
                                    <v-btn flat dark color="primary">Primary</v-btn>
                                </div>
                                <div>
                                    <v-btn flat dark disabled>Disabled</v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    nav {
        width: 15rem;
        a {
            width: 100%;
        }
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
