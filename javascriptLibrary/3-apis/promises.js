// setTimeout(() => console.log('This is a test of timeouts!'), 1000);

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (false){
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000);
})

promise
    .then(blah => console.log(blah)) //blah = 'success'
    .catch(err => console.log(err)) //err= 'failure'

function playFunc(){
    return 5;
}

console.log(playFunc()); //this happens immediately because there is no delay like with the promise 3000 = 3 sec delay