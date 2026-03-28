document.addEventListener('DOMContentLoaded', () => {
    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (!themeToggle) {
        console.warn('Botão de alternância de tema não encontrado (#theme-toggle)');
        return;
    }

    function applyTheme(theme) {
        const isLight = theme === 'light';
        body.classList.toggle('light-mode', isLight);
        themeToggle.textContent = isLight ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
        applyTheme(savedTheme);
    } else {
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        applyTheme(prefersLight ? 'light' : 'dark');
    }

    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.toggle('light-mode');
        applyTheme(isLight ? 'light' : 'dark');



    });
});
