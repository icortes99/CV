import Exit from '../assets/exit.png'
import ExitBlack from '../assets/exitBlack.png'
import '../styles/InfoModal.scss'

function InfoModal(props){
    const {info = false, setInfo, type} = props
    const block = 'infomodal'
//line 10: info !== false ?, line 44: : <></>
    return(
        <>{
            
            <div className={info !== false ? `${block}` : `${block}--hidden`}>
                <div className={`${block}__container`}>
                    <button tabIndex={info !== false ? 100 : undefined} onClick={()=>setInfo(false)} className={`${block}__container__close`}>
                        <img src={ExitBlack} alt='exit icon' className={`${block}__container__close--closed`}/>
                        <img src={Exit} alt='exit icon' className={`${block}__container__close--hover`}/>
                    </button>
                    {
                        type === 0 ? <div>
                            <div className={`${block}__container__header ${block}__container__header__work`}>
                                <img src={info.logo} alt={`${info.company} logo`} className={`${block}__container__logo`}/>
                                <h2 className={`${block}__container__title`}>{info.company}</h2>
                            </div>
                            <div className={`${block}__container--0`}>
                                <p><span>Job title: </span>{info.jobTitle}</p>
                                <p><span>During: </span>{info.duration}</p>
                                <p><span>Description: </span>{info.description}</p>
                            </div>
                        </div> : <div>
                            <div className={`${block}__container__header`}>
                                <img src={info.logo} alt={`${info.center} logo`} className={`${block}__container__logo`}/>
                                <div className={`${block}__container__title-container`}>
                                    <h2 className={`${block}__container__title`}>{info.center}</h2>
                                    <p className={`${block}__container__subtitle`}>{info.subInfo}</p>
                                </div>
                            </div>
                            <div className={`${block}__container--1`}>
                                <p><span>Career: </span>{info.career}</p>
                                <p><span>During: </span>{info.duration}</p>
                                <p><span>Description: </span>{info.description}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            
        }</>
    )
}

export default InfoModal