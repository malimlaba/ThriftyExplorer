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
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
          padding: 0.5rem;
        }
        .icon {
          width: 20px;
          height: 20px;
          stroke: currentColor;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
          }
          ul {
            display: none;
            flex-direction: column;
            width: 100%;
            margin-top: 1rem;
            gap: 1rem;
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
          a {
            padding: 0.5rem 0;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">ThrifyExplorers</a>
        <button class="mobile-menu-btn">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <ul>
          <li>
            <a href="/" class="active">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Destinations
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Categories
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              About
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contact
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              Search
            </a>
          </li>
        </ul>
      </nav>
    `;
    
    // Mobile menu toggle functionality
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');
    
    if (menuBtn && menu) {
      menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        
        // Update menu icon based on state
        const menuIcon = menuBtn.querySelector('.icon');
        if (menu.classList.contains('open')) {
          menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
        } else {
          menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        }
      });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
