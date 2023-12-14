import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'

function requestTariff() {
    var data = "type=" +  document.getElementById("type").value + "&" + "name=" +  document.getElementById("name").value + "&" + "phone=" + document.getElementById("phone").value;
    // до виду: змінна=знач&змінна2=знач2
    // var data = {name : document.getElementById("name").value, phone : document.getElementById("phone").value};
    // data = JSON.stringify(data);
    console.log(data)
    fetch("/tarrifs", {  
      method: 'post',  
      headers: {  
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        // "Content-type": "application/x-www-form-urlencoded; json"  
      },  
      body: data
    })
    .then()  
    .then(function () {  
      console.log('Request succeeded with JSON response', 1 )
      alert("Вашу заявку прийнято. Наш оператор зв'яжеться з Вами");  
    })  
    .catch(function (error) {  
      console.log('Request failed', error);  
    });
  
  }
  

function Tariff() {
    var all
    async function getTariff() {
        
        $.ajax({
            url:'/z',
            async: false,
            type: 'GET',
            success:function(data){
                console.log(JSON.parse(data))
                all = JSON.parse(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
    getTariff()
    console.log(all)
    // $.ajax
    // var all
    // fetch('/z')  
    // .then(  
    //   function(response) {  
    //     var data =response.json().then( function(dat) {  
    //         data = dat 
            
    //         return dat
    //       }); 
  
    //      console.log(data)
    //   }  
    // )  
    // .catch(function(err) {  
    //   console.log('Fetch Error :-S', err);  
    // });
    // console.log(all)
    let nub =[12,3,4]
  return (

    <main>
        <div class="container tariffs">
            <article class="tariff-top-title">
                <div class="minor-top-nav">
                    <a href="/">Головна</a>
                    <i class="fas fa-long-arrow-alt-right"></i>
                    <a>Тарифи</a>
                </div>
                <h1>Тарифи</h1>
            </article>
            <article class="main-tariffs">
                <h2 class="main-tariffs-title">Основні тарифи</h2>
                <div className='tafiff-rows'>
                    <div className="accordion-item">
                    <input type="checkbox" name="radio" id="accordion-1" class="accordion-item-input" />
                    <label for="accordion-1" class="accordion-item-trigger">Борщів</label>
                    <div className="accordion-item-content">
                        <div className="tariff-boxes">
                            <div  class="tariff-box" id="tb2">
                                <div class="tariff-box-inside">
                                    <h2>{all.bor.tarif[0].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.bor.tarif[0].speed}Мбіт/с</h2>
                                    <h2>{all.bor.tarif[0].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        
                    <input type="checkbox"  id="accordion-2" class="accordion-item-input" />
                    <label for="accordion-2" class="accordion-item-trigger">Хоростків</label>
                    <div className="accordion-item-content">
                    <div className="tariff-boxes">
                        <div  class="tariff-box" id="tb1">
                            <div class="tariff-box-inside">
                                <h2>{all.gys.tarif[0].name}</h2>
                                <div class="tariff-icons">
                                    <i class="fas fa-laptop"></i>
                                </div>
                                <h2>До {all.gys.tarif[0].speed}Мбіт/с</h2>
                                <h2>{all.gys.tarif[0].price} грн./міс.</h2>
                                <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                            </div>
                        </div>
                        
                        <div  class="tariff-box" id="tb2">
                            <div class="tariff-box-inside">
                            <h2>{all.gys.tarif[1].name}</h2>
                                <div class="tariff-icons">
                                    <i class="fas fa-laptop"></i>
                                </div>
                                <h2>До {all.gys.tarif[1].speed}Мбіт/с</h2>
                                <h2>{all.gys.tarif[1].price} грн./міс.</h2>
                                <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                            </div>
                        </div>
                        <div  class="tariff-box" id="tb3">
                            <div class="tariff-box-inside">
                            <h2>{all.gys.tarif[2].name}</h2>
                                <div class="tariff-icons">
                                    <i class="fas fa-laptop"></i>
                                </div>
                                <h2>До {all.gys.tarif[2].speed}Мбіт/с</h2>
                                <h2>{all.gys.tarif[2].price} грн./міс.</h2>
                                <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                            </div>
                        </div>
                        <div  class="tariff-box" id="tb1">
                            <div class="tariff-box-inside">
                                <h2>{all.gys.tarif[3].name}</h2>
                                <div class="tariff-icons">
                                    <i class="fas fa-laptop"></i>
                                </div>
                                <h2>До {all.gys.tarif[3].speed}Мбіт/с</h2>
                                <h2>{all.gys.tarif[3].price} грн./міс.</h2>
                                <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                            </div>
                        </div>
                    </div>   
                    </div>
                    </div>
                    <div className="accordion-item">
                    <input type="checkbox"  id="accordion-3" className="accordion-item-input" />
                    <label for="accordion-3" className="accordion-item-trigger">Збараж</label>
                    <div className="accordion-item-content">
                        <div className="tariff-boxes">
                            <div  class="tariff-box" id="tb1">
                                <div class="tariff-box-inside">
                                    <h2>{all.zba.tarif[0].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.zba.tarif[0].speed}Мбіт/с</h2>
                                    <h2>{all.zba.tarif[0].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                            <div  class="tariff-box" id="tb2">
                                <div class="tariff-box-inside">
                                    <h2>{all.zba.tarif[1].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.zba.tarif[1].speed}Мбіт/с</h2>
                                    <h2>{all.zba.tarif[1].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                            <div  class="tariff-box" id="tb3">
                                <div class="tariff-box-inside">
                                    <h2>{all.zba.tarif[2].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.zba.tarif[2].speed}Мбіт/с</h2>
                                    <h2>{all.zba.tarif[2].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                            <div  class="tariff-box" id="tb1">
                                <div class="tariff-box-inside">
                                    <h2>{all.zba.tarif[3].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.zba.tarif[3].speed}Мбіт/с</h2>
                                    <h2>{all.zba.tarif[3].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <input type="checkbox"  id="accordion-4" class="accordion-item-input" />
                    <label for="accordion-4" class="accordion-item-trigger">Ланівці І Шумськ</label>
                    <div className="accordion-item-content">
                    <div className="title-center"><h3>Для багатоповерхівок</h3></div>
                        <div className="tariff-boxes">
                            <div  class="tariff-box" id="tb1">
                                <div class="tariff-box-inside">
                                    <h2>{all.lan.tarif[0].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.lan.tarif[0].speed}Мбіт/с</h2>
                                    <h2>{all.lan.tarif[0].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                        </div>
                        <div className="title-center"><h3>Для приватного сектору</h3></div>
                        <div className="tariff-boxes">
                            <div  class="tariff-box" id="tb2">
                                <div class="tariff-box-inside">
                                    <h2>{all.lan.tarif[1].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.lan.tarif[1].speed}Мбіт/с</h2>
                                    <h2>{all.lan.tarif[1].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                            <div  class="tariff-box" id="tb3">
                                <div class="tariff-box-inside">
                                <h2>{all.lan.tarif[2].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.lan.tarif[2].speed}Мбіт/с</h2>
                                    <h2>{all.lan.tarif[2].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                            <div  class="tariff-box" id="tb1">
                                <div class="tariff-box-inside">
                                <h2>{all.lan.tarif[3].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.lan.tarif[3].speed}Мбіт/с</h2>
                                    <h2>{all.lan.tarif[3].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                            </div>
                            
                            <div  class="tariff-box" id="tb2">
                                <div class="tariff-box-inside">
                                <h2>{all.lan.tarif[4].name}</h2>
                                    <div class="tariff-icons">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <h2>До {all.lan.tarif[4].speed}Мбіт/с</h2>
                                    <h2>{all.lan.tarif[4].price} грн./міс.</h2>
                                    <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="tariff-order">
                    <h2 class="main-tariffs-title"><a name="Оформити тариф">Подати заявку</a></h2>
                    <div class="tariff-order-input">
                        <input id="type" type="text" placeholder="Населений пункт" required/>
                        <input id="name" type="text" placeholder="Ваше ім'я" required/>
                        <input id="phone" type="text" placeholder="Номер телефону" required/>
                        <button class="big-btn" onClick={requestTariff}>Підтвердити замовлення</button>
                    </div>
                </div>
            </article>
        </div>
        <footer className="container">
        <div className="main-footer" id="main-footer">
            <div className="footer-section">
                <img src="images/ArgoCom_logo.png" alt="" />
                <h5>Ваш надійний інтернет провайдер</h5>
            </div>
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

export default Tariff;
