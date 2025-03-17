<template>
  <div class="blank-cont" />
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
            title: "Project Design",
            description: "Creating Some Design, Like UI/UX Design and Logos or Icons",
          },
          {
            title: "Web Development",
            description: "Implement UI/UX Design into User-Friendly Websites",
          },
          {
            title: "ML & DL Development",
            description: "Develop Machine Learning & Deep Learning Models and Applications",
          },
        ],
      };
    },
  };
  </script>
  
<style scoped>
hr {
    border: none;
    height: 2px; /* Ketebalan garis */
    background-color: #000; /* Warna hitam */
    width: 90%; /* Biar nggak full lebar */
    margin: 10px auto; 
}

.blank-cont {
    background-color: #eeedf4;
    min-height: 35vw; /* Gunakan viewport height supaya fleksibel */
    max-height: 500px; /* Batas maksimal supaya tidak terlalu besar */
    padding: 3vw 0; 
    margin-top: 0;
}

/* Section Services */
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

/* Container untuk cards */
.card-services {
    display: flex;
    flex-wrap: wrap;
    gap: 5vw;
    justify-content: center;
    align-items: center;
    max-width: 1800px;
    margin: auto;
}

/* Card Styling */
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

/* Hover Effect */
.cont-services:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    background-color: #0D0E0E;
    border-color: #ffffff;
    color: #eeedf4;
}
  
  /* Responsive Design */
  /* @media screen and (max-width: 768px) {
    .bg-service {
      padding: 50px 20px;
    }
  
    .card-services {
      flex-direction: column;
      gap: 20px;
    }
  
    .cont-services {
      width: 90%;
    }
  } */
  </style>
  