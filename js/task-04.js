
  const button = {
      dec: document.querySelector('[data-action="decrement"]'),
      inc: document.querySelector('[data-action="increment"]'),
      span: document.querySelector('#value'),
  };

  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
    button.span.textContent = counterValue;
  };

  const decrement = () => {
    counterValue -= 1;
    button.span.textContent = counterValue;
  };


  button.dec.addEventListener('click', increment);
  button.inc.addEventListener('click', decrement);
