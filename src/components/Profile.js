import imageProfile from '../assets/img.jpeg'
import {MdShareLocation} from 'react-icons/md'
import {CgMail} from 'react-icons/cg'
import {FiLinkedin} from 'react-icons/fi'
import {MdOutlineAddIcCall} from 'react-icons/md'
import '../styles/Profile.scss'

function Profile(){
    const block = 'profile'

    return(
        <div className={`${block}`}>
            <div className={`${block}__container`}>
                <img className={`${block}__image`} src={imageProfile} alt='Profile image'/>
            </div>
            <div className={`${block}__container`}>
                <ul className={`${block}__list`}>
                    <li>
                        <h1 className={`${block}__name`}>Iván Cortés</h1>
                    </li>
                    <li>
                        <div className={`${block}__list__container`}>
                            <MdShareLocation className={`${block}__list__icon`}/>
                            <p>Costa Rica</p>
                        </div>
                    </li>
                    <li>
                        <a href='mailto:cortes.ivan353@gmail.com' className={`${block}__list__container click`}>
                            <CgMail className={`${block}__list__icon`}/>
                            <p>cortes.ivan353@gmail</p>
                        </a>
                    </li>
                    <li>
                        <a target='__blank' href='https://www.linkedin.com/in/iv%C3%A1n-cort%C3%A9s-90487218a' className={`${block}__list__container click`}>
                            <FiLinkedin className={`${block}__list__icon`}/>
                            <p>Iván Cortés</p>
                        </a>
                    </li>
                    <li>
                        <a href='tel:+50672768391' className={`${block}__list__container click`}>
                            <MdOutlineAddIcCall className={`${block}__list__icon`}/>
                            <p>+506 72768391</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile