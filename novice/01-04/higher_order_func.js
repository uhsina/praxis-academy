//Belajar Higher Order Function
//untuk memahami cara menumpuk function
//dan memahami kerangkanya
const add = (a, b)=>{
    c = a + b
    return(d)=>{
        return(e)=>{
            return d + c + e
        }
    }
}
b = add(2, 4)
v = b(6)
console.log(v(8));