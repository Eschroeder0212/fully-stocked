export function NavBar() {
    return (
        <nav className="nav">
            <a href="/" className="site-name">Fully Stocked</a>
            <ul>
                <li>
                    <a href="/inventory">My Bar</a>
                </li>
                <li>
                    <a href="/shoppingList">Shopping List</a>
                </li>
            </ul>
        </nav>
    )
}