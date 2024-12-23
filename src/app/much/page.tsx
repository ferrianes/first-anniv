"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import ThreeDPhotoCarousel from "@/components/ui/three-d-carousel";

export default function Page() {
    return (
        <HeroHighlight>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl font-bold text-rose-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
                Hehe ada sedikit kejutan buat istri akuu, <br /> semoga sukakk yaa 😁
                <ThreeDPhotoCarousel />
            </motion.div>
        </HeroHighlight>
    );
}
