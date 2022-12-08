import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars, faMagnifyingGlass, faArrowRight, faLocationDot, faTag, faPlay, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faClock, faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

// eslint-disable-next-line max-len
library.add(faBars, faMagnifyingGlass, faArrowRight, faLinkedinIn, faFacebookF, faTwitter, faClock, faLocationDot, faUser, faTag, faPlay, faPhone, faEnvelope);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
