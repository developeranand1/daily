// async function getFile(){
//     let myPromise = new Promise(function(resolve) {
//         let req= new XMLHttpRequest();
//         req.open("GET", 'index.js');
//         req.onload = function(){
//             if(req.status == 200){
//                 resolve(req.response);
//             }
//             else{
//                 resolve("File not found!")
//             }
//         };

//         req.send();
//     })
//     console.log(await myPromise);
// }

// getFile();










async function display(){
    let mypromise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("My Promise Resolve Methods ");
        },3000);
    });
    console.log(await mypromise);
}
console.warn("Wait a minutes");
display()