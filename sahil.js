
const value1 = "sahil"
const value2 = "patol"

const obj1 = value1.split("")
const obj2 = value2.split("")

for (let index = 0; index < obj1.length; index++) {
    for (let index2 = 0; index2 < obj2.length; index2++){
        const main ="abcdefghijklmnopqrstuvwxyz".split("")
         const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
        if(obj1[index] && obj2[index]){
           const  onj1index =  main.indexOf(obj1[index])
           const  onj2index = main.indexOf(obj2[index])
           if(main[onj1index] && main[onj2index]){
            const main1 = num[onj1index]
            const main2 = num[onj2index]
                 if(main1 > main2){
                     console.log(`${obj1[index]} from object 1 is bigger`)
                 }
                else{
                      console.log(`${obj2[index]} from object 2 is bigger`)
                };
            
           }
        }
    }

}

// const main ="abcdefghijklmnopqrstuvwxyz".split("")
// const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
// for (let i = 0; i < main.length; i++) {
//     for(let i = 0; i < num.length; i++)
//     {
//         main[i] = num[i]
//         console.log(main[i]);
//     }
// }

// for (let index = 0; index < obj1.length; index++) {
//     for (let index2 = 0; index2 < obj2.length; index2++)
   
//    if(obj1[index] == "a"){
//     obj1[index] =1
//    }
//    if(obj1[index] == "b"){
//     obj1[index] =2
//    }
//     if(obj2[index] == "a"){
//         obj2[index] =1
//    }
//    if(obj2[index] == "b"){
//     obj2[index] =2
//    }
   
//     if(obj1[index] > obj2[index]){
//         console.log("object 1 is bigger")
//     }
//     else{
//          console.log("object 2 is bigger")
//     };
    
// }


// const value1 = "baba"
// const value2 = "abab"

// const obj1 = value1.split("")
// const obj2 = value2.split("")



// for (let index = 0; index < obj1.length; index++) {
//     for (let index2 = 0; index2 < obj2.length; index2++)
   
//    if(obj1[index] == "a"){
//     obj1[index] =1
//    }
//    if(obj1[index] == "b"){
//     obj1[index] =2
//    }
//     if(obj2[index] == "a"){
//         obj2[index] =1
//    }
//    if(obj2[index] == "b"){
//     obj2[index] =2
//    }
   
//     if(obj1[index] > obj2[index]){
//         console.log("object 1 is bigger")
//     }
//     else{
//          console.log("object 2 is bigger")
//     };
    
// }
