import { allProjects } from ".contentlayer/generated";
import IconFactory from "@/components/Shared/Icons/IconFactory";

const Projects = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="flex flex-col space-y-8">
        {allProjects.slice(0, 3).map((project, index) => (
          <div
            key={project._id}
            className="group relative rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]"
          >
              <IconFactory
                name={project.iconName}
                className="h-12 w-12 rounded-xl bg-tertiary p-1.5 shadow-md"
              />
              <div className="flex-col space-y-2">
                <h3 className="flex flex-row items-center space-x-2 text-lg font-semibold">
                  {project.name}
                </h3>
                <p className="text-md text-gray-300">{project.description}</p>
              </div>
            {(project.link || project.githubLink) && (
              <a
                className="absolute -top-2 -right-2 hidden rounded-full border-[1px] border-accent bg-accent p-1.5 text-tertiary opacity-0 transition hover:bg-secondary hover:text-accent group-hover:block group-hover:opacity-100"
                href={project.link || project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
