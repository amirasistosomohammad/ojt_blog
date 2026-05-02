import { portfolioData } from '../data/portfolio'

function Footer() {
  const { contact } = portfolioData

  const quickLinks = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'OJT Logs', href: '/ojt-logs' },
    { label: 'System Deployment', href: '/system-deployment' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="mt-12 border-t border-emerald-900/10 bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-emerald-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Amira's Portfolio</p>
          <h3 className="mt-3 text-2xl font-bold text-white">Amira Sistoso Mohammad</h3>
          <p className="mt-3 max-w-md text-sm text-emerald-100/90">
            IT student and OJT intern documenting projects, weekly progress, and system deployment work.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-200">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-emerald-100 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-200">Connect</h4>
          <p className="mt-3 text-sm text-emerald-100/90">{contact.email}</p>
          <p className="text-sm text-emerald-100/90">{contact.phone}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {contact.socials.map((social) => (
              <span
                key={social.label}
                className="rounded-full border border-emerald-200/30 bg-emerald-700/30 px-3 py-1 text-xs font-semibold text-emerald-50"
              >
                {social.label}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
