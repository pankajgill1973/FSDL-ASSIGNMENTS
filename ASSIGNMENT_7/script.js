const form = document.getElementById('form');
const list = document.getElementById('list');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    subject: document.getElementById('subject').value,
    rating: document.getElementById('rating').value,
    message: document.getElementById('message').value
  };

  await fetch('/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  form.reset();
  loadData();
});

async function loadData() {
  const res = await fetch('/api/feedback');
  const data = await res.json();

  list.innerHTML = '';

  data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p><b>Subject:</b> ${item.subject}</p>
      <p><b>Rating:</b> ⭐ ${item.rating}</p>
      <p>${item.message}</p>
    `;

    list.appendChild(div);
  });
}

loadData();
