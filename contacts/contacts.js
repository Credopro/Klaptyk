function delayFunc(f, ms){
    return function() {
      setTimeout(() => f.apply(this, arguments), ms)
    }
}

function validateForm(formElement){
    let regExp={
        Name : /^[А-яA-z]{1,15}-{0,1}[А-яA-z]{1,15}$/,
        Phone : /^\d{3,3}-{0,1}\d{3,3}-{0,1}\d{2,2}-{0,1}\d{2,2}$/,
        Email : /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}$/,
        Message : /[^<]/
    };
    let errMess={
        notName : 'Введіть ім\'я',
        badName : 'Не правильно ведено ім\'я',
        notEmail : 'Введіть email',
        badEmail : 'Не правильно ведено email',
        notPhone : 'Введіть № телефону',
        badPhone : 'Не коректне введення: 000-000-00-00',
        notMessage : 'Введіть текст',
        badMessage : 'Заборонений символ'
    };
    let error_mess='';
    let regularExp = regExp[formElement.name];
        if(formElement.value ==''){
            error_mess = errMess['not'+formElement.name];
            formElement.nextElementSibling.style.display='inline-block';
            formElement.nextElementSibling.innerHTML = error_mess;
            formElement.style.border = "1px solid red";
            return false;
        }
        else if (!regularExp.test(formElement.value)){
            error_mess = errMess['bad'+formElement.name];
            formElement.nextElementSibling.style.display='inline-block';
            formElement.nextElementSibling.innerHTML = error_mess;
            formElement.style.border = "1px solid red";
            return false;
        }
        else{
            formElement.nextElementSibling.innerHTML = '';
            formElement.nextElementSibling.style.display='none';
            formElement.style.border = "none";
            formElement.style.borderBottom = "1px dotted #000";
            return true;
        }
    }
let validateDelay = delayFunc(validateForm, 1000);

function buttonDisabled(){
    let formElem = document.getElementById('contForm');
    if(formElem[0].value !== '' && formElem[1].value !== '' && formElem[2].value !== '' && formElem[3].value !== '') formElem[4].removeAttribute("disabled");
    else formElem[4].setAttribute("disabled", "true");
}
function formSubmission(data) {
    let i=0;
    let logicArr = [];
    while(i < data.length-1){
        if (!validateForm(data[i])) logicArr.push(false);
        i++;
    }
    console.log(logicArr);
    debugger;
    if(logicArr.length > 0) return false;
    else return true;
}

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

