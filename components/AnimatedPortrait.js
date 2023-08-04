import { motion, useTransform, useScroll } from "framer-motion";

export default function AnimatedPortrait() {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const imageVariants = {
        hidden: { opacity: 0, y: "100vh" },
        visible: { opacity: 1, y: "50px" } 
    };

    return (
        <div className="flex justify-center items-end w-full">
            <motion.img
                variants={imageVariants}
                transition={{ duration: 1 }}
                style={{ rotate }}
                className="h-64 w-auto rounded-lg"
                src="/images/portrait.jpg"
                alt="Your Portrait"
            />
        </div>
    );
}