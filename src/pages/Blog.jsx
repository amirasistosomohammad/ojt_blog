import { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { blogPosts } from '../data/blogPosts'

function Blog() {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setActiveImage(null)
      }
    }

    if (activeImage) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [activeImage])

  return (
    <div className="space-y-8">
      <SectionTitle title="Blog / Updates" subtitle="Static updates about OJT progress and project milestones." />

      <div className="flex flex-col gap-4">
        {blogPosts.map((post) => (
          <article key={post.id} className="card-base flex flex-row gap-4 overflow-hidden p-4 sm:gap-5 sm:p-5">
            <button
              type="button"
              className="h-24 w-36 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 sm:h-28 sm:w-44"
              onClick={() => setActiveImage({ src: post.image, alt: post.title })}
              aria-label={`View image for ${post.title}`}
            >
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
                loading="lazy"
              />
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{post.category}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">{post.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{post.date}</p>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          onClick={() => setActiveImage(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-slate-900/80 px-3 py-1 text-sm font-semibold text-white transition hover:bg-slate-900"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[85vh] w-full rounded-2xl border border-slate-700 bg-slate-900 object-contain"
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Blog
