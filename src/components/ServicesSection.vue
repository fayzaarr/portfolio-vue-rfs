<template>
  <hr>
  <section id="section-services" class="bg-service">
    <h1>Services</h1>
    <h5>What Can I Help You?</h5>
  
    <div class="card-services">
      <div v-for="(service, index) in services" :key="index" class="cont-services">
        <h1>{{ service.title }}</h1>
        <h4>{{ service.description }}</h4>
      </div>
    </div>
  </section>
</template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          {
            title: "Web Development",
            description: "Implement UI/UX Design into User-Friendly Websites",
          },
          {
            title: "Project Design",
            description: "Designing project like UI/UX and Logos or Icons",
          },
          {
            title: "AI Engineer",
            description: "Develop with Machine Learning & Deep Learning Models and Applications",
          },
          {
            title: "Social Media Assistant",
            description: "Assisting in designing content for social media to reach better engagement",
          },
          {
            title: "Video Editor",
            description: "Editing basic video content for various platforms to enhance engagement and reach",
          },
        ],
      };
    },
  };
  </script>
  
<style scoped>
hr {
    border: none;
    height: 2px;
    background-color: #000; 
    width: 90%; 
    margin: 10px auto; 
}

.bg-service {
    position: relative;
    background-color: #eeedf4;
    width: 100%;
    min-height: auto; 
    text-align: center;
}

.bg-service h1 {
    font-size: 2.5vw;
    font-weight: bold;
    margin-bottom: 1vw;
    margin-top: 1vw;
}

.bg-service h5 {
    font-size: 1.3rem;
    font-weight: bold;
    opacity: 0.6;
    margin-bottom: 30px;
    margin: 0;
}

.card-services {
    display: flex;
    flex-wrap: wrap;
    gap: 5vw;
    justify-content: center;
    align-items: center;
    max-width: 1800px;
    margin: auto;
}

.cont-services {
    background-color: #eeedf4;
    border-radius: 15px;
    border: 1px solid #000000;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);
    width: 20%;
    padding: 30px;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cont-services h1 {
    font-size: 1.6vw;
    margin-bottom: 10px;
}

.cont-services h4 {
    font-size: 1.1vw;
    font-weight: 400;
    opacity: 0.8;
}

.cont-services:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    background-color: #0D0E0E;
    border-color: #ffffff;
    color: #eeedf4;
}
  
/* Responsive Mode */
@media screen and (min-width: 1200px) {
  .cont-services {
    width: 28%; 
  }

  .cont-services h1 {
    font-size: 1.8vw;
  }

  .cont-services h4 {
    font-size: 1.3vw;
  }

  .bg-service h1 {
    font-size: 2.5vw;
  }

  .bg-service h5 {
    font-size: 1.2rem;
    padding-bottom: 1vw;
  }

  .card-services {
    padding-bottom: 3vw;
  }

  .card-services h1 {
    font-size: 1.5vw;
  }

  .card-services h4 {
    font-size: 1vw;
  }
}

@media screen and (max-width: 768px) {
  .card-services {
    gap: 20px;
    padding-bottom: 5vw;
  }

  .cont-services {
    width: 30%;
    padding: 20px;
  }

  .cont-services h1 {
    font-size: 1.2rem;
  }

  .cont-services h4 {
    font-size: 0.8rem;
  }

  .bg-service h1 {
    font-size: 1.7rem;
  }

  .bg-service h5 {
    font-size: 0.8rem;
  }

  .card-services h1 {
    font-size: 1.2rem;
  }
}
</style>
  