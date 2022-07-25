import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import '../styles/Skills.scss'
import SkillsDropdowns from './SkillsDropdowns'

function Skills(){
    const block = 'skills'
    const [dropd, setDropd] = useState(-1)

    const changeDropd = (change)=>{
        if(dropd !== change){
            setDropd(change)
        } else {
            setDropd(-1)
        }
    }

    return(
        <section className={`${block}`}>
            <h2 className={`${block}__title`}>Skills</h2>
            <div className={`${block}__container`}>
                <div>
                    <button className={`${block}__button`} onClick={()=>changeDropd(0)}>
                        Soft skills
                        <IoIosArrowForward
                        className={dropd === 0 ? `${block}__button__arrow--opened` : `${block}__button__arrow`}/>
                    </button>
                    {dropd === 0 && <SkillsDropdowns category={0}/>}
                </div>
                <span className={`${block}__span`}></span>
                <div>
                    <button className={`${block}__button`} onClick={()=>changeDropd(1)}>
                        Technical skills
                        <IoIosArrowForward
                        className={dropd === 1 ? `${block}__button__arrow--opened` : `${block}__button__arrow`}/>
                    </button>
                    {dropd === 1 && <SkillsDropdowns category={1}/>}
                </div>
                <span className={`${block}__span`}></span>
                <div>
                    <button className={`${block}__button`} onClick={()=>changeDropd(2)}>
                        QA skills
                        <IoIosArrowForward
                        className={dropd === 2 ? `${block}__button__arrow--opened` : `${block}__button__arrow`}/>
                    </button>
                    {dropd === 2 && <SkillsDropdowns category={2}/>}
                </div>
            </div>
        </section>
    )
}

export default Skills