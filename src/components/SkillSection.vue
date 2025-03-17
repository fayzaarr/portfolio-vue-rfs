<template>
  <section class="skills">
    <div class="container">
      <div v-for="(skill, index) in skills" :key="index" class="skill-card">
        <div class="grid-layout">
          <!-- Kiri: Icon + Title -->
          <div class="skill-header">
            <img :src="require(`@/assets/icon/${skill.icon}`)" alt="icon" class="skill-icon">
            <h3>{{ skill.title }}</h3>
          </div>
  
          <!-- Tengah: Deskripsi & Kategori -->
          <div class="skill-info">
            <p class="description">
              {{ skill.description }}
            </p>
            <p class="category">
              {{ skill.category }}
            </p>
            <p class="sub-category">
              {{ skill.subCategory }}
            </p>
          </div>
  
          <!-- Kanan: Tools -->
          <div class="progress-container">
            <p class="tools-title">
              Tools:
            </p>
            <div class="progress-list">
              <div v-for="(tool, i) in skill.tools" :key="i" class="progress-item">
                <span class="tool-name">{{ tool.name }}</span>
                <div class="progress-bar">
                  <div 
                    class="progress-fill" 
                    :style="{ '--fill-width': tool.percentage + '%', '--delay': (i * 0.2) + 's' }"
                  >
                    {{ tool.percentage }}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
          {
            title: "UI/UX Designer",
            description: "Designing a system that prioritizes responsiveness, user-friendliness, and efficiency",
            category: "Designing for: ",
            subCategory: "Webs, Apps, Logos",
            tools: [
              { name: "Figma", percentage: 89 },
              { name: "Adobe Illustrator", percentage: 45 },
              { name: "Canva", percentage: 90 }
            ],
            icon: "ui-ux.png"
          },
          {
            title: "Junior Frontend Developer",
            description: "Developing and implementing user interfaces that ensure a seamless and user-friendly experience",
            category: "Web Tech I Use:",
            subCategory: "HTML, CSS, JavaScript, Git",
            tools: [
              { name: "HTML", percentage: 88 },
              { name: "CSS", percentage: 83 },
              { name: "JavaScript", percentage: 65 },
              { name: "Git & Github", percentage: 56 },
              { name: "React", percentage: 45 },
              { name: "Vue", percentage: 54 },
              { name: "VS Code", percentage: 87 }
            ],
            icon: "web-design.png"
          },
          {
            title: "Machine & Deep Learning Developer",
            description: "Implementing machine & deep learning models for predictions & solutions",
            category: "Programming Languages:",
            subCategory: "Python (Tensorflow, Pytorch, and Scikit-learn)",
            tools: [
              { name: "Python", percentage: 78 },
              { name: "Tensorflow", percentage: 74 },
              { name: "PyTorch", percentage: 34 },
              { name: "Google Colab", percentage: 89 },
              { name: "Pycharm", percentage: 82 }
            ],
            icon: "deep-learning1.png"
          }
        ]
      };
    }
  };
  </script>
  
<style scoped>
.skills {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  background: #eeedf4;
  margin-bottom: -100px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 75%;
  margin-top: -100px;
  z-index: 2;
}

.skill-card {
  background: #eeedf4;
  padding: 30px;
  border-radius: 15px;
  padding: 2vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
  box-shadow: 0 4px 7px #0d0e0e;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr; /* Bagi jadi 3 kolom */
  align-items: center;
  gap: 40px;
}

/* Icon + Title */
.skill-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
}

.skill-icon {
  width: 5vw;
  height: 5vw;
}

h3 {
  font-size: 1vw;
  font-weight: bold;
  margin-top: 10px;
}

/* Deskripsi */
.skill-info {
  text-align: center;
}

.description {
  font-size: 0.95vw;
  /* font-weight: 600; */
  color: black;
  margin: 0;
  padding: 0;
}

.category {
  font-size: 0.95vw;
  font-weight: bold;
  margin-top: 30px;
}

.sub-category {
  font-size: 0.8vw;
  color: #000000;
}

/* Tools */
.progress-container {
  text-align: left;
}

.tools-title {
  text-align: center;
  font-weight: bold;
  font-size: 0.95vw;
  margin-bottom: 1vw;
}

.progress-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.progress-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tool-name {
  min-width: 150px;
  font-weight: 500;
  font-size: 0.8vw;
}

/* Container untuk progress bar */
.progress-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

/* Progress bar utama */
.progress-bar {
  flex-grow: 1;
  height: 0.8vw;
  background: #d3d3d3; /* Warna background */
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

/* Efek gradient + animasi isi progress */
.progress-fill {
  height: 100%;
  width: 0; /* Awalnya kosong */
  background: linear-gradient(to right, #9e9e9e, #000);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  color: white;
  font-size: 0.7vw;
  font-weight: bold;
  animation: fillBar 1.5s ease-in-out forwards;
  animation-delay: var(--delay, 0s);
}

/* Animasi pengisian progress bar */
@keyframes fillBar {
  to {
    width: var(--fill-width);
  }
}
</style>
  