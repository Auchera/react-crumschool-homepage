import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    const scrollToCourses = () => {
        const target = document.getElementById("coursess");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className="relative h-screen flex justify-center items-center text-white text-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/bgmain.jpg')"
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                <motion.h1
                    className="text-6xl font-extrabold tracking-wide"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Geleceğinizi <motion.span className="text-orange-600 inline-block"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
                    >AKEM</motion.span> ile İnşa Edin
                </motion.h1>

                <motion.p
                    className="text-xl leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                >
                    Potansiyelinizi keşfedin, geleceğinize yön verin.<br />
                    Çocuğunuzun yeteneklerini analiz ediyor, en uygun mesleki rotayı birlikte belirliyoruz.
                </motion.p>

                <motion.button
                    onClick={scrollToCourses}
                    className="relative bg-gray-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg uppercase tracking-wide overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)"
                    }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-700 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    <span className="relative z-10">Hemen Teste Başla</span>
                </motion.button>
            </div>
        </section>
    );
};

export default HeroSection;
