function leftRotation(a, d) {
    // Complete this function
    return a.splice(d).concat(a.splice(0,d))
}