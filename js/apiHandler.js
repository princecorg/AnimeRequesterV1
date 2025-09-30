let API_KEY = null;
const API_HOST = "anime-db.p.rapidapi.com";

export function getApiKey() {
    if (!API_KEY) {
        API_KEY = prompt("Veuillez saisir votre clé API RapidAPI :");
        if (!API_KEY) alert("Clé API manquante, le projet ne fonctionnera pas.");
    }
    return API_KEY;
}

// Requête API : nécessite l'hôte, l'endpoint (titre, rang, classement) et les paramètres
export async function apiRequest(endpoint, params = {}) {
    if (!API_KEY) API_KEY = getApiKey();

    const url = new URL(`https://${API_HOST}${endpoint}`);
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            url.searchParams.append(key, value);
        }
    });

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            "X-RapidAPI-Host": API_HOST,
            "X-RapidAPI-Key": API_KEY
        }
    });
    
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}


export function setupSearchButton(displayResults) {
    document.getElementById('searchBtn').addEventListener('click', async () => {
        const endpoint = document.getElementById('endpoint').value;
        const val = document.getElementById('param').value.trim();
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = "<p>Chargement ...</p>";

        try {
            let result;
            switch (endpoint) {
                case 'search':
                    if (!val) throw new Error('Entrez un titre.');
                    result = await apiRequest('/anime', { search: val, page: 1, size: 25 });
                    break;
                case 'by-id':
                    if (!val) throw new Error('Entrez un ID.');
                    result = await apiRequest(`/anime/by-id/${encodeURIComponent(val)}`);
                    break;
                case 'by-ranking':
                    const rank = val && !isNaN(Number(val)) ? Number(val) : 1;
                    result = await apiRequest(`/anime/by-ranking/${rank}`);
                    break;
                default: throw new Error("Endpoint inconnu.");
            }
            console.log("Résultat API :", result);
            displayResults(result, resultsDiv);
        } catch (err) {
            resultsDiv.innerHTML = `<p style="color:red;">Erreur : ${err.message}</p>`;
        }
    });
}

export function setupClearButton() {
    document.getElementById('clearBtn').addEventListener('click', () => {
        document.getElementById('param').value = '';
        document.getElementById('results').innerHTML = '';
    });
}
