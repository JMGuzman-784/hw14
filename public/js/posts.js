const postBtn = document.querySelector('#submitBtn')
const newFormHandler = async function (event) {
  event.preventDefault();
  console.log('post should be posted');
  const message = document.querySelector('#message-input').value;
  const categories = document.querySelector('#dropdown-input').value;

  await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      message,
      categories,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/');
};

postBtn.addEventListener('click', newFormHandler);

// document
//   .querySelector('.posts-message')
//   .addEventListener('submit', newFormHandler);
