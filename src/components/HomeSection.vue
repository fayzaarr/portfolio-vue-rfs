<template>
  <section id="section-home">
    <header class="secHome">
      <h1>Hello! Rifasya Here.</h1>
      <p>— Tech & Creative Enthusiast: Frontend • UI/UX • AI Engineer • Video Editing • Social Media Assistant</p>
    </header>
  
    <!-- Social Media Links -->
    <div class="social-links">
      <a href="https://www.instagram.com/rfssyar_" target="_blank">
        <img src="@/assets/icon/instagram.png" alt="Instagram">
      </a>
      <a href="https://github.com/fayzaarr" target="_blank">
        <img src="@/assets/icon/github-sign.png" alt="Github">
      </a>
      <a href="https://www.linkedin.com/in/rifasyaanr/" target="_blank">
        <img src="@/assets/icon/linkedin.png" alt="LinkedIn">
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nurfayza.rr@gmail.com&su=Hello&body=I would like to reach out..." target="_blank">
        <img src="@/assets/icon/apple.png" alt="Email">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: "https://res.cloudinary.com/dwpf6qqtm/image/upload/v1742352626/banner1_dhpqj2.png"
    };
  }
};
</script>
  
<style scoped>

#section-home {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  width: 100%;
  min-height: 65vh;
  color: #0d0e0e;
  font-weight: lighter;
  overflow: hidden;
}

#section-home::before {
  content: '';
  background: url("https://res.cloudinary.com/dwpf6qqtm/image/upload/v1742352626/banner1_dhpqj2.png") no-repeat center center / cover;
  position: absolute;
  inset: 0;
  opacity: 0.11;
  z-index: -1;
}

.secHome h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 5rem;
  padding-left: 3vw;
}

.secHome p {
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  margin: 0;
  padding-left: 3vw;
}

.social-links {
  margin-top: 8rem;
  margin-right: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.social-links img {
  width: 2.3rem;
  transition: transform 0.3s ease;
}

.social-links img:hover {
  transform: scale(1.2);
}

/* Responsive Mode */

@media (min-width: 1200px) {
  #section-home {
    gap: 3rem;
  }

  .secHome h1 {
    font-size: clamp(3rem, 3.5vw, 5rem);
  }

  .secHome p {
    font-size: clamp(1.2rem, 1.5vw, 1.75rem);
  }

  .social-links {
    justify-content: flex-end;
    gap: 2rem;
  }

  .social-links img {
    width: 2.2vw;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  #section-home {
    gap: 2rem;
    min-height: 45vh;
  }

  .secHome h1 {
    text-align: center;
  }

  .secHome p {
    text-align: center;
    padding: 1vw;
  }

  .social-links {
    justify-content: center;
    margin-top: 0;
    margin-right: 0;
  }
}
</style>
  