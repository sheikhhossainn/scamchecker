import SearchInput from '../components/ui/SearchInput'

// This is the Home page (currently just the Hero section)
// You'll build out the rest yourself — ReportGrid, StepCards, etc.

function Home() {
    return (
        <>
            {/* Hero Section — light gray background like the mockup */}
            <section className="bg-gray-50 py-20 flex flex-col items-center text-center px-4">

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

            {/* You'll add more sections below as you learn more React:
                - "Trust the Community" steps section
                - Recent Community Reports grid
            */}
        </>
    )
}

export default Home