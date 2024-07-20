const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const textElement = document.getElementById('text');
    textElement.textContent = 'ボタンがクリックされました！';
});
