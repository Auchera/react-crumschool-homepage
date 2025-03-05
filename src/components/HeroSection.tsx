import React from "react";
import { motion } from "framer-motion";
import FlipCard from "./FlipCard";

const HeroSection: React.FC = () => {
    const scrollToCourses = () => {
        const target = document.getElementById("coursess");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    type BackContentItem = {
        text: string;
        isTitle: boolean;
        color: string;
    };

    type CardData = {
        icon: string;
        title: string;
        frontDescTitle: string;
        frontDescText: string;
        backContent: BackContentItem[];
        backBgcolor: string;
    };

    const cards: CardData[] = [
        {
            icon: "🧠",
            title: "Çoklu Zeka Testi",
            frontDescTitle: "Her Çocuk Farklıdır, Zekasını Doğru Keşfedin!",
            frontDescText: `
                Çocuğunuzun hangi zeka türüne sahip olduğunu bilimsel testlerle keşfedin.
                Akademik, sanatsal ve sosyal becerilerini analiz ederek kapsamlı bir profil çıkarıyoruz.
            `,
            backContent: [
                { text: "Çoklu Zeka Testi Nedir?", isTitle: true, color: "white" },
                { text: "Her çocuk farklıdır ve farklı şekillerde öğrenir. Sözel, sayısal, görsel, bedensel, müzikal ve sosyal zekası analiz edilerek güçlü ve gelişime açık yönleri belirlenir.", isTitle: false, color: "white" },
                { text: "Neden Önemli?", isTitle: true, color: "white" },
                { text: "Çocuğun potansiyelini bilimsel olarak keşfetmenizi sağlar.", isTitle: false, color: "white" },
                { text: "Ölçülen Zeka Türleri:", isTitle: true, color: "white" },
                { text: "Sözel, Sayısal, Görsel, Bedensel, Müzikal, Sosyal, İçsel.", isTitle: false, color: "white" }
            ],
            backBgcolor: "#233142",
        },
        {
            icon: "📚",
            title: "Öğrenme Stilleri Testi",
            frontDescTitle: "Doğru Yöntemi Bilen, Başarıya Daha Yakın!",
            frontDescText: `
                Çocuğunuzun nasıl daha iyi öğrendiğini tespit edip, en uygun öğrenme tekniklerini sunuyoruz.
            `,
            backContent: [
                { text: "Öğrenme Stilleri Testi Nedir?", isTitle: true, color: "white" },
                { text: "Görerek mi, dinleyerek mi, yaparak mı öğreniyor? Doğru öğrenme stilini belirleyip ona uygun yöntemleri öneriyoruz.", isTitle: false, color: "white" },
                { text: "Neden Önemli?", isTitle: true, color: "white" },
                { text: "Doğru stil ile çalışmak akademik başarıyı artırır.", isTitle: false, color: "white" },
                { text: "Öğrenme Stilleri:", isTitle: true, color: "white" },
                { text: "Görsel (görsellerle), İşitsel (dinleyerek), Kinestetik (yaparak).", isTitle: false, color: "white" }
            ],
            backBgcolor: "#5c5470"
        },
        {
            icon: "🎯",
            title: "Motto İlgi ve Yetenek Testi",
            frontDescTitle: "İlgi Alanları ve Yetenekleri Geleceğe Yön Versin!",
            frontDescText: `
                Akademik ve kişisel ilgi alanlarını analiz ederek,
                çocuğunuzun potansiyeline uygun kariyer rotasını birlikte belirliyoruz.
            `,
            backContent: [
                { text: "Motto İlgi ve Yetenek Testi Nedir?", isTitle: true, color: "white" },
                { text: "Akademik ve kişisel ilgi alanlarını analiz ederek güçlü bir kariyer rehberliği sunuyoruz.", isTitle: false, color: "white" },
                { text: "Neden Önemli?", isTitle: true, color: "white" },
                { text: "İlgi ve yetenekleri doğru tanımak gelecekte doğru kararlar vermesini sağlar.", isTitle: false, color: "white" },
                { text: "Analiz Edilen Alanlar:", isTitle: true, color: "white" },
                { text: "Akademik eğilimler, kişisel hobiler, güçlü-zayıf yönler, kariyer eğilimleri.", isTitle: false, color: "white" }
            ],
            backBgcolor: "#023020",
        }
    ];

    return (
        <section
            className="relative min-h-screen py-12 flex flex-col justify-center items-center text-white text-center overflow-hidden"
            style={{
                backgroundImage: "url('/images/bgmain.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 space-y-4 max-w-4xl mx-auto px-4">
                <motion.h1 className="text-3xl mt-5 sm:text-5xl font-extrabold tracking-wide leading-tight">
                    Geleceğinizi <span className="text-orange-500 underline">AKEM</span> ile İnşa Edin
                </motion.h1>
                <motion.p className="text-base sm:text-m mb-4">
                    PDR testlerimiz ile potansiyelinizi öğrenip geleceğe yön verin. Test sonuçlarını analiz edip, en uygun kariyer rotanızı birlikte belirliyoruz.
                </motion.p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {cards.map((card, index) => (
                    <FlipCard key={index} card={card} />
                ))}
            </div>

            <motion.button
                onClick={scrollToCourses}
                className="relative border border-white bg-gray-900 text-white font-bold uppercase tracking-wide overflow-hidden group 
                           text-xs sm:text-sm 
                           h-8 sm:h-9 
                           px-3 sm:px-4 
                           rounded-md shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                }}
            >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-700 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                <span className="relative z-10">Hemen Teste Başla</span>
            </motion.button>
        </section>
    );
};

export default HeroSection;
