window.onload = function() {
    fetch('https://api.trade.gov/gateway/v1/ita_faqs/search')
    .then((response) => response.json())
    .then((data) => {
        let body = document.querySelector(".faqs")
        
    })
    .catch(error => console.error(error))
}