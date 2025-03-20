<template>
  <header class="mainHeader">
    <div class="logo" />
    <nav :class="{ active: isMenuOpen }">
      <a href="#section-home" @click.prevent="scrollToSection('section-home')">Home</a>
      <a href="#section-profile" @click.prevent="scrollToSection('section-profile')">About</a>
      <a href="#section-projects" @click.prevent="scrollToSection('section-projects')">Projects</a>
      <a href="#section-services" @click.prevent="scrollToSection('section-services')">Services</a>
      <a href="#section-contact" @click.prevent="scrollToSection('section-contact')">Contact</a>
    </nav>
    <div class="hamburger-menu" @click="toggleMenu">
      <span />
      <span />
      <span />
    </div>
  </header>
</template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
      scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        this.isMenuOpen = false; // Tutup menu setelah klik
      },
    }
  };
  </script>
  
  <style scoped>
  /* Styling Logo */
  .logo {
    height: 45px;
    width: 45px;
    background-image: url("https://res.cloudinary.com/dwpf6qqtm/image/upload/v1742352626/9RjhQp-LogoMakr_okz0kb.png");
    background-size: cover;
    background-position: center;
  }
  
  /* Header Styling */
  .mainHeader {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 20px;
    background-color: #eeedf4;
    z-index: 1000;
    transition: border-bottom 0.3s ease;
  }
  
  .mainHeader.scroll-border {
    border-bottom: 3px solid #636363;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  
  /* Navbar */
  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  nav > a {
    position: relative;
    padding: 5px 20px;
    color: #0D0E0E;
    text-decoration: none;
    border-radius: 30px;
    font-size: 0.9vw;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    overflow: hidden;
  }
  
  /* Efek garis bawah animasi */
  nav > a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    height: 2px;
    width: 100%;
    background-color: #383737;
    transition: transform 0.3s ease;
  }
  
  nav > a:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
  
  nav > a:hover {
    color: #0D0E0E;
    transform: scale(1.05);
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  /* Menu Aktif */
  nav > a.active {
    font-weight: 700;
    color: #383737;
  }
  
  /* Hamburger Menu (Mobile) */
  .hamburger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }
  
  .hamburger-menu span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #0D0E0E;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  /* Responsive Mode */
  @media screen and (max-width: 768px) {
    nav {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #eeedf4;
      padding: 10px 0;
    }
  
    nav.active {
      display: flex;
    }
  
    .hamburger-menu {
      display: flex;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
    }
  
    .hamburger-menu span {
      width: 25px;
      height: 3px;
      background-color: #0D0E0E;
      transition: 0.3s;
    }
  }
  </style>
  