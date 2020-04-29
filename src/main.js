import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret} from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faHtml5, faJs, faBootstrap, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
library.add(faVuejs, faHtml5, faJs, faBootstrap, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
