function function1(params) {
    a = 0;
    for (let index = 0; index < 20; index++) {
        a++

    }
    console.log(a)
}

function name1(params) {
    a = 0;
    for (let index = 0; index < 10000; index++) {
        a++

    }
    console.log(a)


}

function name2(params) {
    a = 0;
    for (let index = 0; index < 10000; index++) {
        a++
    }
    console.log(a)
}


function name3(params) {
    a = 0
    for (let index = 0; index < 10000; index++) {
        a++
    }
    console.log(a)
}


function function2(params) {

    name2()
    name3()
    name1()
    console.log("second fun")

}

// function2()

function function3(params) {
    console.log("third function")
}


async function call12() {

    await function1();
    await function2();
    await function3();


}

call12()

console.log("hmm")