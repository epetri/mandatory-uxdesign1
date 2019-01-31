let textField = document.querySelector('.mds-text-field__input');
let switchbox = document.querySelector('.mds-switch__track');
let checkbox = document.querySelectorAll('.mds-checkbox__input');
let radioButton = document.querySelectorAll('.mds-radio-btn__input');
let buttons = document.querySelectorAll('.mds-button');
let textFieldBox = document.querySelector('.mds-text-field');

textField.addEventListener('blur', mds.textField);


//============================buttons=================================================

for(let button of buttons) {
button.addEventListener('click', function() {
  if(button.id === 'disable'){
  textField.classList.add('.mds-text-field__input--disabled');
  textField.setAttribute('disabled', true );
  textFieldBox.setAttribute('style', 'opacity: 0.3;');

  switchbox.classList.add('.mds-switch__track--disabled');
  switchbox.setAttribute('disabled', true);


  for (let box of checkbox) {
    box.classList.add('.mds-checkbox__input--disabled');
    box.setAttribute('disabled', true);
  }

  for (let radio of radioButton){
    radio.classList.add('.mds-radio-btn__input--disabled');
    radio.setAttribute('disabled', true);
  }

} else if (button.id === 'reset'){
  textField.classList.remove('.mds-text-field__input--disabled');
  textField.removeAttribute('disabled', true);
  textFieldBox.removeAttribute('style', 'opacity: 0.3;');

  switchbox.classList.remove('.mds-switch__track--disabled');
  switchbox.removeAttribute('disabled', true);

  for (let box of checkbox) {
    box.classList.remove('.mds-checkbox__input--disabled');
    box.removeAttribute('disabled', true);
  }

  for (let radio of radioButton){
    radio.classList.remove('.mds-radio-btn__input--disabled');
    radio.removeAttribute('disabled', true);
      }
    }
  });
}
