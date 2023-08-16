
import { motion } from 'framer-motion';
import { AiFillHtml5, AiFillGithub, AiOutlineHome, AiOutlineTool, AiOutlineCode } from 'react-icons/ai';


function ResumeCard() {
  const description = "Check out my resume below!";
  const resumeLink = "https://drive.google.com/file/d/1TYVvEl8z_eqzCJbAS9_eeEd1gxI8JyAC/view";
return (
  <motion.div 
    className="flex flex-col items-center justify-start h-screen w-full bg-gradient-to-b from-light-cream to-dark-green"
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.5 }}
  >

    <motion.div 
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 20 }}
      className="w-2/3 text-dark-green text-2xl text-center mb-10"
    >
      {description}
    </motion.div>

    <motion.a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-white text-dark-green rounded shadow-2xl cursor-pointer transform transition-all hover:scale-105"
      whileHover={{ scale: 1.1}}
      whileTap={{ scale: 0.95 }}
    >
      Open Resume
    </motion.a>

    <div className="flex mt-10 space-x-6">
      <AiFillHtml5 size={40} color="white" />
      <AiFillGithub size={40} color="white" />
      <AiOutlineHome size={40} color="white" />
      <AiOutlineTool size={40} color="white" />
      <AiOutlineCode size={40} color="white" />
    </div>

  </motion.div>
);
}

export default ResumeCard;