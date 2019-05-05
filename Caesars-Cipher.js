function rot13(str) {
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var words = str.split(" ");
    var newSentence = "";
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            for (var k = 0; k < alphabet.length; k++) {
                if (words[i][j] == alphabet[k]) {
                    if (k + 13 < 26) {
                        newSentence += (alphabet[k + 13]);
                        if (j == words[i].length - 1 && i < words.length - 1) {
                            newSentence += " "
                        }
                    }
                    else if (k + 13 >= 26) {
                        newSentence += (alphabet[k - 13])
                        if (j == words[i].length - 1 && i < words.length - 1) {
                            newSentence += " "
                        }

                    }
                }

            }
        }
    }
    var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    if (str.match(punctRE)) {
        newSentence += str.match(punctRE);
    }
    console.log(newSentence);
    return newSentence
}


rot13(("SERR PBQR PNZC"));