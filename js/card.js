export function displayResults(result, container) {
    container.innerHTML = ''; // On vide l'affichage

    let animeList = [];

    // Cas 1 : recherche par titre → result.data = tableau
    if (result.data && Array.isArray(result.data)) {
        animeList = result.data;
    }
    // Cas 2 : recherche par ID ou par ranking → result = objet unique
    else if (result && typeof result === 'object') {
        animeList = [result]; // on met l'objet dans un tableau
    }

    if (animeList.length === 0) {
        container.innerHTML = '<p>Aucun résultat trouvé.</p>';
        return;
    }

    animeList.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('anime-card');

        card.innerHTML = `
            <h3>${anime.title || 'Titre indisponible'}</h3>
            <img src="${anime.image || 'placeholder.jpg'}" alt="${anime.title || 'Image indisponible'}">
            <p><strong>Synopsis :</strong> ${anime.synopsis || 'N/A'}</p>
            <p><strong>Genres :</strong> ${anime.genres && anime.genres.length ? anime.genres.join(', ') : 'N/A'}</p>
            <p><strong>Classement :</strong> ${anime.ranking || 'N/A'}</p>
            <p><strong>Nombre d'épisodes :</strong> ${anime.episodes || 'N/A'}</p>
        `;

        container.appendChild(card);
    });
}
