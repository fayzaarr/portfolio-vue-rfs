<template>
  <section id="section-projects" class="sec-proj">
    <div class="project-container">
      <div class="myproj">
        <div class="proj-text">
          <h5>My Recent</h5>
          <h1>Projects</h1>
          <h3>
            These projects showcased here include some of the tasks I completed during college, 
            as well as recent projects I created to learn new concepts and enhance my skills through practice.
          </h3>
        </div>
      </div>
    </div>

    <div class="bg-cardproj">
      <div class="cards-container">
        <div v-for="(project, index) in projects" :key="index" class="card">
          <h5>{{ project.category }}</h5>
          <h1>{{ project.title }}</h1>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="btn-proj">
            <img :src="require(`@/assets/icon/${project.icon}`)" alt="icon" class="btn-icon">
            Details
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          category: "Website",
          title: "E-Perpus",
          description: "Projects Website Library using AdminLTE and PHP MySQLi.",
          link: "https://github.com/fayzaarr/codee-perpus",
          icon: "logo1.png"
        },
        {
          category: "Website",
          title: "Portfolio",
          description: "Personal portfolio website using Vue.js framework.",
          link: "https://github.com/fayzaarr/portfolio-vue-rfs",
          icon: "logo1.png"
        },
        {
          category: "Application",
          title: "Attendance System",
          description: "Real-time Face Attendance System using LBPH for PT Elektrindodaya Pakarnusa.",
          link: "https://github.com/fayzaarr/sistem-absensi-LBPH",
          icon: "logo1.png"
        },
        {
          category: "Design",
          title: "UI/UX Design",
          description: "Designing user-friendly websites and apps, and creating logos for products.",
          link: "https://www.figma.com/design/AplZ72UHZvLcBUDH8my3Nk/Project-Design?node-id=0-1&t=5PF2vRRXplAVA6Lt-1",
          icon: "figma.png"
        },
        {
          category: "Design",
          title: "Design Content",
          description: "Designing engaging social media posts, banners, and promotional materials for various platforms.",
          link: "https://www.canva.com/design/DAGnPG5m1WQ/DjzxxqDG6zkGhV7jBQHvZg/view?utm_content=DAGnPG5m1WQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc661dfec1d",
          icon: "easel.png"
        },
        {
          category: "Editing",
          title: "Video Editing",
          description: "Creating simple, beginner-friendly video content for social media.",
          link: "https://www.canva.com/design/DAGnWTZ91so/Xh7dy3BLvlaBdpoS6O81aA/view?utm_content=DAGnWTZ91so&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cb284e20d", 
          icon: "easel.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Projects Section */
#section-projects {
  position: relative;
  width: auto;
  height: auto;
  margin-top: -10px;
  margin-bottom: 3vw;
}

.sec-proj {
  background-color: #0D0E0E;
  color: #eeedf4;
}

.project-container {
  max-width: 1200px;
  margin: auto;
}

.myproj {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5vw;
  text-align: center;
}

.proj-text h5 {
  font-size: 1.1vw;
  opacity: 0.6;
  margin-bottom: -2vh;
}

.proj-text h1 {
  font-size: 2.5vw;
  font-weight: 800;
}

.proj-text h3 {
  font-size: 2vh;
  font-weight: lighter;
  padding: 0 3vw;
}

.bg-cardproj {
  background-color: #eeedf4;
  width: auto;
  margin-top: 5vw;
  display: grid;
  overflow: visible;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-top: -3vw;
}

.card {
  background-color: #eeedf4;
  border-radius: 20px;
  box-shadow: 0 1px 5px rgb(0, 0, 0);
  width: 24vw;
  max-width: 480px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #000;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card h5 {
  opacity: 0.6;
  font-size: 1vw;
  margin: 20px 0 10px 0;
}

.card h1 {
  font-size: 2.5vh;
  margin: 0;
}

.card p {
  font-size: 1vw;
  padding: 10px;
  line-height: 1.5;
  font-weight: lighter;
}

.btn-proj {
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #fff;
  color: #eeedf4;
  background-color: #0D0E0E;
  padding: 10px 30px;
  gap: 12px;
  font-size: 2vh;
  box-shadow: 0 4px 8px #000;
  cursor: pointer;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: 1vw;
}

.btn-proj:hover {
  background-color: #8b8b8b;
  color: #0D0E0E;
  transform: translateY(-2px);
}

.btn-icon {
  width: 1.5vw;
  filter: brightness(0) invert(1);
}

.btn-proj:hover .btn-icon {
  filter: grayscale(100%) brightness(0.1);
}

/* Responsive Mode */
@media (min-width: 1200px) {
  .proj-text h5 {
    font-size: 1vw;
  }

  .proj-text h1 {
    font-size: 2.2vw;
  }

  .proj-text h3 {
    font-size: 1.2vw;
  }

  .card p {
    font-size: 1vw;
  }
}

@media (max-width: 768px) {
  #section-projects {
    margin-bottom: 5vw;
  }

  .myproj {
    padding-top: 7vw;
  }

  .proj-text h5 {
    font-size: 1rem;
  }

  .proj-text h1 {
    font-size: 1.8rem;
  }

  .proj-text h3 {
    font-size: 1rem;
  }

  .cards-container {
    gap: 30px;
    align-content: center;
  }

  .card {
    width: 35vw;
    max-width: none;
  }

  .card h5 {
    font-size: 14px;
  }

  .card h1 {
    font-size: 20px;
  }

  .card p {
    font-size: 14px;
  }

  .btn-proj {
    padding: 8px 20px;
    font-size: 14px;
  }

  .btn-icon {
    width: 20px;
  }

}
</style>
