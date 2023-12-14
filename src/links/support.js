import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "../Modal";
import useModal from '../useModal';

function requestProblem() {
    var data = "city=" +  document.getElementById("city").value + "&" + "type=" +  document.getElementById("type").value + "&" + "name=" +  document.getElementById("name").value + "&" + "phone=" + document.getElementById("phone").value;
    // до виду: змінна=знач&змінна2=знач2
    // var data = {name : document.getElementById("name").value, phone : document.getElementById("phone").value};
    // data = JSON.stringify(data);
    console.log(data)
    fetch("/problem", {  
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
  

function Support() {
    const {isShowing, toggle} = useModal();
  return (
    <main>
    <section class="container support-first-page">
        <div class="background-place">
            <div class="support-top-nav">
                <a href="/">Головна</a>
                <i class="fas fa-long-arrow-alt-right"></i>
                <a>Підтримка</a>
            </div>
            <h1>Підтримка</h1>

            <h2>Зворотній зв'язок</h2>

            <div class="support-btns">
                <div>
                    <h3>Сповістити про проблему</h3>
                    <button class="pulse"  onClick={toggle}><a href="#Оформити тариф" class="fas fa-phone-alt"></a></button>

                </div>
            </div>
        </div>
    </section>
    <section class="support-ref">
    <h2>Відповіді на популярні запитання</h2>
    <div class="answers">
    <div class="accordion-item" id="margn">
            <input type="checkbox" id="accordion-1" class="accordion-item-input" />
            <label for="accordion-1" class="answers-accordion-item-trigger">Як укласти договір на підключення до Інтернету?</label>
            <div class="accordion-item-content">
            Потрібно просто залишити заявку на підключення. Договір із Вами укласти наш спеціаліст при підключенні. Для цього вам достатньо мати при собі паспорт.
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-2" class="accordion-item-input" />
            <label for="accordion-2" class="answers-accordion-item-trigger">Як переоформити договір на іншу людину?</label>
            <div class="accordion-item-content">
            Щоб переоформити договір на іншу особу, Вам необхідно приїхати в найблище для вас відділення Argocom з тією людиною, на яку необхідно переоформити договір та написати заяву на переоформлення. Обов'язково мати при собі паспорти
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-3" class="accordion-item-input" />
            <label for="accordion-3" class="answers-accordion-item-trigger">Як можна залишити заявку на підключення?</label>
            <div class="accordion-item-content">
            1. Через сайт<br></br>
            2. Завітавши в наше відділення<br></br>
            3. Зателефонувати на номер +380098363598 чи написавши на електронну пошту Abon@argocom.te.ua
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-4" class="accordion-item-input" />
            <label for="accordion-4" class="answers-accordion-item-trigger">Чи є можливість підключення на мою адресу?</label>
            <div class="accordion-item-content">
            Технічну можливість Ви можете уточнити, звернувшись до контакт-центру за телефоном +380098363598 або залишиввши заявку на дзвінок на цьому сайті
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-5" class="accordion-item-input" />
            <label for="accordion-5" class="answers-accordion-item-trigger">У який період потрібно оплачувати послуги?</label>
            <div class="accordion-item-content">
            Платежі на всіх тарифних планах авансові. На тарифах з помісячною тарифікацією Вам необхідно вносити повну вартість тарифного плану на початок нового розрахункового періоду. На тарифних планах із подобовою тарифікацією Ви можете вносити абонентську плату частинами.
            </div>
        </div>
    </div>
    </section>
    <section class="support-ref">
        <h2>Помилки при підключенні</h2>
        <div class="answers">
            <div class="accordion-item" id="margn2">
                <input type="checkbox" id="accordion-10" class="accordion-item-input" />
                <label for="accordion-10" class="answers-accordion-item-trigger">Помилка 691</label>
                <div class="accordion-item-content">
                1. Відсутні кошти на особовому рахунку<br></br>
                2. Невірний логін або пароль<br></br>
                3. Користувач заблокований адміністратором. Звернутись за тел. 23-65-86, 42-38-89
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-11" class="accordion-item-input" />
                <label for="accordion-11" class="answers-accordion-item-trigger">Помилка 800</label>
                <div class="accordion-item-content">
                Локалізація проблеми:<br></br>
                1. Перевірити чи працює локальна мережа в даний час.<br></br>
                2. Перевірити проходження сигналу за допомогою командою ping, пропінгувавши спочатку шлюз, а потім сервер авторизації:<br></br>
                Натисніть наступні кнопки "Пуск"-"Выполнить". В полі вводу наберіть наступні команди.<br></br>
                Наприклад:<br></br>
                ping 172.18.18.18 -t<br></br>
                де в даному випадку 172.18.18.18 - сервер VPN доступу. <br></br>
                Якщо у відкритому DOS-вікні Ви побачите щось на зразок "Заданный узел недоступен" або "Превышен интервал ожидания дла запроса", то проблема полягає у Вашому комп'ютері або лінії зв'язку. 
                Якщо вузол відкликнеться із певною швидкістю (зазвичай це дуже швидко відбувається і вікно швидко зникає), то проблема ймовірно у Вашому комп'ютері.<br></br>
                3. Перезавантажте комп'ютер.

                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion13" class="accordion-item-input" />
                <label for="accordion-13" class="answers-accordion-item-trigger">Помилка 650</label>
                <div class="accordion-item-content">
                Недоступний сервер доступу в Інтернет. Перевірте, чи увімкнуте "Подключение по локальной сети" ("Пуск" - "Панель управления" - "Сетевые подключения"), чи налаштування відповідають анкеті користувача.
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-14" class="accordion-item-input" />
                <label for="accordion-14" class="answers-accordion-item-trigger">Помилка 733</label>
                <div class="accordion-item-content">
                Натисніть "Пуск" - "Настройка" - "Панель управления" - "Сетевые подключения." <br></br>
                Клікніть правою клавішею миші по ВПН-іконці підключення до Інтернету. Натисність Свойства. Виберіть вкладку Сеть. Заберіть галочки зі всіх протоколів, крім Протокола Интернета и QoS. Перепідключіться.
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-15" class="accordion-item-input" />
                <label for="accordion-15" class="answers-accordion-item-trigger">Помилка 735</label>
                <div class="accordion-item-content">
                Ви невірно налаштували VPN-з'єднання для доступу в мережу Інтернет. Ймовірніше в налаштуванні TCP/IP з'єднання VPN ви прописали якусь IP-адресу, яка повинна видаватись автоматично.
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-16" class="accordion-item-input" />
                <label for="accordion-16" class="answers-accordion-item-trigger">Помилка 789</label>
                <div class="accordion-item-content">
                Зайдіть в налаштування VPN з'єднання і на вкладці "Сеть" зі списку "Тип VPN" оберіть пункт "Автоматически". Спробуйте заново з'єднатись.
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-17" class="accordion-item-input" />
                <label for="accordion-17" class="answers-accordion-item-trigger">Помилки 741, 742, 743</label>
                <div class="accordion-item-content">
                Зайдіть у налаштування VPN з'єднання і у вкладці "Безопасность" відключіть пункт "Требуется шифрование данных (иначе отключаться)"
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-18" class="accordion-item-input" />
                <label for="accordion-18" class="answers-accordion-item-trigger">Помилки 600, 601, 603, 606</label>
                <div class="accordion-item-content">
                Перезавантажте комп'ютер. Якщо помилка не зникла, спробуйте перевстановити VPN-з'єднання. Перевірте Ваш комп'ютер на наявність вірусної активності.<br></br> 
                Видаліть недавно встановлені програми, або відмініть недавні зміни в налаштуванні Windows, якщо такі були.
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-19" class="accordion-item-input" />
                <label for="accordion-19" class="answers-accordion-item-trigger">Помилка 619</label>
                <div class="accordion-item-content">
                У властивостях VPN з'єднання відкрийте вкладку "Безопасность". Переконайтесь, що обрано пункт "Обычные (рекомендуемые параметры)" також відсутня галочка "Требуется шифрование данных (иначе отключаться)". Перезавантажте комп'ютер і спробуйте з'єднатись ще раз. <br></br>
                Перевірте налаштування вашого брандмауера, якщо ви не впевнені у вірності конфігурації - вимкніть його.<br></br>
                Якщо при команді ping Ваш комп'ютер на отримує відповіді, значить проблема в мережі та необхідно проінформувати за тел. 23-65-86, 42-38-89
                </div>
            </div>
        </div>
    </section>
    <div class="tariff-order">
                    <h2 class="main-tariffs-title"><a name="Оформити тариф">Розкажіть про проблему і ми її вирішимо</a></h2>
                    <div class="tariff-order-input">
                        <input id="city" type="text" placeholder="Населений пункт" required/>
                        <input id="type" type="text" placeholder="Тип проблеми" required/>
                        <input id="name" type="text" placeholder="Ваше ім'я" required/>
                        <input id="phone" type="text" placeholder="Номер телефону" required/>
                        <button class="big-btn" onClick={requestProblem}>Підтвердити</button>
                    </div>
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
                    <p className="districts-footer">[Хоростків]</p>
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
    </main>
  );
}

export default Support;
