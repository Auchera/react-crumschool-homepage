import React, { useState } from "react";
import { motion } from "framer-motion";

type CardData = {
    icon: string;
    title: string;
    frontDescTitle: string;
    frontDescText: string;
    backContent: string;
};

const FlipCard: React.FC<{ card: CardData }> = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="perspective-1000 w-[340px] h-[500px]">
            <motion.div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Ön Yüz */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg flex flex-col justify-start items-center text-center p-6 space-y-4 backface-hidden"
     style={{ boxShadow: "0 0 20px black" }}>

                    <div className="text-6xl mt-2">{card.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">{card.title}</h3>
                    <p className="text-lg font-bold text-gray-900 mt-4">{card.frontDescTitle}</p>
                    <p className="text-gray-700 text-sm">{card.frontDescText}</p>
                    <button
                        className="mt-auto bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition"
                        onClick={() => setIsFlipped(true)}
                    >
                        Detayları Görüntüle
                    </button>
                </div>

                {/* Arka Yüz */}
                <div className="absolute inset-0 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col justify-between items-center text-center p-6 rotateY-180 backface-hidden">
                    <h3 className="text-2xl font-bold text-orange-400">{card.title} Detayları</h3>
                    <div className="text-left text-sm leading-relaxed space-y-2 overflow-y-auto max-h-[360px]">
                        <div dangerouslySetInnerHTML={{ __html: card.backContent }} />
                    </div>
                    <button
                        className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition"
                        onClick={() => setIsFlipped(false)}
                    >
                        Geri Dön
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default FlipCard;
