import React from "react";
import "../styles/SocialBar.css";

const SocialBar = () => {
  return (
    <div className="social-bar">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/nvrro_jn/"
        target="_blank"
        rel="noopener noreferrer"
        className="socialContainer containerOne"
      >
        <svg className="socialSvg" viewBox="0 0 16 16" width="20" height="20">
          <path d="M8 0C5.8 0 5.5.01 4.7.05 3.9.09 3.3.22 2.8.42a3.9 3.9 0 0 0-1.4.92A3.9 3.9 0 0 0 .4 2.8C.2 3.3.09 3.9.05 4.7.01 5.5 0 5.8 0 8s.01 2.5.05 3.3c.04.8.17 1.4.37 1.9.2.5.48.97.92 1.4.45.44.89.72 1.4.92.5.2 1.1.33 1.9.37C5.5 15.99 5.8 16 8 16s2.5-.01 3.3-.05c.8-.04 1.4-.17 1.9-.37.5-.2.97-.48 1.4-.92.44-.45.72-.89.92-1.4.2-.5.33-1.1.37-1.9.04-.8.05-1.1.05-3.3s-.01-2.5-.05-3.3c-.04-.8-.17-1.4-.37-1.9a3.9 3.9 0 0 0-.92-1.4A3.9 3.9 0 0 0 13.2.4c-.5-.2-1.1-.33-1.9-.37C10.5.01 10.2 0 8 0zM8 3.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2zm4.99-1.13a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92z" />
        </svg>
      </a>

      {/* X (formerly Twitter) */}
      <a
        href="https://x.com/nvrro_jn"
        target="_blank"
        rel="noopener noreferrer"
        className="socialContainer containerTwo"
      >
        <svg className="socialSvg" viewBox="0 0 16 16" width="20" height="20">
          <path d="M3.2 0h2.1l3.5 5.4L12.5 0H16l-5.4 7.6L16 16h-3.2l-3.8-5.8L4.6 16H0l5.8-8.2L0 0h3.2l3.6 5.5L10.4 0z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jin-navarro-26326928b/"
        target="_blank"
        rel="noopener noreferrer"
        className="socialContainer containerThree"
      >
        <svg className="socialSvg" viewBox="0 0 16 16" width="20" height="20">
          <path d="M1.1 5.3H3V15H1.1V5.3zM2 1.3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM5.3 5.3h1.8v1.3h.1c.3-.6 1.1-1.3 2.3-1.3 2.5 0 3 1.6 3 3.7V15h-1.9V9.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V15H5.3V5.3z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/nvrrojn/"
        target="_blank"
        rel="noopener noreferrer"
        className="socialContainer containerFour"
      >
        <svg className="socialSvg" viewBox="0 0 16 16" width="20" height="20">
          <path d="M10.7 2.2H12V0H9.9C8 0 7.3 1.2 7.3 2.6v1.6H6V7h1.3v9h2.6V7h1.8l.3-2.8h-2.1V2.8c0-.4.1-.6.8-.6z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialBar;