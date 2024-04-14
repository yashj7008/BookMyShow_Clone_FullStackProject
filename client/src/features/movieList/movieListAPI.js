
export function fetchAllMovie(){
    return  new Promise(async (resolve)=>{
        const response = await fetch(`http://localhost:5050/api/movie/list`);
        const movieList = await response.json();
        console.log(movieList)
        resolve(movieList)
    })
}


export function fetchProductByQuery(query, type) {
    const params = new URLSearchParams({ title: query, type: type });
    const url = `http://localhost:5050/api/movie/list?${params}`;

    console.log("in real api hai", type);
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(url);
            const movieList = await response.json();
            resolve(movieList);
        } catch (error) {
            // Handle any errors that occur during the fetch
            console.error("Error fetching movie list:", error);
            resolve([]); // Resolve with an empty array in case of error
        }
    });
}

export function fetchMovieById(movieId){
    return new Promise ( async (resolve)=>{
          try {
             const response = await fetch(`http://localhost:5050/api/movie/${movieId}`);
             const movie = await response.json();
             resolve(movie);
          } catch (error) {
            console.log("Error while fetching movie ", error.messsage)
            resolve([]);
          }
    })
}
