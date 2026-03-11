import StatusBadge from '../ui/StatusBadge'

function ReportCard({ name, summary, status, url }) {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">

            {/* Top row: company name + status badge */}
            <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 text-base leading-tight">{name}</h3>
                <StatusBadge status={status} />
            </div>

            {/* Summary — clamped to 2 lines */}
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
                {summary}
            </p>

            {/* Bottom row: two links */}
            <div className="flex items-center justify-between mt-3">

                {/* External link to their page/website */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                >
                    Link ↗
                </a>

                {/* Internal report page — page coming later */}
                <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors"
                >
                    View Full Report →
                </a>

            </div>

        </div>
    )
}

export default ReportCard