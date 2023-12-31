// Fetch JSON data and display all top chatters with ranks, sorted by message counts
fetch('chat_stats.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('json-container');
        container.innerHTML = '<h2>Top Chatters with Ranks and Message Counts</h2>';
        
        // Extract top chatters object from the data
        const topChatters = data.topChatters;

        // Convert the object into an array of [userId, messageCount] pairs
        const topChattersArray = Object.entries(topChatters);

        // Sort the array based on message counts in descending order
        topChattersArray.sort((a, b) => b[1] - a[1]);

        // Display up to 500 top chatters
        const endIndex = Math.min(topChattersArray.length, 25);

        for (let i = 0; i < endIndex; i++) {
            const [userId, messageCount] = topChattersArray[i];
            const rank = i + 1; // Add 1 to make it 1-based index (instead of 0-based)

            container.innerHTML += `
                <div class="chatter">
                    <p><strong>Rank:</strong> ${rank}</p>
                    <p><strong>User ID:</strong> ${userId}</p>
                    <p><strong>Message Count:</strong> ${messageCount}</p>
                </div>
            `;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    // Assume you're fetching chatStats.json using fetch
fetch('chat_stats.json')
.then(response => response.json())
.then(chatStats => {
  const timestamp = chatStats.timestamp;
  const lastUpdatedTime = new Date(timestamp);
  const currentTime = new Date();
  const timeDifferenceInSeconds = Math.floor((currentTime - lastUpdatedTime) / 1000);
  const lastUpdatedElement = document.getElementById('last-updated');
  lastUpdatedElement.textContent = `Last Updated: ${timeDifferenceInSeconds} seconds ago`;
})
.catch(error => {
  console.error('Error loading chatStats.json:', error);
});

    