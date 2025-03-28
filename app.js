const apiKey = "94b5eee3";

// Fetch movie data from API
const fetchMovie = async (title) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`);
        const data = await response.json();
        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            alert("Movie not found!");
        }
    } catch (error) {
        console.error("Error fetching data", error);
        alert("Failed to load movie data.");
    }
};

// Search movie title
const serchTitle = () => {
    const title = document.querySelector("#serch").value.trim();
    if (!title) {
        alert("Please enter a movie name");
        return;
    }
    fetchMovie(title);
};

// Display movie data in card format
const displayMovies = (movies) => {
    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = "";

    movies.forEach((movie) => {
        resultDiv.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card h-100">
                    <img src="${movie.Poster !== "N/A" ? movie.Poster : 'no-image.png'}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text"><strong>Year:</strong> ${movie.Year}</p>
                        <p class="card-text"><strong>Type:</strong> ${movie.Type}</p>
                    </div>
                </div>
            </div>
        `;
    });
};

// Load default movies on page load
window.onload = () => {
    fetchMovie("pushpa");
};
