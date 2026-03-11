import SearchInput from '../components/ui/SearchInput'
import ReportCard from '../components/home/ReportCard'

function Home() {
    return (
        <>
            {/* Hero Section — light gray background like the mockup */}
            <section className="bg-gray-50 pt-16 pb-10 flex flex-col items-center text-center px-4">

                {/* Headline */}
                <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">
                    Verify Before You Buy.
                </h1>

                {/* Subtitle */}
                <p className="text-gray-500 text-lg mb-10">
                    Search our database for known e-commerce scams and fraudulent businesses.
                </p>

                {/* Search Box */}
                <SearchInput size={18} color="#9ca3af" strokeWidth={2} />

            </section>

            {/* Recent Reports Section */}
            <section className="max-w-5xl mx-auto px-4 pt-8 pb-12">

                {/* Section heading */}
                <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">Recent Community Reports</h2>
                <p className="text-gray-500 text-sm mb-8 text-center">Latest scams reported by the community.</p>

                {/* TEST card — you'll replace this with ReportGrid later */}
                <div className="max-w-sm">
                    <ReportCard
                        name="FAIZEEN"
                        status="scam"
                        url="https://www.facebook.com/profile.php?id=61565756180126"
                        summary="Received a defective dress and the seller refused to offer a refund or replacement. No response after multiple follow-ups."
                    />
                </div>
            </section>
        </>
    )
}

export default Home