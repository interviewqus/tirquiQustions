String.prototype.replaceAll = function(str1, str2, ignore) {
    let abc = str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&")
    console.log(abc);

    let regs = new RegExp(abc, (ignore ? "gi" : "g"));
    console.log(regs);
    console.log(this);
    console.log(typeof(str2) == "string");
    console.log(str2.replace(/\$/g, "$$$$"))
    return this.replace(regs, (typeof(str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
}


let strings = "Hi my name is {name} and my father name is {name} and my brother name is also {name}"

let newstrings = strings.replaceAll("{name}", "Saif", )

console.log(newstrings)