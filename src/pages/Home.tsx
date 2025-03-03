import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ScrollToTopButton from "../components/ScrollToTopButton";


const cards = [
    { title: "Özel Yetenek Testi", subtitle: "8. Sınıf", image: "/images/course1.jpg" },
    { title: "Özel Yetenek Testi 2", subtitle: "7. Sınıf", image: "/images/course2.jpg" },
    { title: "Özel Yetenek Testi 3", subtitle: "6. Sınıf", image: "/images/course3.png" },
    { title: "Özel Yetenek Testi 4", subtitle: "5. Sınıf", image: "/images/course4.png" },
    { title: "Özel Yetenek Testi 5", subtitle: "4. Sınıf", image: "/images/course5.jpg" },
];

const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const swiperRef = useRef<any>(null);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* ------------------ Navbar ------------------*/}
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 relative">
                    <div className="flex items-center">
                        <img src="/images/logo.png" alt="Logo" className="h-10" />
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <span  className="text-xl font-bold text-gray-800 ">AKEM - Akademik Danışmanlık</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-800 hover:text-orange-500">Kurslar</a>
                        <button className="border border-orange-600 px-4 py-2 text-orange-600 rounded hover:bg-orange-600 hover:text-white">Giriş Yap</button>
                        <button className="border border-orange-600 px-4 py-2 text-white bg-orange-600 rounded hover:bg-white hover:text-orange-600">Kayıt Ol</button>
                    </div>
                </div>
            </nav>

             {/* ------------------ Hero ------------------*/}
            <div id="head" className="min-h-screen bg-gray-50 font-sans">
            <HeroSection />
        </div>

        <FeaturesSection /> 



 {/* ------------------ Course Cards ------------------*/}
<section className="relative bg-cover bg-center min-h-[100vh] flex flex-col justify-center items-center"
id="coursess"
    style={{
        backgroundImage: "url('/images/cards-bg.jpg')",
        backgroundAttachment: "fixed"
    }}
>
    <h2 className="text-5xl font-bold text-center  text-orange-600 mb-6">Popüler Kurslarımız</h2>
    <div className="relative w-[900px] flex items-center justify-center">

    <button
    className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-orange-600 text-white w-12 h-12 rounded-full shadow-lg z-50 hover:bg-orange-700 transition flex items-center justify-center"
    onClick={() => swiperRef.current?.swiper.slidePrev()} 
>
    <span className="text-3xl">{"‹"}</span> 
</button>

        <div className="relative w-full overflow-hidden">
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                slidesPerView={3}
                centeredSlides={true}
                slidesPerGroup={1}
                spaceBetween={20}
                loop={false}
                className="w-full"
                grabCursor={true}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                    <div
                        className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                        style={{
                            width: "260px",
                            height: "340px",
                            filter: hoveredIndex === index
                                ? "brightness(0.9)"
                                : hoveredIndex !== null
                                    ? "brightness(0.4)"
                                    : "brightness(1)",
                            boxShadow: hoveredIndex === index ? "0px 0px 26px white" : "none"
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-90 py-4 text-center">
                            <h3 className="text-xl font-bold text-orange-600">{card.title}</h3>
                            <p className="text-lg font-bold text-orange-600">{card.subtitle}</p>
                        </div>
                    </div>
                </SwiperSlide>
                
                
                ))}
            </Swiper>
        </div>

         {/* ------------------ Right Button ------------------*/}
        <button
    className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-orange-600 text-white w-12 h-12 rounded-full shadow-lg z-50 hover:bg-orange-700 transition flex items-center justify-center"
    onClick={() => swiperRef.current?.swiper.slideNext()} 
>
    <span className="text-3xl">{"›"}</span> 
</button>

    </div>

    <div className="mt-8">
    <button
        className="relative bg-gray-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg uppercase tracking-wide overflow-hidden group"
    >
        <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-700 scale-x-0 origin-left transition-transform duration-300  ease-out group-hover:scale-x-100 "></span>
        <span className="relative z-10">Tüm Kursları Görüntüle</span>
    </button>
</div>

</section>

 {/* ------------------ 2nd Features ------------------*/}
<section
    className="relative bg-cover bg-center py-36"
    style={{
        backgroundImage: "url('/images/footer-bg.jpg')",
        backgroundAttachment: "fixed",
    }}
>
   
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>


    <div className="relative z-10 text-center mb-12">
        <span className="inline-block bg-white text-gray-900 font-semibold py-2 px-6 rounded-full shadow">
            ⚡ Neden AKEM?
        </span>
        <h2 className="mt-6 text-4xl font-bold text-white">
            Geleceğinizi Bilimsel Verilerle <br />
            Şekillendiriyoruz
        </h2>
    </div>

    {/* 2nd Features - Card section */}
    <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-3 gap-8">
        {/* 1st */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-4xl text-orange-500 mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Kişiye Özel Danışmanlık</h3>
            <p className="text-gray-700">
                Öğrencinin ilgi alanları, becerileri ve akademik eğilimleri analiz edilerek tamamen kişiselleştirilmiş bir rehberlik hizmeti sunuyoruz.
            </p>
        </div>

        {/* 2nd */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-4xl text-orange-500 mb-4">📡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bilimsel Testler ve Raporlama</h3>
            <p className="text-gray-700">
                Alanında uzman ekibimiz tarafından uygulanan testlerle, öğrencinin güçlü ve gelişime açık yönlerini belirleyip detaylı raporlar hazırlıyoruz.
            </p>
        </div>

        {/* 3rd  */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-4xl text-orange-500 mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Doğru Mesleki Yönlendirme</h3>
            <p className="text-gray-700">
                Öğrencinin potansiyeline en uygun kariyer rotasını oluşturuyor ve geleceğe güvenle adım atmasını sağlıyoruz.
            </p>
        </div>
    </div>
</section>

 <ScrollToTopButton/>




  {/* ------------------ Footer ------------------*/}
  <footer 
    className="bg-white text-gray-900 py-8 relative"
>
    <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6">
        <div>
            <img src="/images/logo.png" alt="Logo" className="h-12 mb-4" />
            <p>+900000000</p>
            <p>info@akem.com</p>
        </div>
        <div>
            <h3 className="font-bold mb-3 text-orange-600">Kurumsal</h3>
            <p>Hakkımızda</p>
            <p>SSS</p>
            <p>İletişim</p>
        </div>
        <div>
            <h3 className="font-bold mb-3 text-orange-600">Programlar</h3>
            <p>Eğitimler</p>
            <p>Eğitmenler</p>
        </div>
        <div>
            <h3 className="font-bold mb-3 text-orange-600">Diğer</h3>
            <p>Makaleler</p>
            <p>Aydınlatma Metni</p>
            <p>KVKK Başvuru Formu</p>
            <p>Çerez Politikası</p>
            <p>Üyelik Sözleşmesi</p>
            <p>İptal & İade Koşulları</p>
        </div>
    </div>
    <p className="text-center mt-8">&copy; 2025 AKEM. Tüm Hakları Saklıdır</p>
</footer>
        </div>
    );
};
 

export default Home;
