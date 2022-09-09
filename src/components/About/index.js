import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i']}
                            idx={15}
                        />
                    </h1>
                    <p>Soy un Full Stack Developer que busca un puesto en una empresa de IT establecida con la oportunidad de trabajar en proyectos desafiante y diversos.</p>
                    <p>Soy curioso y trabajo perpetuamente para ir mejorando mis habilidades.</p>
                    <p> Fanático de la música, entusiasta de la fotografía y apasionado de la tecnología. </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}


export default About