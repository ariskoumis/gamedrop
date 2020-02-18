import keys from "./keys";

var xml_http = new XMLHttpRequest();
xml_http.setRequestHeader("Authorization", "Bearer " + keys.bearer);
xml_http.open("GET", "https://api.genius.com/search?q=Kendrick%20Lamar");