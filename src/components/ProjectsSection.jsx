import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "School Mnagement System",
    description: "We are working on this project to create a comprehensive school management system that streamlines administrative tasks, enhances communication, and improves overall efficiency .Its not fully developed yet but we are done with the UI part. Have a look !",
    image: "/projects/project1.png",
    tags: ["Next.js", "TailwindCSS", "Node.js","Express.js", "MongoDB"],
    githubUrl: "https://github.com/Dhruv-Sh-git/dashboard-ui",
  },
  {
    id: 2,
    title: "AFK Guardian",
    description:
      "AFK Guardian is an intelligent employee monitoring and productivity analysis tool . It automatically detects when a user is away from their workstation (AFK), tracks activity across browser tabs, and monitors user behavior—including actions. The system visualizes user efficiency over time, providing employers with actionable insights into employee productivity.",
    image: "/projects/project2.png",
    tags: ["Python", "OpenCV", "PyAudio",
"NumPy", "Flask"],
    githubUrl: "#https://github.com/Dhruv-Sh-git/Hackaway_AFK_Guardian",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website, built with React and Tailwind CSS. It showcases my skills, projects, and experience in a modern and responsive design.",
    image: "/projects/project3.png",
    tags: ["React","TailwindCSS"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. We have just started our journey ! Have a look at our work and feel free to reach out if you have any questions or feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Dhruv-Sh-git"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
