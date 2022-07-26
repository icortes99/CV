import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useTransition, animated } from '@react-spring/web'
import { IoIosArrowForward } from 'react-icons/io'
import { BiArrowBack } from 'react-icons/bi'
import { GiEyeTarget } from 'react-icons/gi' //quality skills
import { IoMdPeople } from 'react-icons/io' //soft skills
import { GoBeaker } from 'react-icons/go' //technical skill
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
                <span>{icon}</span>
                {children}
                <span>{arrow}</span>
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
                            </animated.div> : <></>
                        }</>
                }</>
                )
            }
        </>
    )
}

export default SkillsDropdowns