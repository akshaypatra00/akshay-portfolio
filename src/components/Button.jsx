import React from "react";

/**
 * A reusable CTA button component.
 * - If 'downloadUrl' prop is provided, it acts as a download link.
 * - If 'id' prop is provided, it scrolls to that ID.
 */
const Button = ({ text, className, id, downloadUrl }) => {
  // --- DOWNLOAD BUTTON LOGIC ---
  // If the downloadUrl prop is present, render a download link
  if (downloadUrl) {
    return (
      <a
        href={downloadUrl}
        download // This HTML attribute tells the browser to download the file
        className={`${className ?? ""} cta-wrapper`}
      >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        </div>
      </a>
    );
  }

  // --- SCROLL BUTTON LOGIC (Your existing code) ---
  // If no downloadUrl, it works as a scroll button
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly
        const target = document.getElementById("about"); // Hard-coded to "about"

        // Only scroll if we found the section and an ID is passed in
        if (target && id) {
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
