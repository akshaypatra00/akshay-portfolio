import { useState, useEffect, memo, useCallback } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    
    const isScrolled = window.scrollY > 10;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Akshay patra
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default memo(NavBar);
