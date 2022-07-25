import { IoIosArrowForward } from 'react-icons/io'
import '../styles/Attendee.scss'

function Attendee(){
    const block = 'attendee'

    return(
        <nav className={`${block}`}>
            <button className={`${block}__btn`}>
                Sections
                <IoIosArrowForward
                className={`${block}__btn__arrow`}/>
            </button>
            <button className={`${block}__btn`}>
                Projects
                <IoIosArrowForward
                className={`${block}__btn__arrow`}/>
            </button>
        </nav>
    )
}

export default Attendee