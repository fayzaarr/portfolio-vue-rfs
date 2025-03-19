<template>
  <div class="contact-container">
    <header>
      <img :src="logoNamaPutih" alt="Logo" class="logo">
      <button class="back-button" @click="$router.push('/')">
        BACK
      </button>
    </header>

    <h2>Curious to hear about your ideas.<br>Let’s collaborate!</h2>

    <form @submit.prevent="submitForm">
      <div class="input-group">
        <div class="input-field">
          <label for="name">Name:</label>
          <input id="name" v-model="formData.name" type="text" placeholder="Enter your name" required>
        </div>
        <div class="input-field">
          <label for="email">Email:</label>
          <input id="email" v-model="formData.email" type="email" placeholder="Enter your email" required>
        </div>
      </div>

      <div class="input-field">
        <label for="projectType">What Type of Project?</label>
        <select id="projectType" v-model="formData.projectType">
          <option value="" disabled>
            Select an Option
          </option>
          <option value="Design Project">
            Design Project
          </option>
          <option value="Website (Frontend) Project">
            Website (Frontend) Project
          </option>
          <option value="Machine & Deep Learning Project">
            Machine & Deep Learning Project
          </option>
        </select>
      </div>

      <div class="input-field">
        <label for="details">Details of Projects:</label>
        <textarea id="details" v-model="formData.details" placeholder="Write the details here" />
      </div>

      <button type="submit" class="submit-button">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
data() {
    return {
      logoNamaPutih: "https://res.cloudinary.com/dwpf6qqtm/image/upload/v1742352626/logonamaputih_qq5f6m.png",
      formData: {
          name: "",
          email: "",
          projectType: "",
          details: ""
      }
    };
},
methods: {
  async submitForm() {
    const formEndpoint = "https://formspree.io/f/mvgkobpd"; // Ganti dengan Formspree link kamu

    try {
        let response = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Email sent successfully!",
            timer: 3000,
            showConfirmButton: false,
          });
          this.formData = { name: "", email: "", projectType: "", details: "" };
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send email. Try again later.",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
    width: 60%;
    margin: auto;
    padding: 20px;
    text-align: center;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 7vw;     
}

.back-button {
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    margin-top: 0.5vw;
    width: 6vw;
    background-color: #0D0E0E;
    color: #eeedf4;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
}

.back-button:hover {
    background-color: #444;
}

h2 {
    font-size: 1.8vw;
    padding-top: 1vh;
    /* margin: 20px 0; */
    font-weight: bold;
}

label {
    text-align: left;
    font-size: 1.1vw;
    padding-bottom: 5px;
}

.input-group {
    display: flex;
    gap: 50px;
}

.input-field {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;
}

input, select, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;;
}

textarea {
    min-height: 25vh;
}

.submit-button {
    background: black;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 10px;
    width: 100%;
    margin-top: 10px;
}
</style>
