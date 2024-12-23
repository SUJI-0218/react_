function Nav( props ){
    const { name } = props
    const { addr : abcd } = props
    const { name: n, addr} = props
    return (
        <nav>
            <ul>
                <li><a href="#">{ name }</a></li>
                <li><a href="#">{ abcd }</a></li>
                <li><a href="#">{ n }</a></li>
            </ul>
        </nav>
    )
}
export default Nav;