import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_zvf085k',
                'template_i7upafg',
                refForm.current,
                'kz66So8bsJaBaw7Gb'
            )
            .then(() => {
                alert('¡Mensaje enviado correctamente!')
                window.location.reload(false)
            },
                () => {
                    alert('Error al enviar el mensaje, inténtelo nuevamente')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Nombre'
                                        required />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required />
                                </li>
                                <li>
                                    <input
                                        placeholder='Asunto'
                                        type='text'
                                        name='asunto'
                                        required />
                                </li>
                                <li>
                                    <textarea
                                        placeholder='Mensaje'
                                        name='mensaje'
                                        required></textarea>
                                </li>
                                <li>
                                    <input
                                        type='submit'
                                        className='flat-button'
                                        value='Enviar' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Maxi Rios,
                    <br />
                    Argentina,
                    <br />
                    Buenos Aires,
                    <br />
                    Baradero.<br />
                    <span>maxirecibos182@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-33.807163, -59.501899]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[-33.807163, -59.501899]}>
                            <Popup>Maxi Rios residencia</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact