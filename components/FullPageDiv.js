import { motion } from 'framer-motion';

export default function FullPageDiv() {
  return (
    <motion.div
      initial={{ y: '-100vh' }}
      animate={{ y: '0vh' }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-green-500"
    />
  );
};