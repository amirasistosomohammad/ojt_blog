function Button({ children, href, onClick, variant = 'primary', className = '' }) {
  const baseClass =
    'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition'
  const variants = {
    primary: 'bg-emerald-800 text-white hover:bg-emerald-700',
    secondary: 'border border-emerald-800 text-emerald-900 hover:bg-emerald-50',
    neutral: 'bg-slate-700 text-white hover:bg-slate-600',
  }

  const buttonClass = `${baseClass} ${variants[variant] ?? variants.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {children}
    </button>
  )
}

export default Button
