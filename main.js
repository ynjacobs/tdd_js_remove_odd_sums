function removeOddSum(arr){
    let newArr = arr.filter(({a , b}) => { return (a + b) % 2 === 0;});

    
    return newArr;
}

module.exports = removeOddSum;
