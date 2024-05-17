function processArray(arr){
    const array = [];
    for(let i=0; i< arr.length; i++){
        const num = arr[i];
        if(num %2 === 0){
            array.push(num ** 2 );

        }
        else{
            array.push(num * 3)
        }

    }

    return array;
}

const num = [5,6,7,8,9];
const array = processArray(num);
console.log(array);