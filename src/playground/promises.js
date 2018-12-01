const promise = new Promise((resolve, reject) => {
    //if we call resolve it went well, if reject, something went wrong: here's the error
    //promise can only be resolved or rejected, whichever happens first is what happens and ignores all else. can only pass one argument to resolve or reject
    setTimeout(() => {
        resolve({
            name: 'john',
            age: 29
        });
        // reject('something went wrong')
    }, 1500)
});

console.log('before')
//promise will fire only if resolved
promise.then((data) => {
    console.log('1', data);
    return 'some data'
}).then((str) => {
    console.log('does this run?', str)
}).catch((err) => {
    console.log(err)
})
console.log('after')