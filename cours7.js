fetch("http://url-service-web.com/api/users", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
});