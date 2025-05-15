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
  max-width: 70%;
  margin: auto;
  padding: 2rem 1rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logo {
  width: 7vw;
}

.back-button {
  padding: 0.5rem 1.5rem;
  background-color: #0D0E0E;
  color: #eeedf4;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #444;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.input-field {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  text-align: left;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.95rem;
}

input,
select,
textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Quicksand', sans-serif;
  background-color: #fff;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: #0D0E0E;
  color: white;
  padding: 0.75rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 10px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #444;
}

/* ======================== Responsive ======================== */

@media screen and (min-width: 1200px) {
  .logo {
    width: 7vw;
  }

  .back-button {
    font-size: 1rem;
    padding: 10px 20px;
    width: auto;
  }

  h2 {
    font-size: 2rem;
  }

  label {
    font-size: 1rem;
  }

  input,
  select,
  textarea {
    font-size: 1.1rem;
  }

  .submit-button {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 768px) {
  .contact-container {
    padding: 1.5rem 1rem;
  }

  header {
    gap: 1rem;
  }

  .input-group {
    flex-direction: column;
    gap: 1rem;
  }

  .logo {
    width: 70px;
  }

  .back-button {
    width: 25%;
    font-size: 0.7rem;
  }

  h2 {
    font-size: 1rem;
  }

  label {
    font-size: 0.9rem;
  }

  input,
  select,
  textarea {
    font-size: 1rem;
  }

  .submit-button {
    font-size: 1rem;
  }
}

</style>
