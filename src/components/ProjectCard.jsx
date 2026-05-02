function ProjectCard({ project }) {
  return (
    <article className="card-base p-5">
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-slate-600">{project.description}</p>
      <p className="mt-3 text-sm font-medium text-slate-700">Tech Stack: {project.techStack.join(', ')}</p>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900"
        >
          View Project
        </a>
      ) : (
        <p className="mt-4 text-sm text-slate-500">Project link to be added.</p>
      )}
    </article>
  )
}

export default ProjectCard
