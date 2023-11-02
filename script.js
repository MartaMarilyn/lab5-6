let formBtn = document.querySelector('.btn')
let form = document.querySelector('#form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let fields = document.querySelectorAll('.enter');
    let flag = true;
    deleteErrorMsg()
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value.trim() === '') {
            flag = false;
            let errorMsg = document.createElement('p');
            errorMsg.className = 'trable'
            errorMsg.textContent = 'Введите данные';
            errorMsg.style.margin = 0;
            errorMsg.style.color = 'red';
            fields[i].parentNode.appendChild(errorMsg);
        }
    }
    if (!EmailCheck()) {flag=false}
    if (flag) {form.submit();}
  })

    
  let deleteErrorMsg = function () {
    let errorElements = form.querySelectorAll('.trable')
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove()
    }
  }

  function EmailCheck() {
    let mailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let mail = email.value;
    if(!mailPattern.test(mail)) {
       alert('Некорректный e-mail');
       return false;
    }
 }