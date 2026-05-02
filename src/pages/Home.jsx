import { Link } from 'react-router-dom'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import { portfolioData } from '../data/portfolio'
import profilePhoto from '../assets/c36a85f4-0a1f-48b1-b8e9-78521cf0d4e7.jpg'

const highlights = [
  {
    title: 'Portfolio',
    description: 'View profile, resume, and project highlights in one page.',
    link: '/portfolio',
  },
  {
    title: 'OJT Logs',
    description: 'Review weekly OJT activities, skills learned, and reflections.',
    link: '/ojt-logs',
  },
  {
    title: 'System Deployment',
    description: 'Explore the deployed system journey, features, and impact.',
    link: '/system-deployment',
  },
]

function Home() {
  return (
    <div className="space-y-12">
      <section className="card-base grid items-center gap-6 p-6 md:grid-cols-[1.2fr_1fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Professional Portfolio</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{portfolioData.header.fullName}</h1>
          <p className="mt-2 text-lg text-slate-700">{portfolioData.education.course}</p>
          <p className="text-slate-600">{portfolioData.education.school}</p>
          <p className="mt-4 max-w-2xl text-slate-600">{portfolioData.about.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/portfolio">
              <Button>View Portfolio</Button>
            </Link>
            <Link to="/ojt-logs">
              <Button variant="secondary">View OJT Logs</Button>
            </Link>
          </div>
        </div>
        <div className="group relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-emerald-300/70 via-teal-300/60 to-sky-300/70 opacity-80 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100/80 bg-white/80 p-2 shadow-lg shadow-emerald-900/10 backdrop-blur">
            <img
              src={profilePhoto}
              alt={`${portfolioData.header.fullName} professional portrait`}
              className="h-112 w-full rounded-[1.2rem] object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title="Showcase Highlights" subtitle="Explore my core portfolio sections and recent work highlights." />
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card-base p-5">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.description}</p>
              <Link to={item.link} className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                Open Section
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
