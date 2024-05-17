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

const num = [5,6,7,8,9,12];
const array = processArray(num);
console.log(array);

function formatArrayStrings(strings, numbers){
    const input = [] ;
    for(let i=0; i< strings.length; i++){
        const string = strings[i];
        const num = numbers[i];

        if (num % 2 === 0){
            input.push(string.toUpperCase());
        }
        else {
            input.push(string.toLowerCase());
        }
    }

    return input;
}

const strings = ["Kuuku", "Agyensaim", "AMPAH", "student", "DCIT", "mobile"];
const numbers = processArray(num);
const input = formatArrayStrings(strings, numbers);
console.log(input);