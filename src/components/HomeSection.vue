<template>
  <section id="section-home">
    <header class="secHome">
      <h1>Hello! Rifasya Here.</h1>
      <p>—A Passionate UI/UX Designer, Junior Frontend Developer, and Machine & Deep Learning Enthusiast!</p>
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
  
<style scoped>
/* CSS dari Home Section */
#section-home {
    position: relative; 
    width: 100%;
    height: 34vw;
    display: flex;
    color: #ffffff; 
    overflow: hidden; 
    font-weight: lighter;
}

#section-home::before {
    content: '';
    background: url(@/assets/images/banner1.png) no-repeat center center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.11; 
    z-index: -1; 
}
  
.secHome h1 {
    font-size: 3.8vw;
    font-weight: bold;
    color: #0D0E0E;
    z-index: 1;
    padding-left: 80px;
    padding-top: 9vw;
    padding-bottom: 44px;
    margin: 0px;
}

.secHome p {
    font-size: 1.5vw;
    color: #0D0E0E; 
    z-index: 1; 
    padding-left: 80px;
    margin: 0px;
}

.secHome p span{
    font-weight: 700;
}
  
/* Social Media Links */
.social-links {
    position: absolute;
    bottom: 1vw;
    right: 60px;
    display: flex;
    gap: 20px;        
}

.social-links a {
    display: inline-block;
}

.social-links img {
    width: 2.3vw;
    height: auto;
    transition: transform 0.3s ease;
}

.social-links img:hover {
    transform: scale(1.2); 
}
</style>
  