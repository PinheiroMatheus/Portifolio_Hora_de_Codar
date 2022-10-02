import Avatar from '../img/eu.jpg'

import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <asside id="sidebar">
      <img src={Avatar} alt="Matheus Pinheiro" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </asside>
  )
}

export default Sidebar