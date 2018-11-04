
const regExp={
    Name : /^[А-яA-z]{1,15}-{0,1}[А-яA-z]{1,15}$/,
    Phone : /^\d{3,3}-{0,1}\d{3,3}-{0,1}\d{2,2}-{0,1}\d{2,2}$/,
    Email : /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}$/
};
const errMess={
    notName : 'Введіть ім\'я',
    badName : 'Не правильно ведено ім\'я',
    notEmail : 'Введіть email',
    badEmail : 'Не правильно ведено email',
    notPhone : 'Введіть № телефону',
    badPhone : 'Не коректне введення: 000-000-00-00'
};

function debounce(f, ms) {
    let timer = null;
    return function (...args) {
      const onComplete = () => {
        f.apply(this, args);
        timer = null;
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(onComplete, ms);
    };
};

function errorMessages(formElement, adWord = null){
    let errorElement = formElement.nextElementSibling;
    if(adWord === null){
        this.className ='feedback';
        errorElement.className = 'form-error';
        errorElement.innerHTML = '';
    } else {
        this.className ='feedback invalid';
        errorElement.className = 'form-error invalid';
        errorElement.innerHTML = errMess[adWord+formElement.name];
    }
};

function validateForm(formElement){
    let regularExp = regExp[formElement.name];
    if(formElement.value.length === 0){
        errorMessages(formElement, 'not');
        return false;
    }
    else if (!regularExp.test(formElement.value)){
        errorMessages(formElement, 'bad');
        return false;
    }
    else{
        errorMessages(formElement);
        return true;
    }
};

const form = document.getElementById('contForm');
const validateDelay = debounce(validateForm, 1000);
form[0].addEventListener("input", function(){validateDelay(form[0])});
form[1].addEventListener("input", function (){validateForm(form[1]);},false);
form[2].addEventListener("input", function (){validateForm(form[2]);},false);
form.addEventListener("submit", 
    function (event){ if (validateForm(form[0])
    && validateForm(form[1])
    && validateForm(form[2])) {}
    else {event.preventDefault()};
}, false);

/*request*/
$(function(){
  'use strict';
    $('#contForm').on('submit', function(e){ 
      e.preventDefault();
      var fd = new FormData( this );
      $.ajax({
        url: './php/mail.php',
        type: 'POST',
        contentType: false, 
        processData: false, 
        data: fd,
        beforeSend:function(){
          $("button").html('<p class="loadAnime"><span class=""></span></p>');
        },
        success: function(msg){
          if(msg == 'ok') {
            $("button").html("Відправлено");
            $("input").val("");
            $("textarea").val("");
            setTimeout(function() {$("button").html("Надіслати");}, 3000);
          } else {
            $("button").html("Помилка");
            setTimeout(function() {$("button").html("Надіслати");}, 3000);
          }
        }
      });
    });
});
