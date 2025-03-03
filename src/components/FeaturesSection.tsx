import React, { useEffect, useRef, useState } from "react";

const FeaturesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-[80vh] bg-cover bg-center flex items-center"
            style={{ backgroundAttachment: "fixed" }}
        >
            <div className="max-w-7xl mx-auto flex items-center space-x-12 px-6">
                <img src="/images/feature.jpg" alt="Features" className="w-1/2 h-auto object-cover rounded-lg shadow-lg" />

                
                <div className={`w-1/2 fade-in-left ${isVisible ? "show" : ""}`}>
                    <h2 className="text-4xl font-bold text-orange-600 mb-6">⚡ AKEM'in Sunduğu Avantajlar</h2>
                    <p className="text-2xl text-gray-900 underline mb-6">Çocuğunuzu Geleceğe Hazırlıyoruz</p>
                    <ul className="space-y-3 text-gray-900 text-lg">
                        <li>✅ Her öğrenciye özel kişiselleştirilmiş danışmanlık hizmeti sunuyoruz.</li>
                        <li>✅ Bilimsel testler ve detaylı analizlerle güçlü yönleri ortaya çıkarıyoruz.</li>
                        <li>✅ Gelişim raporları ve ilerleme takip sistemiyle aileleri bilgilendiriyoruz.</li>
                        <li>✅ Meslek seçimi ve kariyer planlamasında doğru yönlendirme sağlıyoruz.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
