const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  setTimeout(() => {
    const textElement = document.getElementById('text');
    textElement.textContent = 'ボタンがクリックされました！';
}, 2000); 
});
