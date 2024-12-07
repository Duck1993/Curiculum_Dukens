<template>
    <div class="projects">
      <h2 class="title">Some Projects</h2>
      <ul class="project-list">
        <li
          v-for="(project, index) in displayedProjects"
          :key="index"
          class="project-item"
        >
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-details">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View on GitHub
            </a>
          </div>
        </li>
      </ul>
      <a
        href="https://github.com/Duck1993"
        target="_blank"
        rel="noopener noreferrer"
        class="view-more"
      >
        View More Projects
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsSection',
    data() {
      return {
        projects: [
          {
            title: 'GestionApp',
            description:
              'Personal Finance Management App is a software application designed to help individuals manage their financial activities using Flask',
            link: 'https://github.com/Duck1993/GestionApp',
            image: require('/public/Gestion.jpeg'),
          },
          {
            title: 'Facial assistance',
            description:
              'App of facial recognition technology using python.',
            link: 'https://github.com/Duck1993/asistencia_facial',
            image: require('/public/facial.jpeg'),
          },
          {
            title: 'Billing System',
            description:
              'Software application specifically designed to automate the billing process in restaurants with libraries like Tkinter. ',
            link: 'https://github.com/Duck1993/sistema_facturacion',
            image: require('/public/fact.jpeg'),
          },
          {
            title: 'Portafolio',
            description:
              'Responsive portfolio website using Vue.js, showcasing my professional skills, projects, and contact information.',
            link: 'https://github.com/Duck1993/Curiculum_Dukens',
            image: require('/public/portafolio.jpeg'),
          },
        ],
      };
    },
    computed: {
      displayedProjects() {
        return this.projects.slice(0, 4); // Show only the first 4 projects
      },
    },
  };
  </script>
  
  <style scoped>
  .projects {
    font-family: Arial, sans-serif;
    margin: 20px 0;
    color: #333;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 0.5rem;
  }
  
  .project-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .project-item {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .project-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .project-details {
    padding: 1rem;
  }
  
  .project-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.5rem 0;
    color: #222;
  }
  
  .project-description {
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0.5rem 0 1rem 0;
  }
  
  .project-link {
    font-size: 0.9rem;
    color: #007bff;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .project-link:hover {
    color: #0056b3;
  }
  
  .view-more {
    display: block;
    margin: 1rem auto;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .view-more:hover {
    background-color: #cc0000;
  }
  </style>
  