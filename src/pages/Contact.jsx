import SectionTitle from '../components/SectionTitle'
import { portfolioData } from '../data/portfolio'

function Contact() {
  const { contact } = portfolioData

  return (
    <div className="space-y-8">
      <SectionTitle title="Contact" subtitle="Demo-only contact form and direct contact details." />
      <section className="grid gap-6 md:grid-cols-2">
        <article className="card-base p-6">
          <h3 className="text-xl font-semibold text-slate-900">Contact Form</h3>
          <p className="mt-2 text-sm text-amber-700">This form is a demo UI only (no backend integration).</p>
          <form className="mt-4 space-y-3">
            <input type="text" placeholder="Your Name" className="w-full rounded-xl border border-slate-300 px-4 py-2" />
            <input type="email" placeholder="Your Email" className="w-full rounded-xl border border-slate-300 px-4 py-2" />
            <textarea rows="4" placeholder="Your Message" className="w-full rounded-xl border border-slate-300 px-4 py-2" />
            <button type="button" className="rounded-xl bg-slate-700 px-4 py-2 text-sm font-semibold text-white">
              Send Message
            </button>
          </form>
        </article>
        <article className="card-base p-6">
          <h3 className="text-xl font-semibold text-slate-900">Direct Contact</h3>
          <div className="mt-4 space-y-2 text-slate-700">
            <p><span className="font-semibold">Email:</span> {contact.email}</p>
            <p><span className="font-semibold">Phone:</span> {contact.phone}</p>
            <p><span className="font-semibold">Location:</span> {contact.location}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {contact.socials.map((social) => (
              <a key={social.label} href={social.value} className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                {social.label}
              </a>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default Contact
