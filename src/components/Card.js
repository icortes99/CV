import ArrowWhite from '../assets/arrowW.png'
import ArrowBlue from '../assets/arrowB.png'
import '../styles/Card.scss'

function Card(props){
    const {obj, type, setState} = props
    const block = 'card'

    return(
        <div tabIndex={0} className={`${block}`} onClick={()=>setState(obj)}>
            <img className={`${block}__logo`} src={obj.logo} alt='logo'/>
            <h3 className={`${block}__title`}>{type === 0 ? obj.previewJob : obj.center}</h3>
            <img src={ArrowWhite} alt='arrow icon' className={`${block}__arrow`}/>
            <img src={ArrowBlue} alt='arrow icon' className={`${block}__arrow ${block}__arrow__hover`}/>
        </div>
    )
}

export default Card