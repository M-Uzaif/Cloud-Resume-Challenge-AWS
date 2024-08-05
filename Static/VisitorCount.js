async function updateVisitorCount() {
    const apiUrl = 'https://2e2yjgph22av6ybxe6liwqpacm0xjewu.lambda-url.ap-south-1.on.aws/'; // Replace with your Lambda URL
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('visitorCount').innerText = data.views; // Ensure the key matches the Lambda response
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitorCount').innerText = 'Error fetching visitor count';
    }
}

window.onload = updateVisitorCount;
