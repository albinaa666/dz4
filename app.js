function Gpa(number){
    var sum = 0
    for(var i of number){
        if(i>=0){
            sum+=i
        }
    }
    return sum/2

}

console.log(Gpa([2, -78, 45, 4, -7, -6, -10, 26, 30, 8]));


function sqrSum(number){
    var sum = 0
    for (var i of number){
        if (i%2===0){
           sum+=i**2
        }
    }
    return sum

}

console.log(sqrSum([2, -78, 45, 4, -7, -6, -10, 26, 30, 8]))

const myArray =["text","apple","frontend",'lord','book','green']

const myFunk=(albina)=>{
    return albina.filter (item =>{
    if (item.toLowerCase().includes('a')||item.toLowerCase().includes('t')){
        return item
    }
        }
    )
}
const newArr = myFunk(myArray)
console.log(newArr)