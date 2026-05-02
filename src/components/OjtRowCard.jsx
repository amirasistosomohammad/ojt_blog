import { useEffect, useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder'

function getEntryImageSrc(entry) {
  const raw = entry.images ?? entry.imageSrc
  if (Array.isArray(raw)) {
    return raw[0] ?? ''
  }
  return typeof raw === 'string' ? raw : raw || ''
}

function OjtRowCard({ entry }) {
  const imageSrc = getEntryImageSrc(entry)
  const imageAlt = entry.imageLabel || `${entry.week} documentation`
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
    <>
      <article className="card-base overflow-hidden p-5 md:p-6">
        <div className="grid gap-6 lg:grid-cols-[1.45fr_minmax(0,20rem)] lg:items-start">
          <div className="space-y-4 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <h4 className="text-lg font-semibold text-slate-900">{entry.week}</h4>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">{entry.dates}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{entry.hours} Hours</span>
            </div>
            <div className="grid gap-3 text-sm text-slate-700">
              <p><span className="font-semibold text-slate-900">Tasks:</span> {entry.tasks}</p>
              <p><span className="font-semibold text-slate-900">Skills Learned:</span> {entry.skillsLearned}</p>
              <p><span className="font-semibold text-slate-900">Challenges:</span> {entry.challenges}</p>
              <p><span className="font-semibold text-slate-900">Reflection:</span> {entry.reflection}</p>
            </div>
          </div>

          {imageSrc ? (
            <div className="flex justify-center lg:justify-end">
              <button
                type="button"
                className="aspect-4/3 w-full max-w-[min(100%,18rem)] overflow-hidden rounded-xl border border-slate-200 text-left shadow-sm transition hover:border-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:max-w-[20rem]"
                onClick={() => setActiveImage({ src: imageSrc, alt: imageAlt })}
                aria-label={`View larger: ${imageAlt}`}
              >
                <img
                  src={imageSrc}
                  alt=""
                  className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </button>
            </div>
          ) : (
            <div className="flex justify-center lg:justify-end">
              <ImagePlaceholder
                label={entry.imageLabel || `${entry.week} photo`}
                className="aspect-4/3 w-full max-w-[min(100%,18rem)] min-h-54 border-slate-200 sm:max-w-[20rem]"
              />
            </div>
          )}
        </div>
      </article>

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
              className="max-h-[85vh] w-full rounded-2xl border border-slate-700 object-contain bg-slate-900"
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default OjtRowCard
