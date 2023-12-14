import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'

function TariffRow(opts){
    let el = document.getElementsByClassName('select')
    console.log(el)
    $('.select').change(function() {
        var value = this.val();//to get content of "value" attrib
        var text = this.text();
        console.log( value + text)
    });
    $('.select').on('change',()=>{
        console.log(this)
    })
    return(
        <div  class="tariff-box" id="tb1">
            <div class="tariff-box-inside">
                <h2>Збараж ОПТИКА 10</h2>
                <div class="tariff-icons">
                    <i class="fas fa-laptop"></i>
                </div>
                <h2>До 10Мбіт/с</h2>
                <h2>155 грн./міс.</h2>
                <button class="big-btn"><a href="#Оформити тариф">Зробити замовлення</a> </button>
            </div>
        </div>
    )
} 

export default TariffRow;