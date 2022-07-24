import { IoIosArrowForward } from 'react-icons/io'
import '../styles/Skills.scss'

function Skills(){
    const block = 'skills'

    return(
        <section className={`${block}`}>
            <h2 className={`${block}__title`}>Skills</h2>
            <div className={`${block}__container`}>
                <button className={`${block}__button`}>
                    Soft skills
                    <IoIosArrowForward
                    className={`${block}__button__arrow`}/>
                </button>
                <span className={`${block}__span`}></span>
                <button className={`${block}__button`}>
                    Technical skills
                    <IoIosArrowForward
                    className={`${block}__button__arrow`}/>
                </button>
                <span className={`${block}__span`}></span>
                <button className={`${block}__button`}>
                    QA skills
                    <IoIosArrowForward
                    className={`${block}__button__arrow`}/>
                </button>
            </div>
        </section>
    )
}

export default Skills