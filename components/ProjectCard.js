function ProjectCard({ title, bgImage, technologies, deployedLink, codeLink }) {
  return (
    <div className="flex flex-col justify-between relative group overflow-hidden bg-gray-500 hover:bg-light-cream h-full w-full transition-colors duration-300">
      
      <img 
        src={bgImage || "path/to/default/image.jpg"} 
        alt={title} 
        className="w-full h-full object-cover absolute z-10 group-hover:opacity-0 transition-opacity duration-300"
      />

      <div className="flex flex-col items-center justify-center space-y-4 absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-4xl text-dark-green text-center px-8">{title}</h3>
        <div className="text-dark-green mb-6">{technologies.join(", ")}</div>
        <div className="space-y-2 pt-12">
          <a href={deployedLink} className="block w-40 px-4 py-2 bg-dark-green rounded text-light-cream text-center">Visit Site</a>
          <a href={codeLink} className="block w-40 px-4 py-2 bg-dark-green rounded text-light-cream text-center">Source Code</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;