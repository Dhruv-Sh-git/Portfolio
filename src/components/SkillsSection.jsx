import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //languages
  { name: "C", level: 4.5, category: "languages" },
  { name: "C++", level: 4.8, category: "languages" },
  { name: "Python", level: 4.3, category: "languages" },
  { name: "JavaScript", level: 4.5, category: "languages" },
  // Frontend
  { name: "HTML/CSS", level: 4.5, category: "frontend" },
  { name: "React", level: 4.6, category: "frontend" },
  { name: "TypeScript", level: 4.2, category: "frontend" },
  { name: "Tailwind CSS", level: 4.6, category: "frontend" },
  { name: "Bootstrap", level: 5.0, category: "frontend" },
  { name: "Next.js", level: 4.5, category: "frontend" },

  // Backend
  { name: "Node.js", level: 4.5, category: "backend" },
  { name: "Express.js", level: 4.5, category: "backend" },
  { name: "MongoDB", level: 4.8, category: "backend" },
  { name: "PostgreSQL", level: 4.1, category: "backend" },
  { name: "Prisma", level: 4.2, category: "backend" },
  { name: "REST APIs", level: 4.8, category: "backend" },
  { name: "Firebase", level: 4.8, category: "backend" },
  { name: "Flask", level: 4.4, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 5, category: "tools" },
  { name: "Postman", level: 4.7, category: "tools" },
  { name: "VS Code", level: 4.8, category: "tools" },
  {name: "Vercel", level: 4.5, category: "tools" },
  //Robotics
  { name: "ESP", level: 4.5, category: "Robotics" },
  { name: "Arduino", level: 4.6, category: "Robotics" },
  { name: "OpenCV", level: 4.3, category: "Robotics" },
  { name: "IOT", level: 4.2, category: "Robotics" },
  { name:  "ROS", level: 4.1, category: "Robotics" },
  { name: "Gazebo", level: 4.0, category: "Robotics" },
  {name: "Blender", level: 4.0, category: "Robotics" },
  { name: "Raspberry Pi", level: 4.5, category: "Robotics" },
];

const categories = ["all","languages", "frontend", "backend", "tools","Robotics"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level} ★
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
