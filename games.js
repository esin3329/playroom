const games = [
  { id: 'last-ember', title: '라스트엠버', art: 'afterglow.webp', url: 'https://esin3329.github.io/last-ember/' },
  { id: 'neon-bester', title: '네온베스터', art: 'neon-drive.webp', url: 'https://esin3329.github.io/neon-bastion/' }
];
const list = document.querySelector('#games');
const dialog = document.querySelector('dialog');
for (const game of games) {
  const card = document.createElement('button');
  card.className = 'card';
  card.dataset.game = game.id;
  const image = new Image();
  image.src = game.art;
  image.alt = '';
  const title = document.createElement('strong');
  title.textContent = game.title;
  card.append(image, title);
  list.append(card);
}
document.addEventListener('click', event => {
  const card = event.target.closest('[data-game]');
  if (!card) return;
  const game = games.find(item => item.id === card.dataset.game);
  document.querySelector('#detail-art').src = game.art;
  document.querySelector('#detail-title').textContent = game.title;
  document.querySelector('#play').href = game.url;
  dialog.showModal();
});
document.querySelector('.close').onclick = () => dialog.close();
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
