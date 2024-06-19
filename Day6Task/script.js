document.getElementById('fetch-form').addEventListener('submit', fetchData);

function fetchData(event) {
    event.preventDefault();
    var url = document.getElementById('url-input').value;
    var responseContainer = document.getElementById('response-container');
    responseContainer.textContent = 'Fetching data...';
    
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true);
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                try {
                    var jsonResponse = JSON.parse(httpRequest.responseText);
                    responseContainer.textContent = JSON.stringify(jsonResponse, null, 2);
                } catch (e) {
                    responseContainer.textContent = 'Response is not valid JSON: ' + httpRequest.responseText;
                }
            } else {
                responseContainer.textContent = 'Failed to fetch data: ' + httpRequest.statusText;
            }
        }
    };
    httpRequest.send();
}