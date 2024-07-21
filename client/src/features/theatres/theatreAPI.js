
export function loadTheatreList(movieId){
    return  new Promise(async (resolve)=>{
        const response = await fetch(`http://localhost:5050/api/show/list?movie=${movieId}&date=2023-12-25`);
        const theatreList = await response.json();
        console.log(theatreList)
        resolve(theatreList)
    })
}

