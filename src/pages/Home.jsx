import SearchInput from '../components/ui/SearchInput'

function MainSearch() {
    return (
        <>
            <div className="Title-Section">Check Before You Buy</div>
            <div className="Search-Section">
                <SearchInput size={30} color={"#0071e3"} strokeWidth={1.5} />
            </div>
        </>
    )
}

export default MainSearch;