import '../styles/Navbar.scss'

function Navbar(props){
    const block = 'nav'
    const {children} = props

    return(
        <nav className={`${block}__root`}>
            <ul className={`${block}__list`}>{children}</ul>
        </nav>
    )
}

export default Navbar