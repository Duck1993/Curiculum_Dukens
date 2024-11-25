<template>
    <div class="header">
      <h1>Dukens Robert Hilaire</h1>
      <div class="contact-info">
        Software Engineer<br />
        Aguascalientes, México<br />
        +52 449 120 61 87<br />
        hilairedukensr@gmail.com
      </div>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/dukens-robert-hilaire-36aa1116a/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/Duck1993" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://twitter.com/dukens-hilaire" target="_blank">
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <a href="https://www.facebook.com/dukens.robertohilaire/" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "HeaderSection",
  };
  </script>
  
  <style scoped>
  .header {
    border-bottom: 2px solid #2c5282;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
  h1 {
    color: #2c5282;
    margin: 0;
    font-size: 28px;
  }
  .contact-info {
    color: #4a5568;
    margin-top: 10px;
  }
  .social-icons {
    margin-top: 10px;
  }
  .social-icons a {
    margin-right: 10px;
    color: #2c5282;
    font-size: 20px;
    text-decoration: none;
  }
  .social-icons a:hover {
    color: #1a202c;
  }
  </style>
  