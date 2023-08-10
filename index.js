document.getElementById('searchButton').addEventListener('click', async () => {
    const keyword = document.getElementById('keywordInput').value;
    if (keyword.trim() === '') {
        alert('Please enter a keyword');
        return;
    }
    
    const youtubeSearchVolume = await fetchYouTubeSearchVolume(keyword);

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `Keyword: ${keyword}<br>YouTube Search Volume: ${youtubeSearchVolume}`;
});

async function fetchYouTubeSearchVolume(keyword) {
    const apiKey = 'youtube_Api_Key';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(keyword)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const totalResults = data.pageInfo.totalResults;
        return totalResults;
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        return 'N/A';
    }
}


