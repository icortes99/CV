import {useEffect, useState} from 'react'
import Card from './Card'
import InfoModal from './InfoModal'
import '../styles/WorkExp.scss'

function WorkExp(){
    const block = 'workexp'
    const experience = [{
        company: 'Konrad Group',
        logo: 'https://res.cloudinary.com/dhe2iy0sa/image/upload/v1658538890/konradLogo_njaw8t.jpg',
        jobTitle: 'Immersive Program Trainee',
        previewJob: 'Web dev student',
        description: 'Web dev full stack student, using primarly React.js and Express.js',
        duration: '3 months'
    }, {
        company: 'Align Tech',
        logo: 'https://res.cloudinary.com/dhe2iy0sa/image/upload/v1658538883/alignLogo_byrwou.png',
        jobTitle: 'IPP Protocol Inspector',
        previewJob: 'Quality Inspector',
        description: 'Guarantee the quality of the automated product. Reviewing the worldwide Align coders work',
        duration: '7 months'
    }, {
        company: 'Align Tech',
        logo: 'https://res.cloudinary.com/dhe2iy0sa/image/upload/v1658538883/alignLogo_byrwou.png',
        jobTitle: 'IPP Clinical Coder',
        previewJob: 'Clinical Coder',
        description: 'Convert clinical preferences into software language, and negotiating with the doctor when there´s something not automatable yet',
        duration: '1.5 years'
    }]
    const [modal, setModal] = useState(false)

    return(
        <section className={`${block}`}>
            <h2 className={`${block}__title`}>Work experience</h2>
            <div className={`${block}__items-container`}>
                <Card
                obj={experience[0]}
                setState={setModal}
                type={0}/>
                <Card
                obj={experience[1]}
                setState={setModal}
                type={0}/>
                <Card
                obj={experience[2]}
                setState={setModal}
                type={0}/>
            </div>
            <InfoModal
            info={modal}
            setInfo={setModal}
            type={0}/>
        </section>
    )
}

export default WorkExp