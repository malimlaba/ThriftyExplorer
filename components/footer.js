class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #4a5568;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(45deg, #A7C7E7, #C3B1E1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .footer-description {
          color: #cbd5e0;
          margin-bottom: 1.5rem;
        }
        .footer-heading {
          font-weight: 600;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          color: #cbd5e0;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: #A7C7E7;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-link {
          color: white;
          transition: color 0.3s;
        }
        .social-link:hover {
          color: #A7C7E7;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #718096;
          color: #cbd5e0;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div>
            <div class="footer-logo">WanderWhimsy</div>
            <p class="footer-description">Discover the soul of the city through our curated travel guides and local insights.</p>
            <div class="social-links">
              <a href="#" class="social-link"><i data-feather="instagram"></i></a>
              <a href="#" class="social-link"><i data-feather="twitter"></i></a>
              <a href="#" class="social-link"><i data-feather="facebook"></i></a>
              <a href="#" class="social-link"><{"ok":false,"message":"terminated"}