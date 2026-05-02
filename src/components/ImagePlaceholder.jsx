function ImagePlaceholder({ label = 'Image Placeholder', className = '' }) {
  return (
    <div
      className={`flex min-h-40 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-100 px-4 text-center text-sm text-slate-500 ${className}`}
    >
      {label}
    </div>
  )
}

export default ImagePlaceholder
