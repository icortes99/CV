import { IoIosArrowForward } from 'react-icons/io'
import '../styles/Card.scss'

function Card(props){
    const {obj, type, setState} = props
    const block = 'card'

    return(
        <div tabIndex={0} className={`${block}`} onClick={()=>setState(obj)}>
            <img className={`${block}__logo`} src={obj.logo} alt='logo'/>
            <h3 className={`${block}__title`}>{type === 0 ? obj.previewJob : obj.center}</h3>
            <IoIosArrowForward className={`${block}__arrow`}/>
        </div>
    )
}

export default Card