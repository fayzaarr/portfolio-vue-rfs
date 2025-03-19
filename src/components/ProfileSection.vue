<template>
  <section id="section-profile" class="sec-prof">
    <div class="profile-container">
      <div class="aboutme">
        <div class="prof-text">
          <h5>A little bit</h5>
          <div class="about-container">
            <h1>about me.</h1>
            <a
              href="https://drive.google.com/drive/folders/1aIGHtvcW6_dolvHcm-lbacQD600yWmn1?usp=sharing"
              target="_blank"
            >
              <img src="@/assets/icon/resume.png" alt="cv" class="cvbutton">
            </a>
          </div>
          <p>
            Hello! My name is
            <span class="highlight">Rifasya Ayu Nurfayza</span>. I am a recent
            graduate with a Bachelor's degree in Informatics, based in
            Indonesia. Eager to enhance my expertise in
            <span>UI/UX design</span>, <span>frontend developer</span>, and
            <span>machine & deep learning</span>. As a detail-oriented
            individual, I am dedicated to creating
            <span>user-friendly systems</span> by transforming designs into
            efficient, responsive code while staying updated on modern
            technologies.
          </p>
        </div>
        <div class="prof-image">
          <img :src="imageUrl" alt="Profile Picture">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "https://res.cloudinary.com/dwpf6qqtm/image/upload/v1742352631/prof2-edit_byzgjd.jpg"
    };
  }
};
</script>
  
<style scoped>
/* Section Profile */
#section-profile {
    position: relative; 
    color: #eeedf4; 
    padding-left: 2vw;
    padding-right: 2vw;

}
.sec-prof {
    background-color: #0D0E0E;
    color: #eeedf4;
    padding-top: 5vh;
    padding-bottom: 10vh;
}

.profile-container {
    width: 70%;
    margin: auto;
}

.aboutme {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2vw;
}

.prof-text {
    padding-top: 50px;
}

.prof-text h5 {
    font-size: 2vh;
    margin: 0;
    line-height: 1.2;
    opacity: 0.60; 
    z-index: -1; 
}

.prof-text .about-container {
    display: flex; 
    align-items: center; 
    gap: 10px; 
}

.prof-text .cvbutton {
    width: 40px; 
    height: 40px;
    cursor: pointer; 
}

.prof-text .cvbutton:hover {
    transform: scale(1.2);
}

.prof-text h1 {
    color: #5CA1E5;
    font-size: 4vh;
    margin: 0;
}

.prof-text p {
    font-size: 2.3vh;
    line-height: 1.5;
    margin-bottom: 20px;
}

.prof-text p span {
    font-weight: bold;
    color: #5CA1E5;
}

.prof-text h4 {
    font-size: 2.3vh;
    margin: 0;
    padding-bottom: 5px;
    font-weight: normal;
}

.prof-image img {
    width: 20vw;
    height: 25vw;
    border-radius: 35%;
    object-fit: cover;
    border: 2px solid #eeedf4;
    margin-top: 20px;
    margin-right: 40px;
}
</style>
  