import OjtRowCard from '../components/OjtRowCard'
import SectionTitle from '../components/SectionTitle'
import { ojtLogs } from '../data/ojtLogs'

function OjtLogs() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="OJT Weekly Logs"
        subtitle="Monthly grouped logs with weekly activities, learning highlights, and reflections."
      />
      {ojtLogs.map((month) => (
        <section key={month.month} className="space-y-4">
          <div className="rounded-xl bg-emerald-900 px-4 py-2 text-white">
            <h3 className="text-lg font-semibold">{month.month}</h3>
          </div>
          <div className="space-y-4">
            {month.entries.map((entry) => (
              <OjtRowCard key={`${month.month}-${entry.week}`} entry={entry} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default OjtLogs
