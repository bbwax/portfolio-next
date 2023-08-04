import { motion } from 'framer-motion';
import AnimatedPortrait from './AnimatedPortrait';

export default function AnimatedText() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 1
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col justify-between items-center min-h-screen py-24">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full flex-grow flex flex-col items-center space-y-10"
            >
                <motion.p
                    variants={textVariants}
                    className="self-center text-6xl sm:text-8xl text-white"
                >
                    Welcome!
                </motion.p>
                <motion.p
                    variants={textVariants}
                    className="text-4xl sm:text-6xl text-white sm:ml-10"
                >
                    I'm Braxton,
                </motion.p>
                <motion.p
                    variants={textVariants}
                    className="text-4xl sm:text-6xl text-white sm:ml-20"
                >
                    a Software <br /> <span className="pl-8 sm:pl-16">Developer</span>
                </motion.p>
                <AnimatedPortrait/>
            </motion.div>
            
        </div>

    );
}