const url = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData(callback) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        callback(data.title);  // Call the callback with the title
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Callback function to display result
    function displayTitle(title) {
      document.getElementById('output').textContent = title;
    }

    // Event listener on the button
    document.getElementById('btn').addEventListener('click', () => {
      fetchData(displayTitle);  // Pass displayTitle as a callback
    });