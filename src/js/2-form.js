const formData = {
  email: '',
  message: '',
};
document.addEventListener('DOMContentLoaded', () => {
  function adding_structure(formData) {
    const formData = document.querySelector('.feedback-form');

    const message = formData.elements.message;
    const email = formData.elements.email;

    const feedbackFormState = '';

    message.value = localStorage.getItem(feedbackFormState) ?? '';
    email.value = localStorage.getItem(feedbackFormState) ?? '';

    formData.addEventListener('input', event => {
      localStorage.setItem(feedbackFormState, event.target.value);
    });

    formData.addEventListener('submit', event => {
      event.preventDefault();
      console.log(event.target.elements.message.value);
      localStorage.removeItem(feedbackFormState);
      formData.reset();
    });

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
  }
  adding_structure(formData);
});
