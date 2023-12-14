
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import storage from 'local-storage-fallback';
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';
import useTheme from './useTheme';
import ToggleMode from './ToggleMode';
import style from 'styled-theming';
import Home from './links/home';
import Actions from './links/action';
import News from './links/news';
import Tariff from './links/tariff';
import Support from './links/support';
import login from './links/login';
import Contacts from './links/contacts';
import { Route } from 'react-router-dom';
import Modal from "./Modal";
import useModal from './useModal';


const getBackground = style('mode', {
  light: '#fff',
  dark: '#292929'
});

const getHeaderBackground = style('mode', {
    light: '#fff',
    dark: '#363636'
  });

const getForeground = style('mode', {
  light: '#000',
  dark: '#fff'
});

const getScroll = style('mode', {
    light: '#ccd5e4',
    dark: '#696969'
  });

  const getShadow = style('mode', {
    light: '0 0 20px rgba(0,0,0, .20)',
    dark: '0 0 30px rgba(140,140,140, .50)'
  });

  const getHoverShadow = style('mode', {
    light: '0 0 20px rgba(0,0,0, .65)',
    dark: '0 0 30px rgba(140,140,140, .90)'
  });

  const getBG1 = style('mode', {
    light: 'tariff1',
    dark: 'darktariff2'
  });

  const getBG2 = style('mode', {
    light: 'tariff2',
    dark: 'darktariff1'
  });

  const getBG3 = style('mode', {
    light: 'tariff3',
    dark: 'darktariff3'
  });
  


const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}

header{
    background-color: ${getHeaderBackground} ;
}

header a{
    color: ${getForeground} ;
}

a{
  color: ${getForeground} ;
}

::-webkit-scrollbar-thumb{
    background-color: ${getScroll}
}

input{
  background-color: ${getHeaderBackground}
  color: ${getForeground};
}

.select{
  background-color: ${getHeaderBackground}
  color: ${getForeground};
}

.news{
  box-shadow: ${getShadow};
}

.news:hover{
  box-shadow: ${getHoverShadow};
}

.modal{
  background-color: ${getBackground};
  color: ${getForeground};
}

#tb1:hover::before{
  background-image: url(images/${getBG1}.jpg);
}
#tb2:hover::before{
  background-image: url(images/${getBG2}.jpg);
}
#tb3:hover::before{
  background-image: url(images/${getBG3}.jpg);
}

.menu__box {
  background-color: ${getHeaderBackground};
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  background-color: ${getForeground};
}

.menu__item {
  color: ${getForeground}
}

.accordion-item-trigger::before,  
.accordion-item-trigger::after{
  background-color: ${getForeground};
}

.answers-accordion-item-trigger::before,  
.answers-accordion-item-trigger::after{
  background-color: ${getForeground};
}

.contact-box{
  background-color: ${getHeaderBackground};
}
`;

function App () {

  // get data
 



  const theme = useTheme();
  const [users, setUsers] = useState([]);
  const {isShowing, toggle} = useModal();

  
  return (
    <div className="App">
      <noscript>You need to enable JavaScript to run this app.</noscript>
        <header class="container">
          <nav class="hide-nav">
              <a href=""></a>
              <ul>
                  <li><a href="">Акції</a></li>
                  <li><a href="">Новини</a></li>
                  <li><a href="">Тарифи</a></li>
                  <li><a href="">Підтримка</a></li>
                  <li><a href="">Контакти</a></li>
                  <li><a href="">Передзвоніть мені</a></li>
              </ul>
          </nav>
          <div class="top-header">
    
              <div class="dark-theme">
                  <i class="fas fa-sun"></i>
                  <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <ToggleMode />
                </ThemeProvider>
                  <i class="fas fa-moon"></i>
              </div>
              <a href="/"><img src="images/ArgoCom_logo.png" alt="Logotype"></img></a>
          
              <div class="login">
                  <button href="" class="login-nav" id="call" onClick={toggle}><i class="fas fa-phone-alt"></i>  Підключитись до нас</button>
                  <Modal
                    isShowing={isShowing}
                    hide={toggle}
                  />
                  <div class="hamburger-menu login-icon">
                      <input id="menu__toggle" type="checkbox" />
                      <label class="menu__btn" for="menu__toggle">
                        <span></span>
                      </label>
                  
                      <ul class="menu__box">
                        <li><a class="menu__item" href="/Акції"><i className="fas fa-tags"></i>Акції</a></li>
                        <li><a class="menu__item" href="/Новини"><i className="fas fa-newspaper"></i>Новини</a></li>
                        <li><a class="menu__item" href="/Тарифи"><i className="fas fa-piggy-bank"></i>Тарифи</a></li>
                        <li><a class="menu__item" href="/Підтримка"><i className="fas fa-question"></i>Підтримка</a></li>
                        <li><a class="menu__item" href="/Контакти"><i  className="fas fa-map-marker-alt"></i>Контакти</a></li>
                        <li><button onClick={toggle} class="menu__item"><i class="fas fa-phone-alt"></i>  Підключитись до нас</button></li>
                      </ul>
                    </div>
              </div>
          </div>
          <div class="bottom-header">
              <nav class="header-nav">
                  <a href="/Акції"><i></i>Акції</a>
                  <a href="/Новини"><i></i>Новини</a>
                  <a href="/Тарифи"><i></i>Тарифи</a>
                  <a href="/Підтримка"><i></i>Підтримка</a>
                  <a href="/Контакти"><i></i>Контакти</a>
              </nav>
          </div>
        </header>
          <Route path='/' exact component={Home} />
          <Route path='/Акції' component={Actions} />
          <Route path='/Новини' component={News} />
          <Route path='/Тарифи' component={Tariff} />
          <Route path='/Підтримка' component={Support} />
          <Route path='/Контакти' component={Contacts} />
          <Route path='/login' component={login} />
        </div>
      );

}

export default App;