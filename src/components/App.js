import '../styles/App.scss'
import Attandee from './Attendee'
import Education from './Education'
import Profile from './Profile'
import Skills from './Skills'
import WorkExp from './WorkExp'
import Footer from './Footer'

function App() {
  const block = 'app'

  return (
    <div className={`${block}`}>
      <Attandee/>
      <main>
        <Profile/>
        <WorkExp/>
        <Skills/>
        <Education/>
      </main>
      <Footer/>
    </div>
  );
}

export default App

/* 
<header className={`${block}__head`}>
        <Navbar>
          <NavItem icon={<FaRocket/>}/>
          <NavItem icon={<FaBeer/>}/>
          <NavItem icon={<FaBattleNet/>}/>

          <NavItem icon={<FaAffiliatetheme/>}>
            <Dropdown></Dropdown>
          </NavItem>
        </Navbar>
      </header>
      <main>
        <Home/>
      </main>
*/