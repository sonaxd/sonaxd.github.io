document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const tours = document.querySelectorAll('.tour');
    const defaultBackground = getComputedStyle(body).backgroundImage;

    // Восстанавливаем сохраненный фон при загрузке страницы
    const savedBackground = localStorage.getItem('selectedBackground');
    if (savedBackground) {
        body.style.transition = 'none'; // Отключаем анимацию при начальной загрузке
        body.style.backgroundImage = savedBackground;
        // Включаем анимацию обратно после короткой задержки
        setTimeout(() => {
            body.style.transition = 'background-image 0.8s ease';
        }, 100);
    }

    tours.forEach(tour => {
        tour.addEventListener('click', () => {
            const tourBackground = getComputedStyle(tour).backgroundImage;
            
            // Плавно меняем фон
            body.style.transition = 'background-image 0.8s ease';
            body.style.backgroundImage = tourBackground;
            
            // Сохраняем выбранный фон
            localStorage.setItem('selectedBackground', tourBackground);
        });
    });

    // Добавим кнопку возврата к исходному фону
    const resetButton = document.createElement('button');
    resetButton.className = 'reset-background';
    resetButton.innerHTML = '↺';
    resetButton.title = 'Вернуть исходный фон';
    
    resetButton.addEventListener('click', () => {
        body.style.backgroundImage = defaultBackground;
        // Очищаем сохраненный фон
        localStorage.removeItem('selectedBackground');
    });

    document.body.appendChild(resetButton);
}); 