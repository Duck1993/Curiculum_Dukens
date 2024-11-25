<template>
  <div class="section">
    <h2>Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <strong>Programming Languages:</strong> JavaScript, TypeScript, Python, HTML5, CSS3
      </div>
      <div class="skill-category">
        <strong>Frameworks & Libraries:</strong> React, Vue.js, Angular, Node.js, Django
      </div>
      <div class="skill-category">
        <strong>Cloud & DevOps:</strong> AWS Cloud Services, CI/CD, GitHub, GitLab, Heroku
      </div>
      <div class="skill-category">
        <strong>Databases:</strong>MySQL, PostgreSQL, SQL
      </div>
      <div class="skill-category">
        <strong>Testing:</strong> Unit Testing (Jest, PyTest), Selenium, Cypress, TestRail, API Testing, TDD
      </div>
      <div class="skill-category">
        <strong>Project Management:</strong> Jira, Trello, Azure DevOps, Agile
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnicalSkills",
};
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.skill-category {
  margin-bottom: 10px;
}
.skill-category strong {
  color: #2c5282;
}
</style>
