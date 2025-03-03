import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToTop = () => {
        const logo = document.getElementById("head");
        if (logo) {
            const offset = 80; 
            const y = logo.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  

    if (!showScrollTop) return null;  

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 text-5xl bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-700 transition-opacity duration-300 z-50"
        >
          ^
        </button>
    );
};

export default ScrollToTopButton;
