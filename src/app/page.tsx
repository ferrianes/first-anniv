"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

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
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-rose-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
                Happy 1st Anniversary Sayang!
                <br />
                <Highlight className="mt-2 text-rose-900 dark:text-white">
                    I&apos;ve Something Special For You 😁
                </Highlight>

                <button type="button" onClick={() => {
                    const audio = new Audio("/videoplayback.m4a");
                    audio.play();

                    router.push("/much");
                }}>
                    <AnimatedGradientText className="mt-8">
                        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                        <span
                            className={cn(
                                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                            )}
                        >
                            Tolong Dipencet yaa
                        </span>
                        <ChevronRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedGradientText>
                </button>
            </motion.div>
        </HeroHighlight>
    );
}
