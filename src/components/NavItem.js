import { useState } from 'react'
import '../styles/NavItem.scss'

function NavItem(props){
    const {icon, children} = props
    const [open, setOpen] = useState(false)
    const block = 'nav-item'

    return(
        <li className={`${block}__root`}>
            <a 
            href='#' 
            className={`${block}__btn`}
            onClick={()=> setOpen(!open)}>
                {icon}
            </a>

            {open && children}
        </li>
    )
}

export default NavItem