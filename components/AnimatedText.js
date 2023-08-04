import { motion } from 'framer-motion';

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full pt-24"
    >
      <motion.p
        variants={textVariants}
        className="absolute text-6xl sm:text-8xl top-44 sm:top-28 left-16 sm:left-1/4 text-white "
      >
        Welcome!
      </motion.p>
      <motion.p
        variants={textVariants}
        className="absolute text-4xl sm:text-6xl top-1/3 sm:top-1/3 left-16 sm:left-1/3 text-white pl-10 "
      >
        I'm Braxton,
      </motion.p>
      <motion.p
        variants={textVariants}
        className="absolute text-4xl sm:text-6xl bottom-1/2 sm:top-1/2 left-16 sm:left-1/2 text-white pl-16"
      >
        a Software <br/> <span className=" pl-8 sm:pl-16">Engineer</span>
      </motion.p>
    </motion.div>
  );
}