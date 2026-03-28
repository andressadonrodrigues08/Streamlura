document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profiles .profile');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const figure = link.querySelector('figure');
            const name = figure?.querySelector('figcaption')?.textContent?.trim();
            const imageSrc = figure?.querySelector('img')?.src || figure?.querySelector('img')?.getAttribute('src');

            if (name && imageSrc) {
                localStorage.setItem('perfilAtivoNome', name);
                localStorage.setItem('perfilAtivoImagem', imageSrc);
            }
        });
    });
});
