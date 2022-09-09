import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Logos from '../../assts/imges/logo.webp'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['a', 'x', 'i', ' ', 'R', 'i', 'o', 's']

    const jobArray = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={`${letterClass} _12`}>H</span>
                        <span className={`${letterClass} _13`}>o</span>
                        <span className={`${letterClass} _14`}>l</span>
                        <span className={`${letterClass} _15`}>a</span>
                        <span className={`${letterClass} _15`}>,</span>
                        <br />
                        <span className={`${letterClass} _16`}>s</span>
                        <span className={`${letterClass} _17`}>o</span>
                        <span className={`${letterClass} _18`}>y</span>
                        <img src={Logos} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={19} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={33} />
                    </h1>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home