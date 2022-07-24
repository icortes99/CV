import { useEffect, useRef, useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import { BiArrowFromRight, BiArrowFromLeft, BiBrightness, BiCool, BiRocket } from 'react-icons/bi'
import '../styles/Dropdown.scss'

function Dropdown(){
    const block = 'dropdown'
    const child = 'item' //menu item
    const [active, setActive] = useState('main')
    const [height, setHeight] = useState(null)
    const dropdRef = useRef(null)

    useEffect(()=>{
        setHeight(dropdRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(x){
        const y = x.offsetHeight
        setHeight(y)
    }

    function DropdownItem(props){
        const {left, right, children, goMenu} = props

        return(
            <a href='#' className={`${child}`} onClick={()=> goMenu && setActive(goMenu)}>
                <span className={`${child}__left`}>{left}</span>
                {children}
                <span className={`${child}__right`}>{right}</span>
            </a>
        )
    }

    return(
        <div className={`${block}`} style={{height: height}}  ref={dropdRef}>
            <CSSTransition 
            in={active === 'main'} 
            timeout={500}
            classNames={`${block}__menu`}
            unmountOnExit 
            onEnter={calcHeight}>
                <div className={`${block}__container`}>
                    <DropdownItem left={<BiCool/>}>My profile</DropdownItem>
                    <DropdownItem
                    left={<BiBrightness/>}
                    right={<BiArrowFromLeft/>}
                    goMenu='settings'>
                        Settings
                    </DropdownItem>

                    <DropdownItem
                    left="🦧"
                    right={<BiArrowFromLeft />}
                    goMenu="animals">
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={active === 'settings'} 
            unmountOnExit 
            timeout={500}
            classNames={`${block}__menu--secondary`}
            onEnter={calcHeight}>
                <div className={`${block}__container`}>
                    <DropdownItem left={<BiArrowFromRight/>} goMenu='main'>
                        <h2>My settings</h2>
                    </DropdownItem>
                    <DropdownItem>Settings menu</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={active === 'animals'} 
            unmountOnExit 
            timeout={500}
            classNames={`${block}__menu--secondary`}
            onEnter={calcHeight}>
                <div className={`${block}__container`}>
                    <DropdownItem left={<BiArrowFromRight/>} goMenu='main'>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem left="🦘">Kangaroo</DropdownItem>
                    <DropdownItem left="🐸">Frog</DropdownItem>
                    <DropdownItem left="🦋">Butterfly</DropdownItem>
                    <DropdownItem left="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Dropdown