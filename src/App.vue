<template>
  <div id="app">
    <HeaderSection />
    <ProfessionalSummary />
    <TechnicalSkills />
    <ProfessionalCompetencies />
    <ProfessionalExperience />
    <EducationSection />
    <CertificationsSection />
    <LanguagesSection />
    <FooterSection />
    <ProjectsSection />
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import ProfessionalSummary from "./components/ProfessionalSummary.vue";
import TechnicalSkills from "./components/TechnicalSkills.vue";
import ProfessionalCompetencies from "./components/ProfessionalCompetencies.vue";
import ProfessionalExperience from "./components/ProfessionalExperience.vue";
import EducationSection from "./components/EducationSection.vue";
import CertificationsSection from "./components/CertificationsSection.vue";
import LanguagesSection from "./components/LanguagesSection.vue";
import FooterSection from "./components/FooterSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";

export default {
  components: {
    HeaderSection,
    ProfessionalSummary,
    TechnicalSkills,
    ProfessionalCompetencies,
    ProfessionalExperience,
    EducationSection,
    CertificationsSection,
    LanguagesSection,
    FooterSection,
    ProjectsSection,
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  color: #333;
}
</style>
