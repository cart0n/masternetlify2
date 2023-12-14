import React from 'react';
import ReactDOM from 'react-dom';

function Home() {

  return (
    <main>
    <section className="intro container">
        <div className="intro-first-block">
        <img src="images/intro1.png" alt="Photo of dog with computer" />
        <article className="text i">
            <h2>Акція</h2>
            <p>При підключенні протягом січня та лютого 2024 року абонентська плата буде зменшена до кінця наступного року</p>
            <br/>
            <a href='/Акції' className="big-a">Детальніше</a>
        </article>
        </div>
    
        <div className="intro-second-block">
            <div className="none"></div>
            <img src="images/intro2.3.png" alt="Photo of dog with computer" />
        </div>
    </section>
    <section class="second-page container">
        <article className="text i">
        <h2>Тарифи</h2>
            <p>Дізнайтесь про актуальні тарифи для вашого району перейшовши в розділ Тарифи, або натиснувши на кнопку Детальніше</p>
             <br/>
            <a href='/Тарифи' className="big-a">Детальніше</a>
        </article>
        <div className="photo-bg">
            <img src="images/girl2.jpg" alt="Photo of girl with computer" />
        </div>
    </section>
    <section className="third-page container">
        <div className="smaller-container">
            <article className="text">
                <h2>Чому ми?</h2>
            </article>
            <div className="reasons">
                <div className="reason-row">
                    <div className="first-reason">
                        <div className="circle">
                            <i className="fas fa-server big-icon" id="server"></i>
                        </div>
                        <article className="text">
                            <h3>Оперативність</h3>
                            <p>Шукаєте провайдера, який буде швидко вирішувати ваші проблеми?З нами Вам не потрібно чекати, нас є представництво в кожному районі в якому працюємо.</p>
                        </article>
                    </div>
                    <div className="second-reason">
                        <div className="">
                            <i className="fas fa-user-alt big-icon" id="dish"></i>
                            <div className="triancle-right"></div>
                        </div>
                        <article className="text">
                            <h3>Розуміння</h3>
                            <p>Argocom - одна з тих небагатьох компаній, які завжди готові ввійти в Вашу ситуацію, підлаштуватися  
                                та подати Вам руку допомоги.<br/>В нас індивідуальний підхід до всіх, бо ми цінуємо кожного клієнта</p>
                        </article>
                    </div>
                </div>
                <div className="reason-row">
                    <div className="third-reason">
                        <i className="fas fa-satellite-dish big-icon" id="dish"></i>
                        <div className="triancle"></div>
                        <article className="text">
                            <h3>Розвиток</h3>
                            <p>Наша компанія постійно ровиває наше обладнання щоб надавати Вам високошвидкісний інтернет за низьку цінуємо

                            </p>
                        </article>
                    </div>
                    <div className="fourth-reason">
                        <div className="square">
                            <i className="fas fa-smile-beam big-icon" id="hdd"></i>
                        </div>
                        <article className="text">
                            <h3>Довіра</h3>
                            <p>Ми працюємо з 2001 року і за всі ці роки здобули довіру тисячів користувачів і робимо все для того щоб Вас не розчарувати.</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <div class="districts">
            <div class="districts-items">
                <div class="end"><div><img src="images/hys.png" alt="" /><p>Хоростків</p></div></div>
                <div class="center"><div><img src="images/shymsk1.png" alt="" /><p>Шумськ</p></div></div>
                <div class="start"><div><img src="images/zbar.png" alt="" /><p>Збараж</p></div></div>
            </div>
            <div class="districts-items">
                <div class="start"><div><img src="images/lan.png" alt="" /><p>Ланівці</p></div> </div>
                <div class="center"><div><img src="images/borshch.png" alt="" /><p>Борщів</p></div></div>
                <div class="end"><div><img src="images/zalish.png" alt="" /><p>Заліщики</p></div></div>
            </div>
        </div>
    </section>
    <footer className="container into-footer">
        <div></div>
        <div className="gradient">
            <img src="images/ArgoCom_logo.png" alt="logo" />
            <h1>Дякуємо що ви з нами</h1>
        </div>
        <div className="main-footer" id="main-footer">
            <div className="footer-section">
                <h3>Посилання</h3>
                <div className="footer-nav">            
                    <a href="/"><i className="fas fa-home"></i>Головна</a>
                    <a href="/Акції"><i className="fas fa-tags"></i>Акції</a>
                    <a href="/Новини"><i className="fas fa-newspaper"></i>Новини</a>
                    <a href="/Тарифи"><i className="fas fa-piggy-bank"></i>Тарифи</a>
                    <a href="/Підтримка"><i className="fas fa-question"></i>Підтримка</a>
                    <a href="/Контакти"><i  className="fas fa-map-marker-alt"></i>Контакти</a>
                </div>
            </div>
            <div className="footer-section">
                <h3>Де ми розміщені</h3>
                <div className="footer-nav">
                    <p className="districts-footer">Борщів</p>
                    <p className="districts-footer">Хоростків</p>
                    <p className="districts-footer">Збараж</p>
                    <p className="districts-footer">Ланіві</p>
                    <p className="districts-footer">Шумськ</p>
                </div>
            </div>
            <div class="footer-section">
                <h3>Контакти</h3>
                <p><i className="fas fa-map-marker-alt"></i>Tернопіль вулиця Лозовецька дім 3a</p>
                <p><i className="fas fa-phone-alt"></i>+380980363598</p>
                <p><i className="fas fa-envelope"></i>Abon@argocom.te.ua</p>
            </div>
        </div>
        <div className="smaller-footer">
            <h6>©2023 @cart0n_mc</h6>
        </div>
    </footer>
    </main>
  );
}

export default Home;
