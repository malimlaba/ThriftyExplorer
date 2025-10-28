class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        }
        .logo {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(45deg, #A7C7E7, #C3B1E1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: #4a5568;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        a:hover {
          color: #A7C7E7;
        }
        a.active {
          color: #A7C7E7;
        }
        a.active:after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #A7C7E7;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #4a5568;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            align-items: flex-start;
          }
          ul {
            display: none;
            flex-direction: column;
            width: 100%;
            margin-top: 1rem;
          }
          ul.open {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
            position: absolute;
            right: 1rem;
            top: 1rem;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">ThrifyExplorers</a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="/" class="active">Home</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#"><i data-feather="search"></i></a></li>
        </ul>
      </nav>
    `;
    
    // Mobile menu toggle functionality
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');
    
    if (menuBtn && menu) {
      menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        feather.replace();
      });
    }
  }
}
customElements.define('custom-navbar', CustomNavbar);