
export function fetchAllMovie(){
    return Promise(async (resolve)=>{
        const response = await fetch('http://localhost:5050/api/movie/list?type=ALL');
        const movieList = await response.json();
        resolve({movieList})
    })
}


export function fetchProductByQuery(query){
    return Promise(async (resolve)=>{
        const response = await fetch(`http://localhost:5050/api/movie/list?title=${query}`);
        const movieList = await response.json();
        resolve({movieList})
    })
}
