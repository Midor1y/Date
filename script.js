function showBear() {
    const bearContainer = document.getElementById('bear-container');
    
    // Создаем элемент для гифки
    const bearGif = document.createElement('img');
    bearGif.src = 'https://i.gifer.com/5ABQ.gif'; // Замените на вашу гифку
    bearGif.alt = 'Happy Bear';
    bearGif.classList.add('bear-gif');
    
    // Добавляем гифку в контейнер
    bearContainer.appendChild(bearGif);
}
