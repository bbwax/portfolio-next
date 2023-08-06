import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function ScrollFade() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-tan to-white flex flex-col items-center justify-center h-max p-6"
    >
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 3 }}
        className="card bg-light-cream p-6 rounded-lg shadow-lg mt-4 w-full sm:w-2/3"
      >
        <div className="text-center">
          <p className="mt-2 text-dark-green text-lg">Hi, I'm Braxton, a skilled software developer with a 
                            background in computer science and civil engineering with a drive to solve real-world
                             problems. Trained at UC Berkeley's Software Developer Bootcamp,
                              I specialize in web technologies like HTML/CSS, JavaScript, 
                              React.js, and the MERN stack. My expertise extends to API design, 
                              data storage, user authentication, and deployment, while ensuring quality
                               code and client satisfaction. As a collaborative and creative problem solver,
                                I'm eager to bring my passion and skills to your next project.</p>
        </div>
      </motion.div>
    </div>
  );
};