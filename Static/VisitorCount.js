
async function updateVisitorCount() {
    const apiUrl = 'https://2e2yjgph22av6ybxe6liwqpacm0xjewu.lambda-url.ap-south-1.on.aws/'; // Replace with your API Gateway URL
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('visitorCount').innerText = data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
    }
}

window.onload = updateVisitorCount;
