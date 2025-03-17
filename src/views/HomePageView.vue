<template>
  <div>
    <HeaderSec />
    <HomeSection />
    <ProfileSection />
    <SkillSection />
    <ProjectSection />
    <ServicesSection />
    <ContactSection />
    <FooterSec />
  </div>
</template>
  
  <script>
  import HeaderSec from "@/components/HeaderSec.vue";
  import HomeSection from "@/components/HomeSection.vue";
  import ProfileSection from "@/components/ProfileSection.vue";
  import SkillSection from "@/components/SkillSection.vue";
  import ProjectSection from "@/components/ProjectSection.vue";
  import ServicesSection from "@/components/ServicesSection.vue";
  import ContactSection from "@/components/ContactSection.vue";
  import FooterSec from "@/components/FooterSec.vue";
  
  export default {
    components: {
      HeaderSec,
      HomeSection,
      ProfileSection,
      SkillSection,
      ProjectSection,
      ServicesSection,
      ContactSection,
      FooterSec
    }
  };
  </script>
  