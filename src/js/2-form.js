const formn = document.querySelector('.feedback-form');

const messagen = document.querySelector('textarea[name="message"]');
const emailmn = document.querySelector('input[name="email"]');

formData.addEventListener('input', () => {
  const feedbackFormState = {
    message: messagen.value,
    email: emailmn.value,
  };

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});

const st = localStorage.getItem('feedback-form-state');

if (st) {
  const parsedo = JSON.parse(st);
  messagen.value = parsedo.message;
  emailmn.value = parsedo.emailmn;
}

const inputpl = document.querySelectorAll('input');

inputpl.forEach(o => {
  o.addEventListener('focus', event => {
    // event.target.setAttribute("placeholder", "Type area");
    event.target.placeholder = 'Type area';
  });

  o.addEventListener('blur', event => {
    // event.target.setAttribute("placeholder", "");
    event.target.placeholder = '';
  });
});

formn.addEventListener('submit', event => {
  event.preventDefault();

  if ( emailmn.value === '' || messagemn.value === '') {
    return console.log('Please fill in all the fields!');
  } else {
    console.log(`email - ${emailmn.value}, message - ${messagemn.value}`);
  }

  feedbackFormState = {
    message: messagen.value,
    email: emailmn.value,
  };
  console.log(messagen.value);
  console.log(emailmn.value);
  localStorage.removeItem(feedbackFormState);
  formn.reset();
});
