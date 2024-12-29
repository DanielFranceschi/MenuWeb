// Seleciona o botão toggle e a lista de categorias
const toggleButton = document.querySelector('.menu-navbar__toggle');
const categoriesMenu = document.querySelector('.menu-navbar__categories');
const categoryLinks = document.querySelectorAll('.menu-navbar__categories li a');

// Alterna o menu ao clicar no botão
toggleButton.addEventListener('click', () => {
    categoriesMenu.classList.toggle('hidden');
});

// Função para rolar suavemente controlando a velocidade
function smoothScroll(target, offset = 70, duration = 1000) {
    const start = window.pageYOffset;
    const targetPosition = target.offsetTop - offset;
    const distance = targetPosition - start;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Fecha o menu ao clicar em um link de categoria e ajusta o scroll
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Fecha o menu
        categoriesMenu.classList.add('hidden');

        // Ajusta o scroll para o elemento-alvo
        const targetId = link.getAttribute('href'); // Obtém o ID do destino (ex.: #categoria)
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            smoothScroll(targetElement, 89, 1000); // Offset de 89 e duração de 1000ms (1s)
        }
    });
});
