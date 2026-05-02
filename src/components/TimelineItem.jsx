function TimelineItem({ title, subtitle, details }) {
  return (
    <div className="relative border-l-2 border-emerald-200 pl-6">
      <span className="absolute -left-2 top-1 h-3 w-3 rounded-full bg-emerald-700" />
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
      {details ? <p className="mt-2 text-slate-600">{details}</p> : null}
    </div>
  )
}

export default TimelineItem
