import ProjectCard from '@/components/ui/ProjectCard';

export default function ProjectGallery({ projects }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {projects.map((project, index) => (
        <li key={project.id} data-reveal style={{ '--reveal-delay': `${index * 100}ms` }}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}