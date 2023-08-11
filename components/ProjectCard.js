import { motion } from 'framer-motion';

function ProjectCard({ title, bgImage, technologies, deployedLink, codeLink }) {
  return (
    <div className="flex flex-col justify-between relative group overflow-hidden bg-gray-500 hover:bg-transparent h-full w-full">
      <motion.img 
        src={bgImage || "path/to/default/image.jpg"} 
        alt={title} 
        className="w-full h-full object-cover absolute z-10"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="flex items-center justify-center z-20 h-full opacity-100 group-hover:opacity-0">
        <h3 className="text-2xl text-white">{title}</h3>
      </div>

      <motion.div 
        className="flex flex-col items-center justify-center space-y-4 absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <h3 className="text-2xl text-white mb-4">{title}</h3>
        <div className="text-white">{technologies.join(", ")}</div>
        <div className="space-y-2">
          <a href={deployedLink} className="block w-40 px-4 py-2 bg-green-500 rounded text-white text-center">Visit Site</a>
          <a href={codeLink} className="block w-40 px-4 py-2 bg-blue-500 rounded text-white text-center">View Code</a>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;