const myPromise = new Promise ((resolve, reject)=>{
    const user = null;
    if(!user){
        reject('something went wrong!');
    }

   else{
    setTimeout(()=>{
        resolve('sucessfully got the data')
    }, 1000);
   }
})
 
myPromise.then(res =>console.log(res)).catch(err =>console.log(err)) 
myPromise.then(res =>console.log(res)).catch(err =>console.log(err)) 
