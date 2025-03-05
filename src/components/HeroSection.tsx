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

    const cards = [
        {
            icon: "🧠",
            title: "Çoklu Zeka Testi",
            frontDescTitle: "Her Çocuk Farklıdır, Zekasını Doğru Keşfedin!",
            frontDescText: `
                Çocuğunuzun hangi zeka türüne sahip olduğunu bilimsel testlerle keşfedin.
                Akademik, sanatsal ve sosyal becerilerini analiz ederek kapsamlı bir profil çıkarıyoruz.
            `,
            backContent: `
                <strong>Çoklu Zeka Testi Nedir?</strong><br/>
                Her çocuk farklıdır ve farklı şekillerde öğrenir. Sözel, sayısal, görsel, bedensel, müzikal ve sosyal zekası analiz edilerek güçlü ve gelişime açık yönleri belirlenir.
                <br/><br/>
                <strong>Neden Önemli?</strong><br/>
                Çocuğun potansiyelini bilimsel olarak keşfetmenizi sağlar.
                <br/><br/>
                <strong>Ölçülen Zeka Türleri:</strong><br/>
                Sözel, Sayısal, Görsel, Bedensel, Müzikal, Sosyal, İçsel.
            `
        },
        {
            icon: "📚",
            title: "Öğrenme Stilleri Testi",
            frontDescTitle: "Doğru Yöntemi Bilen, Başarıya Daha Yakın!",
            frontDescText: `
                Çocuğunuzun nasıl daha iyi öğrendiğini tespit edip, en uygun öğrenme tekniklerini sunuyoruz.
                Görerek mi, dinleyerek mi, yaparak mı öğreniyor?
            `,
            backContent: `
                <strong>Öğrenme Stilleri Testi Nedir?</strong><br/>
                Görerek mi, dinleyerek mi, yaparak mı öğreniyor? Doğru öğrenme stilini belirleyip ona uygun yöntemleri öneriyoruz.
                <br/><br/>
                <strong>Neden Önemli?</strong><br/>
                Doğru stil ile çalışmak akademik başarıyı artırır.
                <br/><br/>
                <strong>Öğrenme Stilleri:</strong><br/>
                Görsel (görsellerle), İşitsel (dinleyerek), Kinestetik (yaparak).
            `
        },
        {
            icon: "🎯",
            title: "Motto İlgi ve Yetenek Testi",
            frontDescTitle: "İlgi Alanları ve Yetenekleri Geleceğe Yön Versin!",
            frontDescText: `
                Akademik ve kişisel ilgi alanlarını analiz ederek,
                çocuğunuzun potansiyeline uygun kariyer rotasını birlikte belirliyoruz.
            `,
            backContent: `
                <strong>Motto İlgi ve Yetenek Testi Nedir?</strong><br/>
                Akademik ve kişisel ilgi alanlarını analiz ederek güçlü bir kariyer rehberliği sunuyoruz.
                <br/><br/>
                <strong>Neden Önemli?</strong><br/>
                İlgi ve yetenekleri doğru tanımak gelecekte doğru kararlar vermesini sağlar.
                <br/><br/>
                <strong>Analiz Edilen Alanlar:</strong><br/>
                Akademik eğilimler, kişisel hobiler, güçlü-zayıf yönler, kariyer eğilimleri.
            `
        }
    ];
    

    return (
        <section
    className="relative min-h-screen py-12 flex flex-col justify-center items-center text-white text-center overflow-hidden bg-cover bg-center space-y-8"
    style={{ backgroundImage: "url('/images/bgmain.jpg')" }}
>
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    <div className="relative z-10 space-y-4 max-w-4xl mx-auto px-4">
        <motion.h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide leading-tight">
            Geleceğinizi <span className="text-orange-500 underline">AKEM</span> ile İnşa Edin
        </motion.h1>
        <motion.p className="text-base sm:text-lg">
            PDR testlerimiz ile potansiyelinizi öğrenip geleceğe yön verin.
        </motion.p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {cards.map((card, index) => (
            <FlipCard key={index} card={card} />
        ))}
    </div>

    <motion.button
    onClick={scrollToCourses}
    className="relative border border-white bg-gray-900 text-white font-bold uppercase tracking-wide overflow-hidden group mt-4
               text-xs sm:text-sm md:text-base
               h-8 sm:h-10 md:h-12
               px-4 sm:px-6 md:px-8
               rounded-md sm:rounded-lg shadow-lg"
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
