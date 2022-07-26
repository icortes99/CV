import logoW from '../assets/whatsappLogoWhite.png'
import logoE from '../assets/emailWhite.png'
import logoIN from '../assets/linkedinLogoWhite.png'
import logo from '../assets/logoWebWhite.png'
import '../styles/Footer.scss'

function Footer(){
    const block = 'footer'
    return(
        <footer className={`${block}`}>
            <div>
                <img src={logo} alt='my logo' className={`${block}__logo`}/>
            </div>
            <div className={`${block}__container`}>
                <div className={`${block}__container__text`}>
                    <h2>About me</h2>
                    <p>
                        I'm very passionated for programming and software world.
                        Still studying my career but nowadays I have to offer experience and good attitude to my future company.
                        I'm very courious and I always try to be an usefull asset for my team, the grow-up-desire is on me.
                    </p>
                </div>

                <div className={`${block}__container__text`}>
                    <h2>About this project</h2>
                    <p>
                        This project is built using React.js, Sass and CSS transitions. About companies logos, 
                        I used them to represent the company, I do not pretend to violate any copyright. Please if
                        you are an employee or legal representative of any of these companies, contact me to delete it if that's the case.
                        In addition, this page is completely accessible and full responsive.
                    </p>
                </div>
            </div>
            <div className={`${block}__container ${block}__container__icons`}>
                <a href='mailto:cortes.ivan353@gmail.com' className={`${block}__icons`}>
                    <img src={logoE} alt='my email link' className={`${block}__icons__img`}/>
                </a>

                <a target='__blank' href='https://www.linkedin.com/in/iv%C3%A1n-cort%C3%A9s-90487218a' className={`${block}__icons`}>
                    <img src={logoIN} alt='my linkedin link' className={`${block}__icons__img`}/>
                </a>

                <a href='tel:+50672768391' className={`${block}__icons`}>
                    <img src={logoW} alt='my number link' className={`${block}__icons__img`}/>
                </a>
            </div>
            <div>
                <p>Iván Cortés © 2022</p>
            </div>
        </footer>
    )
}

export default Footer