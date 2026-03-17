import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
    onComplete: () => void;
    key?: string;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 800);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 5) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 80);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1A4228]"
            >
                {/* Central Logo Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center space-y-8"
                >
                    <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 animate-gold-glow">
                        <div className="border border-noir-gold/30 rounded-full w-full h-full flex items-center justify-center p-8">
                            <div className="text-center">
                                <img src="/logo.png" alt="Logo" width={250} className="mx-auto mb-4" />
                                {/* <h1 className="text-noir-gold font-serif tracking-[0.3em] uppercase text-3xl md:text-4xl mb-1">
                                    Chambers
                                </h1> */}
                                {/* <div className="w-16 h-[1px] bg-noir-gold/40 mx-auto my-4" />
                                <p className="text-noir-gold-light/80 text-xs md:text-sm tracking-[0.5em] uppercase font-light">
                                    of Potions
                                </p> */}
                            </div>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="font-serif italic text-noir-gold-light/40 text-lg tracking-wide"
                    >
                        Refining the evening...
                    </motion.p>
                </motion.div>

                {/* Bottom Progress Section */}
                <div className="absolute bottom-16 w-[100%] max-w-[80%] px-10">
                    <div className="h-[1px] w-full bg-white/80 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-noir-gold"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                    <div className="mt-6 flex justify-between items-center font-serif text-[20px] uppercase tracking-[0.3em] text-noir-gold/40">
                        <span>Est. 2024</span>
                        <span>{progress}%</span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
