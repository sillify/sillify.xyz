document.getElementById('proxy-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;

    try {
        const response = await fetch(`/proxy?url=${encodeURIComponent(url)}`);
        const text = await response.text();
        document.getElementById('response').innerText = text;
    } catch (error) {
        document.getElementById('response').innerText = `Error: ${error.message}`;
    }
});
