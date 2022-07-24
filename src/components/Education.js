import { useState, useEffect } from 'react'
import Card from './Card'
import '../styles/Education.scss'
import InfoModal from './InfoModal'

function Education(){
    const block = 'education'
    const studies = [{
        center: 'Cenfotec',
        subInfo: 'University',
        logo: 'https://res.cloudinary.com/dhe2iy0sa/image/upload/v1658553831/cenfoLogo_ocroaa.jpg',
        career: 'Software Engineering',
        description: 'Bachelor´s degree',
        duration: 'Since 2021, expected graduation: 2024'
    }, {
        center: 'CETAV',
        subInfo: 'Centro de Tecnologías y Artes Visuales',
        logo: 'https://res.cloudinary.com/dhe2iy0sa/image/upload/v1658553842/cetavLogo_gz8qa8.png',
        career: '3D animation',
        description: 'Learn a whole pipeline to an animated video, but also assertive communication, design thinking and english',
        duration: 'Since 2018 to 2019'
    }]
    const [modal, setModal] = useState(false)

    return(
        <section className={`${block}`}>
            <h2 className={`${block}__title`}>Education</h2>
            <div className={`${block}__container`}>
                <Card
                obj={studies[0]}
                setState={setModal}
                type={1}/>
                <Card
                obj={studies[1]}
                setState={setModal}
                type={1}/>
            </div>
            <InfoModal
            info={modal}
            setInfo={setModal}
            type={1}/>
        </section>
    )
}

export default Education