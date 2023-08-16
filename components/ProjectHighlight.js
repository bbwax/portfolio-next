import ProjectCard from './ProjectCard';

function ProjectHighlight({ projects }) {
  // Check if there are any projects to display
  if (!projects || projects.length === 0) {
    return null; // Or return some placeholder or message
  }

  const project = projects[0]; // Get the first project

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 lg:min-h-[50vh] min-h-[50vh] ">
        <ProjectCard 
          title={project.title}
          bgImage={project.bgImage}
          technologies={project.technologies}
          deployedLink={project.deployedLink}
          codeLink={project.codeLink}
        />
      </div>
    </div>
  );
}

export default ProjectHighlight;