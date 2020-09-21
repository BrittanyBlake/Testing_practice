const caesar = (str, num) => {
  let newMessage = '';
  for (let i = 0; i < str.length; i += 1) {
    const asciiNum = str[i].charCodeAt();
    if ((asciiNum >= 65 && asciiNum >= 90) || (asciiNum >= 97 && asciiNum <= 122)) {
      if ((asciiNum + num > 122) || (asciiNum + num > 90 && asciiNum + num < 97)) {
        newMessage += String.fromCharCode(asciiNum + num - 26);
      } else {
        newMessage += String.fromCharCode(asciiNum + num);
      }
    } else {
      newMessage += str[i];
    }
  }
  return newMessage;
};

module.exports = caesar;