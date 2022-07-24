import {MdClose} from 'react-icons/md'
import '../styles/InfoModal.scss'

function InfoModal(props){
    const {info = false, setInfo, type} = props
    const block = 'infomodal'

    return(
        <>{
            info !== false ?
            <div className={`${block}`}>
                <div className={`${block}__container`}>
                    <button onClick={()=>setInfo(false)} className={`${block}__container__close`}>
                        <MdClose/>
                    </button>
                    {
                        type === 0 ? <div className={`${block}__container--0`}>
                            <div className={`${block}__container__header`}>
                                <img src={info.logo} alt={`${info.company} logo`} className={`${block}__container__logo`}/>
                                <h2 className={`${block}__container__title`}>{info.company}</h2>
                            </div>
                            <p>{info.jobTitle}</p>
                            <p>{info.duration}</p>
                            <p>{info.description}</p>
                        </div> : <div className={`${block}__container--1`}>
                            <div className={`${block}__container__header`}>
                                <img src={info.logo} alt={`${info.center} logo`} className={`${block}__container__logo`}/>
                                <div className={`${block}__container__title-container`}>
                                    <h2 className={`${block}__container__title`}>{info.center}</h2>
                                    <p className={`${block}__container__subtitle`}>{info.subInfo}</p>
                                </div>
                            </div>
                            <p>{info.career}</p>
                            <p>{info.duration}</p>
                            <p>{info.description}</p>
                        </div>
                    }
                </div>
            </div>
            : <></>
        }</>
    )
}

export default InfoModal