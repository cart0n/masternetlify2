import React from 'react';
import ReactDOM from 'react-dom';

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

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h3>
          Хочете підключити наші послуги?<br />Залиште свої данні і наш оператор зв'яжеться з Вами
        </h3>
        <div className="modal-form">
          <form>
                        <input id="type" type="text" placeholder="Населений пункт" required/>
                        <input id="name" type="text" placeholder="Ваше ім'я" required/>
                        <input id="phone" type="text" placeholder="Номер телефону" required/>
            <button class="modal-btn" onClick={requestTariff}>Підтвердити</button>
          </form>
          <div>
            <img src="images/call.png" alt="Operator image" />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;