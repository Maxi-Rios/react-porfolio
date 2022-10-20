import Loader from "react-loaders"
import "./index.scss"
import AnimatedLleters from "../AnimatedLetters/index"
import { useEffect, useState } from "react"
import porfolioData from "../../Data/proyect.json"


const Proyect = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const renderPortfolio = (porfolio) => {
        return (
            <div className='images-container'>
                {porfolio.map((prot, key) => {
                    return (
                        <div className='portfolio-item' key={key}>
                            <div className='portfolio-item-image'>
                                <img src={prot.cover} alt={prot.title} />
                            </div>
                            <h3>{prot.title}</h3>
                            <div className='portfolio-item-cta'>
                                <button className='btn' onClick={() => window.open(prot.url)}>
                                    Github
                                </button>
                            </div>
                            <div className="portfolio-overview">
                                <p>{prot.description}<br />{prot.skill}</p>
                            </div>

                            {/* <p className="title">
                                    {prot.title}
                                </p>
                                <h4 className="description">
                                    {prot.description}
                                </h4>
                                <h5 className="description">{prot.skill}</h5>
                                <button className="btn" onClick={() => window.open(prot.url)}>Github</button> */}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLleters
                        idx={15}
                        strArray={"Proyectos".split("")}
                        letterClass={letterClass}
                    />
                </h1>
                <div>{renderPortfolio(porfolioData.porfolio)}</div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Proyect
