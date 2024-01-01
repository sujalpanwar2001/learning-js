const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// map  performs a particular  operation on each value of array and then returns a new array
// const newNums = myNumbers.map( (item) => item+10 )
// const newNums = [] 
// myNumbers.forEach( (item) => {
//     newNums.push(item+10)
// })

const newNums = myNumbers //chaining
                    .map( (num) => num*10)
                    .map( (num) => num+1)
                    .filter( (num) => num>=40)

 console.log(newNums);