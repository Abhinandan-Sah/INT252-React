const items = (...itms) =>{
    return itms.reduce((sum, current)=> sum+current, 0);
}

console.log(items(1,2,3, 4, 5));
