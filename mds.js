let mds = {
  textField: function() {
    let label = document.querySelector('.mds-text-field__label');
    let border = document.querySelector('.mds-text-field__border-bottom');

    if (typeof textField.value === 'string' && textField.value.length) {
      textField.classList.add('mds-text-field__input--active');
    } else {
      textField.classList.remove('mds-text-field__input--active');

    }
  },
  switch: {

  },
  checkbox: {

  },
  radioButton: {

  },
};
