import { useEffect, useState } from 'react'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import { systemDeploymentData } from '../data/systemDeployment'

function SystemDeployment() {
  const { title, overview, systemUrl, systemLinkLabel, images } = systemDeploymentData
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
      <SectionTitle title={title} subtitle="Project overview, live system link, and three deployment highlights." />

      <section className="card-base space-y-5 p-6 lg:p-8">
        <h2 className="text-lg font-semibold text-slate-900">Project overview</h2>
        <p className="max-w-3xl text-slate-600">{overview}</p>
        {systemUrl ? (
          <div>
            <Button href={systemUrl}>{systemLinkLabel}</Button>
          </div>
        ) : null}
      </section>

      <section className="card-base p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={`${image.alt}-${index}`}
              type="button"
              className="aspect-4/3 w-full overflow-hidden rounded-xl border border-slate-200 text-left transition hover:border-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              onClick={() => setActiveImage({ src: image.src, alt: image.alt })}
              aria-label={`View larger: ${image.alt}`}
            >
              <img
                src={image.src}
                alt=""
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

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

export default SystemDeployment
