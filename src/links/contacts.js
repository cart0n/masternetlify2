import React from 'react';
import ReactDOM from 'react-dom';



function Contacts() {

  return (
    <div>
    <main class="container">
        <section class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.8102656887104!2d25.603496115920944!
            3d49.563603058745755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47303145def00001%3A0x751225654fe0e7f!
            2z0JDRgNCz0L7QmtC-0Lw!5e0!3m2!1suk!2sua!4v1586602181651!5m2!1suk!2sua" 
            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <div class="contact-box">
                <p><i class="fas fa-map-marker-alt"></i>Тернопіль вулиця Лозовецька дім 3a</p>
                <p><i class="fas fa-phone-alt"></i>+380980363598</p>
                <p><i class="fas fa-envelope"></i>acom@gmail.com</p>
            </div>
        </section>
    </main>
    <footer className="container">
        <div className="main-footer" id="main-footer">
            <div className="footer-section">
                <img src="images/ArgoCom_logo.png" alt="" />
                <h5>Ваш надійний інтернет провайдер</h5>
            </div>
            <div className="footer-section">
                <h3>Де ми розміщені</h3>
                <div className="footer-nav">
                    <p className="districts-footer">Борщів</p>
                    <p className="districts-footer">Хоростків</p>
                    <p className="districts-footer">Збараж</p>
                    <p className="districts-footer">Ланівці</p>
                    <p className="districts-footer">Шумськ</p>
                </div>
            </div>
            <div class="footer-section">
                <h3>Контакти</h3>
                <p><i className="fas fa-map-marker-alt"></i>Тернопіль вулиця Лозовецька дім 3a</p>
                <p><i className="fas fa-phone-alt"></i>+380980363598</p>
                <p><i className="fas fa-envelope"></i>Abon@argocom.te.ua</p>
            </div>
        </div>
        <div className="smaller-footer">
            <h6>©2023 @cart0n_mc</h6>
        </div>
        </footer>
    </div>
  );
}

export default Contacts;
