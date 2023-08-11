import ProjectCard from './ProjectCard';

function ProjectSection({ projects }) {
  return (
    <div className="flex flex-wrap ">
      {projects.map((project, index) => (
        <div key={index} className="w-full lg:w-1/2 lg:min-h-[50vh] min-h-[50vh]">
          <ProjectCard 
            title={project.title}
            bgImage={project.bgImage}
            technologies={project.technologies}
            deployedLink={project.deployedLink}
            codeLink={project.codeLink}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;