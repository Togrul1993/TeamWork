import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import "../Asests/contact.css"
import Navbar from './Navbar'
import NavbarMobil from './NavbarMobil'



export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    const background = {
      BackgroundColor: "#353b4a"
    };
    return (
      <>
        <NavbarMobil />
        <Navbar />
        <Header />

        <div className="container" style={background}>

          <div className="form">
            <div className="contact-info">
              <h3 className="title">Bbizimlə əlaqə</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
          </p>

              <div className="info">
                <div className="information">
                  <p>Ismayilbey Gutgashinli St, Baku, Azerbaycan</p>
                </div>
                <div className="information">
                  <p>lorem@ipsum.com</p>
                </div>
                <div className="information">
                  <p>+994-456-789</p>
                </div>
              </div>

              <div className="social-media">
                <p>Social :</p>
                <div className="social-icons">
                  <a href="www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="www.linkedin.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">


              <form action="" autocomplete="off">
                <h3 className="title">Əlaqə</h3>
                <div className="input-container">
                  <input type="text" placeholder="Ad Soyad" name="name" required className="input" />
                  <label for="" />

                </div>
                <div className="input-container">
                  <input type="email" placeholder="Email" name="email" required className="input" />
                  <label for="" />

                </div>
                <div className="input-container">
                  <input type="text" placeholder="Mövzu" name="movzu" className="input" />
                  <label for="" />

                </div>
                <div className="input-container textarea">
                  <textarea name="message" placeholder="Mesaj" required className="input"></textarea>
                  <label for="" />

                </div>
                <button className="btn btn-dark">Göndər</button>              </form>
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  }


}
