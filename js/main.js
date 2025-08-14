import { getApiKey, setupSearchButton, setupClearButton } from './apiHandler.js';
import { displayResults } from './card.js';

// Initialisation clé API
getApiKey();

// Initialisation boutons
setupSearchButton(displayResults);
setupClearButton();
