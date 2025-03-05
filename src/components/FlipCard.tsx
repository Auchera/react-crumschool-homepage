import React, { useState } from "react";
import { motion } from "framer-motion";

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
    backBgcolor: string,
};

const FlipCard: React.FC<{ card: CardData }> = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="perspective-1000 w-full sm:w-[300px] h-[420px] mx-auto">
            <motion.div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >

                <div className="absolute inset-0 bg-gray-100 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-start items-center text-center p-5 space-y-5 backface-hidden">
                    <div className="text-6xl">{card.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                    <p className="text-base font-medium text-gray-600">{card.frontDescTitle}</p>
                    <p className="text-sm text-gray-700">{card.frontDescText}</p>
                    <div className="flex-grow"></div>
                    <button
                        className="bg-orange-500 text-white text-sm py-2 px-4 rounded-md font-semibold hover:bg-orange-600 transition"
                        onClick={() => setIsFlipped(true)}
                    >
                        Detayları Görüntüle
                    </button>
                </div>


                <div
    className="absolute inset-0 text-white rounded-lg shadow-lg flex flex-col justify-between items-center text-center p-5 rotateY-180 backface-hidden"
    style={{ backgroundColor: card.backBgcolor }}
>
    <h3 className="text-lg font-bold text-orange-400">{card.title} Detayları</h3>
    <div className="text-left text-xs leading-relaxed space-y-2 overflow-y-auto max-h-[300px] w-full">
        {card.backContent.map((item, index) => (
            <p
                key={index}
                className={`w-full ${item.isTitle ? "font-bold" : ""}`}
                style={{ color: item.color }}
            >
                {item.text}
            </p>
        ))}
    </div>
    <button
        className="mt-2 bg-orange-500 text-white text-xs py-2 px-3 rounded-md font-semibold hover:bg-orange-600 transition"
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
