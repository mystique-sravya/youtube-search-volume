document.getElementById('searchButton').addEventListener('click', async () => {
    const keyword = document.getElementById('keywordInput').value;
    
    if (keyword.trim() === '') {
        alert('Please enter a keyword');
        return;
    }

    const today = new Date();
    const startDate = formatDate(today);
    const endDate = formatDate(today);

    const youtubeAverageTotalResultsPerMonth = await fetchYouTubeAverageTotalResultsPerMonth(keyword, startDate, endDate);

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `Keyword: ${keyword}<br>Average Total Results per Month: ${youtubeAverageTotalResultsPerMonth}`;
});

async function fetchYouTubeAverageTotalResultsPerMonth(keyword, startDate, endDate) {
    const apiKey = 'youtube_api_key';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(keyword)}&key=${apiKey}&publishedAfter=${startDate}&publishedBefore=${endDate}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const totalResults = data.pageInfo.totalResults;
        const totalMonths = 12; 
        const averageTotalResultsPerMonth = totalResults / totalMonths;

        return averageTotalResultsPerMonth;
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        return 'N/A';
    }
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}T00:00:00Z`; // Format as ISO 8601 date and time
}

