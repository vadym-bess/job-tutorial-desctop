function fetchJobs() {
    return fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
        }
    })

        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((data) => data)
        .catch((error) => console.log(error));
}



export {fetchJobs};
