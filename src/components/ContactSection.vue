<template>
  <section id="section-contact">
    <div class="contact-container">
      <div class="contact-box">
        <div class="text-content">
          <p class="title">
            Interested in working together?
          </p>
          <p class="subtitle">
            You can contact me or start a chat!
          </p>
        </div>
        <router-link to="/contact" class="contact-button">
          Hit Me Up
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  methods: {
    goToContact() {
      this.$router.push("/contact"); // Arahkan ke halaman ContactViewPage
    }
  }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: #0D0E0E;
  margin-top: 8vw;
}

.contact-box {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10vw;
  padding: 1vw;
  border: 1px solid #0D0E0E;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.811);
  background-color: #eeedf4;
  margin-top: -6.5vw;
}

.text-content {
  text-align: center;
}

.title {
  font-size: 1.2vw;
  margin: 0;
  margin-top: 1vw;
  margin-bottom: 0.5vw;
  margin-left: 1vw;
}

.subtitle {
  font-size: 1.2vw;
  color: #000000;
  margin: 0;
  margin-bottom: 1vw;
  margin-left: 1vw;
}

.contact-button {
  background-color: #eeedf4;
  border: 1px solid #0D0E0E;
  border-radius: 15px;
  width: 8vw;
  text-align: center;
  padding: 10px 20px 10px 20px;
  font-size: 1vw;
  font-weight: bold;
  color: #000;
  text-decoration: none; 
  cursor: pointer;
  margin-right: 2vw;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.contact-button:hover {
  background-color: #000;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>