// Iterator-pattern

function reverseArrayIterator(array) {
    var index = array.length - 1;
    return {
       next: () => 
          index >= 0 ?
           {value: array[index--], done: false}:
           {done: true}  
    }
}

const it = reverseArrayIterator(['four', 'three', 'two', 'one']);
console.log(it.next().value);  //-> 'one'
console.log(it.next().value);  //-> 'two'
console.log(it.next().value);  //-> 'three'
console.log(it.next().value); //-> 'four'
console.log(`Are you done? ${it.next().done}`);

// 6. Singleton