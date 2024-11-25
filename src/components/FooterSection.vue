<template>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong></strong> By <a href="https://tu-sitio-web.com">Dukens Robert Hilaire</a>. 
          © {{ currentYear }} HDR | Alls Rights Reserved
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f5f5f5;
    padding: 0rem;
    position: relative;
    bottom: 0;
    
    width: 100%;
    position:fixed;
  }
  </style>