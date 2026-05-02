import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import Tag from '../components/Tag'
import TimelineItem from '../components/TimelineItem'
import { portfolioData } from '../data/portfolio'
import profilePhoto from '../assets/c36a85f4-0a1f-48b1-b8e9-78521cf0d4e7.jpg'

function Portfolio() {
  const { header, about, skills, education, experience, projects, leadership, certifications, contact } = portfolioData

  return (
    <div className="space-y-10">
      <section className="card-base grid items-center gap-6 p-6 md:grid-cols-[1.2fr_1fr] lg:p-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{header.fullName}</h1>
          <p className="mt-2 text-lg text-emerald-800">{header.title}</p>
          <p className="mt-3 text-slate-600">{header.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={header.cvLink}>Download CV</Button>
            <Button href={header.contactPath} variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="group relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-emerald-300/70 via-teal-300/60 to-sky-300/70 opacity-80 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100/80 bg-white/80 p-2 shadow-lg shadow-emerald-900/10 backdrop-blur">
            <img
              src={profilePhoto}
              alt={`${header.fullName} professional portrait`}
              className="h-112 w-full rounded-[1.2rem] object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="card-base p-6">
          <SectionTitle title="About Me" />
          <p className="text-slate-600">{about.summary}</p>
          <p className="mt-3 text-slate-600"><span className="font-semibold text-slate-800">Career Objective:</span> {about.objective}</p>
        </article>
        <article className="card-base p-6">
          <SectionTitle title="Education" />
          <p className="text-slate-700"><span className="font-semibold">School:</span> {education.school}</p>
          <p className="mt-2 text-slate-700"><span className="font-semibold">Course:</span> {education.course}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
            {education.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="card-base p-6">
          <SectionTitle title="Technical Skills" />
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </article>
        <article className="card-base p-6">
          <SectionTitle title="Soft Skills" />
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </article>
      </section>

      <section className="card-base p-6">
        <SectionTitle title="Experience" />
        <div className="space-y-6">
          {experience.map((item) => (
            <TimelineItem
              key={`${item.role}-${item.organization}`}
              title={item.role}
              subtitle={`${item.organization} | ${item.duration}`}
              details={item.contributions.join(' ')}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Projects" />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="card-base p-6">
          <SectionTitle title="Leadership / Organizations" />
          <ul className="list-disc space-y-1 pl-5 text-slate-600">
            {leadership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="card-base p-6">
          <SectionTitle title="Certifications / Seminars" />
          <ul className="list-disc space-y-1 pl-5 text-slate-600">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card-base p-6">
        <SectionTitle title="Contact Info" />
        <div className="space-y-2 text-slate-700">
          <p><span className="font-semibold">Email:</span> {contact.email}</p>
          <p><span className="font-semibold">Phone:</span> {contact.phone}</p>
          <p><span className="font-semibold">Location:</span> {contact.location}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            {contact.socials.map((social) => (
              <span key={social.label} className="text-sm font-semibold text-emerald-700">
                {social.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
