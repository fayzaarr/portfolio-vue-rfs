<template>
  <section class="skills">
    <div class="container">
      <div v-for="(skill, index) in skills" :key="index" class="skill-card">
        <div class="grid-layout">
          <!-- Icon + Title -->
          <div class="skill-header">
            <img :src="require(`@/assets/icon/${skill.icon}`)" alt="icon" class="skill-icon">
            <h3>{{ skill.title }}</h3>
          </div>
  
          <!-- Deskripsi & Kategori -->
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
  
          <!--Tools -->
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
            title: "Junior Frontend Developer",
            description: "Developing and implementing user interfaces that ensure a seamless and user-friendly experience",
            category: "Web Tech & Framework I Use:",
            subCategory: "HTML, CSS, JavaScript, Git, React.JS, and Vue.JS",
            tools: [
              { name: "HTML", percentage: 90 },
              { name: "CSS", percentage: 83 },
              { name: "JavaScript", percentage: 65 },
              { name: "Git & Github", percentage: 56 },
              { name: "React", percentage: 45 },
              { name: "Vue", percentage: 75 },
              { name: "VS Code", percentage: 89 }
            ],
            icon: "web-design.png"
          },
          {
            title: "UI/UX Designer",
            description: "Designing a system that prioritizes responsiveness, user-friendliness, and efficiency",
            category: "Designing for: ",
            subCategory: "Webs, Apps, Logos",
            tools: [
              { name: "Figma", percentage: 89 },
              { name: "Adobe Illustrator", percentage: 50 },
              { name: "Adobe XD", percentage: 56 }
            ],
            icon: "ui-ux.png"
          },
          {
            title: "AI Engineer",
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
          },
          {
            title: "Social Media Assistant",
            description: "Creating engaging content, scheduling posts, and planning strategies for social media platforms",
            category: "Content Design & Planning Tools:",
            subCategory: "Canva, Adobe Illustrator, Gimp, Trello, Notion",
            tools: [
              { name: "Canva", percentage: 90 },
              { name: "Adobe Illustrator", percentage: 50 },
              { name: "Gimp", percentage: 75 },
              { name: "Trello", percentage: 70 },
              { name: "Notion", percentage: 85 }
            ],
            icon: "content.png"
          },
          {
            title: "Video Editor",
            description: "Editing and enhancing videos, adding effects, and optimizing content for various platforms",
            category: "Video Editing Tools:",
            subCategory: "Adobe Premiere Pro, Capcut, Canva (Video)",
            tools: [
              { name: "Adobe Premiere Pro", percentage: 80 },
              { name: "Capcut", percentage: 80 },
              { name: "Canva (Video)", percentage: 85 }
            ],
            icon: "video-editor.png"
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
  grid-template-columns: 1fr 2fr 2fr; 
  align-items: center;
  gap: 40px;
}

.skill-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
}

.skill-icon {
    width: 7vw;
    height: 7vw;
}

h3 {
  font-size: 1.5vw;
  font-weight: bold;
  margin-top: 10px;
}

.skill-info {
  text-align: center;
}

.description {
  font-size: 1.1vw;
  color: black;
  margin: 0;
  padding: 0;
}

.category {
  font-size: 1.2vw;
  font-weight: bold;
  margin-top: 30px;
}

.sub-category {
  font-size: 1.1vw;
  color: #000000;
}

.progress-container {
  text-align: left;
}

.tools-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.3vw;
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
    min-width: 6vw;
    font-weight: 500;
    font-size: 1vw;
}

.progress-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.progress-bar {
  flex-grow: 1;
  height: 1.5vw;
  background: #d3d3d3;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  width: 0; 
  background: linear-gradient(to right, #9e9e9e, #000);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  color: white;
  font-size: 0.8vw;
  font-weight: bold;
  animation: fillBar 1.5s ease-in-out forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes fillBar {
  to {
    width: var(--fill-width);
  }
}

/* Responsive Mode */
@media screen and (min-width: 1200px) {
  .skill-icon {
    width: 5vw;
    height: 5vw;
  }

  h3 {
    font-size: 1.2vw;
  }

  .description, .sub-category {
    font-size: 1vw;
  }

  .category {
    font-size: 1.1vw;
  }

  .tools-title {
    font-size: 1.2vw;
  }

  .tool-name {
    font-size: 0.9vw;
  }

  .progress-bar {
    height: 1.2vw;
  }

  .progress-fill {
    font-size: 0.8vw;
  }
}

@media screen and (max-width: 768px) {
  .grid-layout {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }

  .container {
    width: 90%;
  }

  .skill-header {
    flex-direction: column;
    align-items: center;
  }

  .skill-icon {
    width: 15vw;
    height: 15vw;
  }

  h3 {
    font-size: 4vw;
  }

  .description, .sub-category, .category {
    font-size: 3vw;
  }

  .tools-title {
    font-size: 3vw;
    margin-bottom: 2vw;
  }

  .tool-name {
    font-size: 2.5vw;
    min-width: 10vw;
  }

  .progress-bar {
    height: 3vw;
    width: 35vw;
  }

  .progress-item {
    gap: 2vw;
    width: 100%;
  }

  .progress-fill {
    font-size: 2.5vw;
  }

  .progress-list {
    padding-left: 2vw;
    padding-right: 2vw;
    align-items: flex-start;
  }
}

</style>
  