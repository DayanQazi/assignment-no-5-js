let tablenum = +prompt("Enter Your Table Value")
let tableRangeStart = +prompt("Enter Start Value")
let tableRangeEnd = +prompt("Enter Start Value")

for(let i = tableRangeStart;i <= tableRangeEnd;i++){
    document.write(tablenum + " X " + i + "=" + tablenum*i + "<br>")
}

