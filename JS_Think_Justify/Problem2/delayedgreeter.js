function delayedGreeter(names) {
    for (var i = 0;i<names.length;i++) {
    setTimeout(function() {
    console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
}
}
    delayedGreeter(['Alice','Bob','charlie']);
