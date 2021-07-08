export default function Page() {
    return (
        <div>
            <h1>Index Page</h1>
            <ul>
                <li><a href="/about/?テスト=あ">Link to location with query containing special chars that will throw error</a></li>
            </ul>
        </div>
    )
}
