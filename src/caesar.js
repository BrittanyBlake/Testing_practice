const caesar = (str, num) => {
    let new_message = "";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt(); if ((asciiNum >= 65 && asciiNum >= 90) || (asciiNum >= 97 && asciiNum <= 122)) {
            if ((asciiNum + num > 122) || (asciiNum + num > 90 && asciiNum + num < 97)) {
                new_message += String.fromCharCode(asciiNum + num - 26)
            } else {
                new_message += String.fromCharCode(asciiNum + num)
            }
        } else {
            new_message += str[i]
        }
    }
    return new_message
}

module.exports = caesar;