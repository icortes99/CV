import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useTransition, animated } from '@react-spring/web'
import ArrowWhite from '../assets/arrowW.png'
import Back from '../assets/back.png'
import Soft from '../assets/people.png'
import Technical from '../assets/technical.png'
import Quality from '../assets/quality.png'
import '../styles/SkillsDropdowns.scss'

function SkillsDropdowns(props){
    const block = 'skillsDropds'
    const child = 'item'
    const [active, setActive] = useState('main')
    const [height, setHeight] = useState(null)
    const {category} = props
    const dropdRef = useRef(null)
    const transition = useTransition(category, {
        //from: {opacity: 0},
       // enter: {opacity: 1},
        //leave: {opacity: 0}
    })

    useEffect(()=>{
        setHeight(dropdRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(x){
        const y = x.offsetHeight
        setHeight(y)
    }

    function DropdownItem(props){
        const {children, icon, arrow, goMenu} = props

        return(
            <button className={`${child}`} onClick={()=> goMenu && setActive(goMenu)}>
                <span>{
                    <img src={icon} alt='icon' className={`${child}__icon`}/>
                }</span>
                {children}
                <span>{ arrow &&
                    <img src={arrow} alt='arrow' className={`${child}__arrow`}/>
                }</span>
            </button>
        )
    }

    return(
        <>
            {/*
                category === 0 && //Soft skills
                <div className={`${block}`} style={{height: height}}>
                    <CSSTransition
                    in={active == 'main'}
                    onEnter={calcHeight}
                    timeout={500}
                    unmountOnExit>
                        <div>
                            <DropdownItem
                            icon={<IoMdPeople/>}>
                                <p>Assertive communication</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<IoMdPeople/>}>
                                <p>Discipline</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<IoMdPeople/>}>
                                <p>Goal-based</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<IoMdPeople/>}>
                                <p>Very curious</p>
                            </DropdownItem>
                        </div>
                    </CSSTransition>
                </div>
            */}
            {/*
                category === 1 && //Technical skills
                <div className={`${block}`} style={{height: height}}>
                    <CSSTransition
                    in={active === 'main'}
                    onEnter={calcHeight}
                    timeout={500}
                    unmountOnExit
                    classNames={`${block}__css-container`}>
                        <div className={`${block}__container`}>
                            <DropdownItem
                            icon={<GoBeaker/>}
                            arrow={<IoIosArrowForward/>}
                            goMenu='web'>
                                <p>Web dev</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}
                            arrow={<IoIosArrowForward/>}
                            goMenu='software'>
                                <p>Software</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}
                            arrow={<IoIosArrowForward/>}
                            goMenu='portfolio'>
                                <p>Portfolio</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}
                            arrow={<IoIosArrowForward/>}
                            goMenu='3d'>
                                <p>3D animation</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}
                            arrow={<IoIosArrowForward/>}
                            goMenu='adobe'>
                                <p>Adobe suite</p>
                            </DropdownItem>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                    in={active === 'web'}
                    onEnter={calcHeight}
                    timeout={500}
                    unmountOnExit
                    classNames={`${block}__css-container--secondary`}>
                        <div className={`${block}__container`}>
                            <DropdownItem
                            icon={<BiArrowBack/>}
                            goMenu='main'>
                                <p>Back</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>React.js</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Node.js</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Express.js</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Sass (CSS, BEM convention)</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Middleware</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>JasonWebToken</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Bcrypt</p>
                            </DropdownItem>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                    in={active === 'software'}
                    onEnter={calcHeight}
                    timeout={500}
                    unmountOnExit
                    classNames={`${block}__css-container--secondary`}>
                        <div className={`${block}__container`}>
                            <DropdownItem
                            icon={<BiArrowBack/>}
                            goMenu='main'>
                                <p>Back</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>SQL and No SQL Databases</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Git</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Object oriented programming</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Data structures</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Design patterns</p>
                            </DropdownItem>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                    in={active === 'portfolio'}
                    onEnter={calcHeight}
                    timeout={500}
                    unmountOnExit
                    classNames={`${block}__css-container--secondary`}>
                        <div className={`${block}__container`}>
                            <DropdownItem
                            icon={<BiArrowBack/>}
                            goMenu='main'>
                                <p>Back</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <a href='https://client-third-project.herokuapp.com/'>
                                    Alchemy Bank
                                </a>
                            </DropdownItem>                            
                        </div>
                    </CSSTransition>

                    <CSSTransition
                    in={active === '3d'}
                    onEnter={calcHeight}
                    timeout={500}
                    unmountOnExit
                    classNames={`${block}__css-container--secondary`}>
                        <div className={`${block}__container`}>
                            <DropdownItem
                            icon={<BiArrowBack/>}
                            goMenu='main'>
                                <p>Back</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Rigging</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>3D modeling</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Textures</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Render</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Animation</p>
                            </DropdownItem>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                    in={active === 'adobe'}
                    onEnter={calcHeight}
                    timeout={500}
                    unmountOnExit
                    classNames={`${block}__css-container--secondary`}>
                        <div className={`${block}__container`}>
                            <DropdownItem
                            icon={<BiArrowBack/>}
                            goMenu='main'>
                                <p>Back</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Photoshop</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>Illustrator</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GoBeaker/>}>
                                <p>After Effects</p>
                            </DropdownItem>
                        </div>
                    </CSSTransition>
                </div>
            */}
            {/*
                category === 2 && //QA skills
                <div className={`${block}`} style={{height: height}}>
                    <CSSTransition
                    in={active == 'main'}
                    timeout={500}
                    unmountOnExit
                    onEnter={calcHeight}>
                        <div>
                            <DropdownItem
                            icon={<GiEyeTarget/>}>
                                <p>Constructive feedback</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GiEyeTarget/>}>
                                <p>Facts-based</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GiEyeTarget/>}>
                                <p>Mentorship</p>
                            </DropdownItem>
                            <DropdownItem
                            icon={<GiEyeTarget/>}>
                                <p>Idea transmit</p>
                            </DropdownItem>
                        </div>
                    </CSSTransition>
                </div>
            */}
            {
                transition((style, item) =>
                    item === 0 ? <animated.div style={style} className='un-mount'>
                        <div className={`${block}`} style={{height: height}}>
                            <CSSTransition
                            in={active == 'main'}
                            onEnter={calcHeight}
                            timeout={500}
                            unmountOnExit>
                                <div>
                                    <DropdownItem
                                    icon={Soft}>
                                        <p>Assertive communication</p>
                                    </DropdownItem>
                                    <DropdownItem
                                    icon={Soft}>
                                        <p>Discipline</p>
                                    </DropdownItem>
                                    <DropdownItem
                                    icon={Soft}>
                                        <p>Goal-based</p>
                                    </DropdownItem>
                                    <DropdownItem
                                    icon={Soft}>
                                        <p>Very curious</p>
                                    </DropdownItem>
                                </div>
                            </CSSTransition>
                        </div>
                    </animated.div> : <>{
                        item === 1 ? <animated.div style={style} className='un-mount'>
                            <div className={`${block}`} style={{height: height}}>
                                <CSSTransition
                                in={active === 'main'}
                                onEnter={calcHeight}
                                timeout={500}
                                unmountOnExit
                                classNames={`${block}__css-container`}>
                                    <div className={`${block}__container`}>
                                        <DropdownItem
                                        icon={Technical}
                                        arrow={ArrowWhite}
                                        goMenu='web'>
                                            <p>Web dev</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}
                                        arrow={ArrowWhite}
                                        goMenu='software'>
                                            <p>Software</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}
                                        arrow={ArrowWhite}
                                        goMenu='portfolio'>
                                            <p>Portfolio</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}
                                        arrow={ArrowWhite}
                                        goMenu='3d'>
                                            <p>3D animation</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}
                                        arrow={ArrowWhite}
                                        goMenu='adobe'>
                                            <p>Adobe suite</p>
                                        </DropdownItem>
                                    </div>
                                </CSSTransition>

                                <CSSTransition
                                in={active === 'web'}
                                onEnter={calcHeight}
                                timeout={500}
                                unmountOnExit
                                classNames={`${block}__css-container--secondary`}>
                                    <div className={`${block}__container`}>
                                        <DropdownItem
                                        icon={Back}
                                        goMenu='main'>
                                            <p>Back</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>React.js</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Node.js</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Express.js</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Sass (CSS, BEM convention)</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Middleware</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>JasonWebToken</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Bcrypt</p>
                                        </DropdownItem>
                                    </div>
                                </CSSTransition>

                                <CSSTransition
                                in={active === 'software'}
                                onEnter={calcHeight}
                                timeout={500}
                                unmountOnExit
                                classNames={`${block}__css-container--secondary`}>
                                    <div className={`${block}__container`}>
                                        <DropdownItem
                                        icon={Back}
                                        goMenu='main'>
                                            <p>Back</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>SQL and No SQL Databases</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Git</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Object oriented programming</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Data structures</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Design patterns</p>
                                        </DropdownItem>
                                    </div>
                                </CSSTransition>

                                <CSSTransition
                                in={active === 'portfolio'}
                                onEnter={calcHeight}
                                timeout={500}
                                unmountOnExit
                                classNames={`${block}__css-container--secondary`}>
                                    <div className={`${block}__container`}>
                                        <DropdownItem
                                        icon={Back}
                                        goMenu='main'>
                                            <p>Back</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <a href='https://client-third-project.herokuapp.com/'>
                                                Alchemy Bank
                                            </a>
                                        </DropdownItem>                            
                                    </div>
                                </CSSTransition>

                                <CSSTransition
                                in={active === '3d'}
                                onEnter={calcHeight}
                                timeout={500}
                                unmountOnExit
                                classNames={`${block}__css-container--secondary`}>
                                    <div className={`${block}__container`}>
                                        <DropdownItem
                                        icon={Back}
                                        goMenu='main'>
                                            <p>Back</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Rigging</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>3D modeling</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Textures</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Render</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Animation</p>
                                        </DropdownItem>
                                    </div>
                                </CSSTransition>

                                <CSSTransition
                                in={active === 'adobe'}
                                onEnter={calcHeight}
                                timeout={500}
                                unmountOnExit
                                classNames={`${block}__css-container--secondary`}>
                                    <div className={`${block}__container`}>
                                        <DropdownItem
                                        icon={Back}
                                        goMenu='main'>
                                            <p>Back</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Photoshop</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>Illustrator</p>
                                        </DropdownItem>
                                        <DropdownItem
                                        icon={Technical}>
                                            <p>After Effects</p>
                                        </DropdownItem>
                                    </div>
                                </CSSTransition>
                            </div>
                        </animated.div> : <>{
                            item === 2 ? <animated.div style={style} className='un-mount'>
                                <div className={`${block}`} style={{height: height}}>
                                    <CSSTransition
                                    in={active == 'main'}
                                    timeout={500}
                                    unmountOnExit
                                    onEnter={calcHeight}>
                                        <div>
                                            <DropdownItem
                                            icon={Quality}>
                                                <p>Constructive feedback</p>
                                            </DropdownItem>
                                            <DropdownItem
                                            icon={Quality}>
                                                <p>Facts-based</p>
                                            </DropdownItem>
                                            <DropdownItem
                                            icon={Quality}>
                                                <p>Mentorship</p>
                                            </DropdownItem>
                                            <DropdownItem
                                            icon={Quality}>
                                                <p>Idea transmit</p>
                                            </DropdownItem>
                                        </div>
                                    </CSSTransition>
                                </div>
                            </animated.div> : <></>
                        }</>
                }</>
                )
            }
        </>
    )
}

export default SkillsDropdowns