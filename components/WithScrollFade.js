import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const WithScrollFade = (WrappedComponent) => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
    });

    return (
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 3 }}

        >
          <WrappedComponent {...props} />
        </motion.div>
      </div>
    );
  };
};

export default WithScrollFade;