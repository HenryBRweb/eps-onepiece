const totalEpisodes = 1000;

const languages = {
    en: {
        title: "One Piece Episode Counter",
        episodeLabel: "Select an episode:"
    },
    pt: {
        title: "Contador de Episódios de One Piece",
        episodeLabel: "Selecione um episódio:"
    },
    es: {
        title: "Contador de Episodios de One Piece",
        episodeLabel: "Selecciona un episodio:"
    }
};

function populateEpisodes() {
    const select = document.getElementById('episode-select');
    for (let i = 1; i <= totalEpisodes; i++) {
        const option = document.createElement('option');
        option.text = 'Episode ' + i;
        option.value = i;
        select.add(option);
    }
}

function updateCounter() {
    const selectedEpisode = document.getElementById('episode-select').value;
    document.getElementById('selected-episode-number').innerText = selectedEpisode;
}

function changeLanguage() {
    const selectedLanguage = document.getElementById('language-select').value;
    document.getElementById('title').innerText = languages[selectedLanguage].title;
    document.getElementById('episode-label').innerText = languages[selectedLanguage].episodeLabel;
}

function goToEpisode() {
    const selectedEpisode = document.getElementById('episode-select').value;
    if (selectedEpisode === "1") {
        window.location.href = 'episodio1.html';
    } else {
        updateCounter();
    }
}

document.getElementById('language-select').addEventListener('change', changeLanguage);
document.getElementById('episode-select').addEventListener('change', updateCounter);
document.getElementById('go-to-episode').addEventListener('click', goToEpisode);

populateEpisodes();
