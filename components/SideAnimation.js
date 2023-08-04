import { motion, useTransform, useScroll } from 'framer-motion';

export default function SideAnimation() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

  return (
    <div className="flex justify-between w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-x-hidden h-full">
      <motion.img
        src="/images/plants-left.png"
        alt="Plants Left"
        initial={{ x: '-100vw' }}
        animate={{ x: '0vw' }}
        transition={{ delay: 1.5, duration: 3 }}
        style={{ scale }}
        className="w-1/5 h-full object-cover"
      />
      <motion.img
        src="/images/plants-right.png"
        alt="Plants Right"
        initial={{ x: '100vw' }}
        animate={{ x: '0vw' }}
        transition={{ delay: 1.5, duration: 3 }}
        style={{ scale }}
        className="w-1/5 md:h-full object-cover"
      />
    </div>
  );
}