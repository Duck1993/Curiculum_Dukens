import { createApp } from 'vue';
import App from './App.vue';

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faLinkedin, faGithub, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';

// Import Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faLinkedin, faGithub, faEnvelope, faFacebook, faHandPointRight, faXTwitter);

// Create the app and register the FontAwesomeIcon component
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
