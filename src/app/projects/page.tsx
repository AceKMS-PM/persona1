import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = useQuery(api.projects.getProjects);

  return (
    <div className="editorial-grid px-5 pt-20 pb-20">
      <div className="col-span-12 md:col-span-8 lg:col-span-6 mb-12">
        <h1 className="display-lg mb-4">Work</h1>
        <p className="body-md text-brand-smoke">
          A curated selection of tools and experiments built with precision.
        </p>
      </div_div>

      <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects?.map((project) => (
          <div key={project._id} className="border-t border-brand-outline pt-8 group">
            <div className="overflow-hidden aspect-video mb-6">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              ) : (
                <div className="w-full h-full bg-brand-outline" />
              )}
            </div_div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="headline-sm">{project.title}</h2>
              {project.link && (
                <a href={project.link} target="_blank" className="label-caps text-xs underline decoration-brand-slate">Visit →</a>
              )}
            </div_div>
            <p className="body-md text-brand-smoke mb-6">{project.description}</p>
            <div className="flex gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="label-caps text-[10px] px-2 py-1 border border-brand-outline italic">
                  {tag}
                </span>
              ))}
            </div_div>
          </div_div>
        ))}
      </div_div>
    </div_div>
  );
}
