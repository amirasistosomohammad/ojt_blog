import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/ojt-logs', label: 'OJT Logs' },
  { to: '/system-deployment', label: 'System Deployment' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-emerald-800 text-white' : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-900'
    }`

  return (
    <header className="fixed top-0 z-30 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="group inline-flex items-center gap-2.5"
          aria-label="Go to home"
        >
          <svg
            viewBox="0 0 40 40"
            aria-hidden="true"
            className="h-8 w-8 transition duration-300 group-hover:-translate-y-0.5 group-hover:rotate-2"
          >
            <defs>
              <linearGradient id="brandGradient" x1="4" y1="4" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#047857" />
                <stop offset="1" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
            <path d="M6 31L14 9L20 22L26 9L34 31" fill="none" stroke="url(#brandGradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="30" cy="11" r="2.2" fill="#0EA5E9" />
          </svg>

          <span className="relative">
            <span className="bg-linear-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-xl font-black tracking-[0.14em] text-transparent transition duration-300 group-hover:tracking-[0.18em]">
              AMIRA
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-linear-to-r from-emerald-600 to-sky-500 transition duration-300 group-hover:scale-x-100" />
          </span>
        </NavLink>
        <button
          type="button"
          className="rounded-md border border-slate-300 p-2 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-slate-700" />
          <span className="mt-1 block h-0.5 w-5 bg-slate-700" />
          <span className="mt-1 block h-0.5 w-5 bg-slate-700" />
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
      {isOpen ? (
        <div className="space-y-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setIsOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
