<template>
  <section id="section-profile" class="sec-prof">
    <div class="profile-container">
      <div class="about-container">
        <div class="desc-prof">
          <h5>A little bit</h5>
          <h1>about me.</h1>
          <p>
            Hello! I'm
            <span class="highlight">Rifasya Ayu Nurfayza</span>, you can call me as <span>Rifasya</span>. <span>Informatics fresh graduate</span> from Indonesia. I’m really passionate about <span>frontend development</span>, <span>UI/UX design</span>, 
            and a bit of <span>AI engineering</span> too. I love turning ideas into <span>clean, responsive websites</span> that are nice to use and easy to look at. With hands-on <span>experience</span> in <span>machine and deep learning</span>, 
            I <span>developed a real-time face recognition-based attendance system</span> that combines AI with intuitive design. <br><br>
            
            Besides tech stuff, I also work as a <span>freelance social media assistant—mostly creating Instagram content</span> that helps brands connect with people. I do some <span>video editing</span> as well to support digital content, and it's a skill I'm actively 
            growing as I go.<br><br>
            You can check out my CV by clicking the button below!
          </p>
          <a
            href="https://drive.google.com/drive/folders/1aIGHtvcW6_dolvHcm-lbacQD600yWmn1?usp=sharing" 
            target="_blank" 
            class="cvbutton"
          >
            CV
          </a>
        </div>
        <img :src="imageUrl" alt="Profile Picture" class="prof-image">
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
}

.sec-prof {
  background-color: #0D0E0E;
  color: #eeedf4;
  padding-top: 5rem;
  padding-bottom: 9rem;
}

.profile-container {
  width: 90%;
  margin: auto;
}

.about-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  flex-wrap: wrap;
}

.desc-prof {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
}

h5 {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
  opacity: 0.60;
}

h1 {
  color: #5CA1E5;
  font-size: clamp(1rem, 2.5vw, 2.5rem);
  margin: 0.5rem 0;
}

p {
  flex: 1;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: justify;
}

p span {
  font-weight: bold;
  color: #5CA1E5;
}

.cvbutton {
  display: inline-block;
  padding: 7px 17px;
  background-color: #007BFF;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  align-self: flex-start;
}

.cvbutton:hover {
  background-color: #007BFF;
  transform: scale(1.1);
}

.prof-image {
  flex: 0 0 25%;
  max-width: 20vw;
  width: 100%;
  height: auto;
  border-radius: 30%;
  object-fit: cover;
  border: 2px solid #eeedf4;
}

/* Responsive Mode */
@media screen and (min-width: 1200px) {
  .profile-container {
    width: 68%;
  }

  h5 {
    font-size: 1.3rem;
  }

  h1 {
    font-size: 2vw;
  }

  p {
    font-size: 1.1vw;
  }

  .cvbutton {
    padding: 10px 20px;
    font-size: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .about-container {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .desc-prof {
    align-items: center;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .prof-image {
    max-width: 50vw;
  }

  .cvbutton {
    align-self: center;
  }
}

</style>
