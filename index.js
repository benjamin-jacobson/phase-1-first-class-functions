function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction(){
    return function randomFunction(){
        console.log(`Hello`)
    }
}

function returnsAnAnonymousFunction (){
    return function(){console.log(`Hello`)}
}