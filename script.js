document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const clearHistoryButton = document.getElementById("clearHistoryButton");
    const searchHistoryList = document.getElementById("searchHistory");

    
    const loadSearchHistory = () => {
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        searchHistoryList.innerHTML = "";
        history.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            searchHistoryList.appendChild(li);
        });
    };

    
    const saveSearchTerm = (term) => {
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        history.push(term);
        localStorage.setItem("searchHistory", JSON.stringify(history));
    };

    
    const clearSearchHistory = () => {
        localStorage.removeItem("searchHistory");
        loadSearchHistory();
    };

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            saveSearchTerm(searchTerm);
            loadSearchHistory();
            searchInput.value = ""; 
        }
    });

    clearHistoryButton.addEventListener("click", clearSearchHistory);

    loadSearchHistory(); 
});
