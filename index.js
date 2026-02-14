let num = [1,2,3]
num[1] = num[1]+10
console.log(num)
let str = ['a','b','c']
str.push('d')
console.log(str)
let sum = 0
for(let i = 0; i < num.length; i++){

    sum += +num[i]
}
console.log(sum)
let num2 = [1,2,3,4,5]
for(let i = 0; i < num2.length; i++){
    console.log(num2[i])
}
let str2 = ["kkgjrjmbkrfk", "kjgj3333", "kjgj"]
str2 = str2.filter(function (item){
    return item.length > 5
})
for(let i = 0; i < str2.length; i++){
    console.log(str2[i])
}
num3 = [1,2,3,4,5,6,7,8,9,10]
console.log(Math.max(...num3))
let num4 = num3
num4 = num4.filter(function (item){
    return item%2 === 0
})
console.log(num4)