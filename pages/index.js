export default function Page() {
    return (
        <div>
            <h1>Index Page</h1>
            <ul>
                <li><a href="/about/?ใในใ=ใ">Link to location with query containing special chars that will throw error</a></li>
            </ul>
        </div>
    )
}
