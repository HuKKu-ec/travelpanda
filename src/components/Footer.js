import React from 'react'
import Gallery from './Gallery'

const Footer = () => {
    return (
                
            <div className='footer-container'>
                <div className='footer-sub-container'>
            <div className='footer-head'>
                <img src='logo2.png' style={{ verticalAlign: 'middle' }} alt='logo' />
                <span style={{ fontFamily: 'charm', fontSize: '30px' }}>TravelPanda</span>
            </div>
            <div className='foot'>
            <div className='footer-body'>
                <div className='mission'>
                    <h1>Our Misssion</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper facilisi suspendisse congue luctus sit adipiscing sem viverra. Nec nulla donec enim sit magnis. </p>
                    <div className='footer-button-nbg'><p>About us</p></div>
                    <h1>Work with us</h1>
                    <a href='.footer'>Become a supplier</a>
                    <h1>Mobile</h1>
                    <div className='footer-button-bg'>
                        <div className='bgfooter' >
                        <p>iOS</p>
                        <img src='ios.png' className='os-img' alt='ios' />
                        </div>
                    </div>
                    <div className='footer-button-bg'>
                    <div className='bgfooter' >
                        <p>Android</p>
                        <img src='android.png' className='os-img' alt='android' />
                    </div>
                    </div>
                </div>
                

            <div className='sup-com'>
                <div className='support'>
                    <h1>Support</h1>
                    <p>Help centre</p>
                    <p>Safety information</p>
                    <p>Legal notice</p>
                    <p>Cancellation policy</p>
                </div>
                <div className='company'>
                    <h1>Company</h1>
                    <p>Blog</p>
                    <p>Mission/Vision</p>
                    <p>Press</p>
                    <p>Company details</p>
                </div>
                <div className='mini-gallery'>
                    <h1>Our Mini Gallery</h1>
                    <div className='gallery'>
                    <Gallery/>
                        

                    </div>
                
                </div>

                </div>
                <div className='contact'>
                    <h1>Contact us</h1>
                    <form className='contact-form'>
                        <p>Address:</p>
                        <input type='text' className='address'/>
                        <p>Phone:</p>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        <p>Email</p>
                        <input type='email' className='Email'/>
                    </form>
                    <h1>Subscribe us</h1>
                    <div className='email-container'>
                    <input className='email-sub' type='email' placeholder='Email'/>
                    <button className="email-button"><img src='search.png' className='search-logo' alt='search bar' /></button>
                    </div>
                </div>
                
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer