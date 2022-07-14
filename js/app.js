function consoleString(arg) {
    return console.log(`${arg}`);
}
consoleString(`Gabriel`);

function printing(arg) {
    if(arg) {
        console.log(`Happy`)
    } else {
        console.log(`Sad`)
    }
}
printing(false);

function largerNumber(arg1, arg2) {
    if(arg1 > arg2) {
        console.log(`The larger is: ${arg1}`)
    } else if (arg2 > arg1) {
        console.log(`The larger is: ${arg2}`)
    } else {
        console.log(`They are equals.`)
    }
}
largerNumber(4,4);

function largerNumberArray (array) {
    let maxValue = array.reduce(function(prev, current) {
       return prev > current ? prev : current;
    });
}

let array = [1,5,3];
largerNumberArray(array);

function findHappy(array) {
    for(counter = 0; counter < array.length; counter++) {
        if(array[counter].includes(`happy`)) {
            return console.log(`You are ${array[counter]}.`);
        } else {
            console.log(`Not here.`);
        }
    }
}

let arrayStrings = [`sad`, `tired`, `happy`, `hungry`];
findHappy(arrayStrings);