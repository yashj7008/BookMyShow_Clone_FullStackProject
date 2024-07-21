
export function getShowDetail(showId){
    return  new Promise(async (resolve)=>{
        const response = await fetch(`http://localhost:5050/api/show/${showId}`);
        const showDetails = await response.json();
        resolve(showDetails)
    })
}

