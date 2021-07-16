import React from 'react'
import contact1 from '../assets/contact1.jpeg';
import '../styles/Contact.css';



function contact() {
    return (
        <div className='contact'>
            <div className="leftSide"
            style={{ backgroundImage: `url(${contact1})` }}
            ></div>
            <div className="rightSide">
                <h1>Írj nekünk!</h1>
                <form id="contact-from" method="POST">
                    <label htmlFor="name">Teljes név</label>
                    <input name="name" placeholder="Teljes név..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="name" placeholder="Email..." type="email" />
                    <label htmlFor="email">Üzenet</label>
                    <textarea rows="6" placeholder="Írj üzenetet..." name="message" required>

                    </textarea>
                    <button type="submit">Küldés</button>
                </form>
            </div>
        </div>
    )
}

export default contact
