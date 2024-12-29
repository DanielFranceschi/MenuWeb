// Seleciona o botão toggle e a lista de categorias
const toggleButton = document.querySelector('.menu-navbar__toggle');
const categoriesMenu = document.querySelector('.menu-navbar__categories');
const categoryLinks = document.querySelectorAll('.menu-navbar__categories li a');

// Alterna o menu ao clicar no botão
toggleButton.addEventListener('click', () => {
    categoriesMenu.classList.toggle('hidden');
});

// Fecha o menu ao clicar em um link de categoria e ajusta o scroll
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Fecha o menu
        categoriesMenu.classList.add('hidden');

        // Ajusta o scroll para o elemento-alvo
        const targetId = link.getAttribute('href'); // Obtém o ID do destino (ex.: #categoria)
        const targetElement = document.querySelector(targetId);
        const offset = 90; // Altura do menu fixo (ajuste conforme necessário)

        if (targetElement) {
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - offset;

            // Rola suavemente para a posição ajustada
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Rolagem suave
            });
        }
    });
});
