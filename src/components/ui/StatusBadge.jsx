// StatusBadge — colored pill that shows scam status
// Usage: <StatusBadge status="scam" />

// Config maps each status to a label and Tailwind color classes
const STATUS_CONFIG = {
    scam:       { label: 'Scammed',   classes: 'bg-red-100 text-red-600' },
    reported:   { label: 'Reported',  classes: 'bg-orange-100 text-orange-600' },
    safe:       { label: 'Clear',     classes: 'bg-green-100 text-green-700' },
    unknown:    { label: 'Unknown',   classes: 'bg-gray-100 text-gray-500' },
}

function StatusBadge({ status = 'unknown' }) {
    const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.unknown

    return (
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${config.classes}`}>
            {config.label}
        </span>
    )
}

export default StatusBadge
