
async function updateVisitorCount() {
    const apiUrl = 'https://YOUR_API_GATEWAY_URL'; // Replace with your API Gateway URL
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('visitorCount').innerText = data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
    }
}

window.onload = updateVisitorCount;
