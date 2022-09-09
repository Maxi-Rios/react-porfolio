import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logos from '../../assts/imges/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileArrowDown, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={Logos} alt='logo' />
                </Link>
                <nav>
                    <NavLink exact='true' activeclassname='active'
                        to='/'>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>

                    <NavLink exact='true' activeclassname='active'
                        className='abaout-link'
                        to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>

                    <NavLink exact='true' activeclassname='active'
                        className='proyect'
                        to='/proyect'>
                        <FontAwesomeIcon icon={faFolderOpen} color='#4d4d4e' />
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a className='red' target='_blank' rel='noreferrer'
                            href='https://www.linkedin.com/in/maxi-rios93/'
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a className='red' target='_blank' rel='noreferrer'
                            href='https://github.com/Maxi-Rios'
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    {/* <li>
                            <a className='red' download={} href={ }
                            >
                                <FontAwesomeIcon icon={faFileArrowDown} />
                            </a>
                        </li> */}
                </ul>

            </div>
        </>
    )
}

export default Sidebar