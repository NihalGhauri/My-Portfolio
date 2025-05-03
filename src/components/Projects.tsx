import { fetchProjects } from '@/sanity/lib/client';
import { Github, Link as LinkIcon } from 'lucide-react';
import { HeroParallax } from '@/components/ui/hero-parallax'; 
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  picture: string;
}

export const revalidate = 30;

const Projects = async () => {
  const projects: Project[] = await fetchProjects();

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <HeroParallax products={projects.map(project => ({
            title: project.title,
            link: project.demo || project.github,
            thumbnail: project.picture,
          }))} />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-lg overflow-hidden shadow-xl hover:shadow-blue-900/20 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.picture}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    width={500}
                    height={300}
                  />
                </div>
                <h3 className="text-xl text-gray-300 font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-20 overflow-y-auto text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <span className="text-sm">Live view</span>
                      <LinkIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
