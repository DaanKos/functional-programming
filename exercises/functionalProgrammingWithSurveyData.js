const favouriteColorString = `#306B6D
turqoise
#FFD733
#f5e2e3
#b02727
#309E9E
#5E80CE
b23535
#00a2ff

#E7CC84
#562f7e
64e5c9
#71EADB
#00ffef
cecb9f
#000218
 #40E0D0
#77dd77

eb9c98
#ff6781
000000
AAF0D1
Donkergrijs
 #17AB98
#2271b3 
#008080
#01BABA
#BBD3DF
#28d37e
#333333
Navy blue
#ff793f
#ff0000
9.26E+05
#0c0075
alle kleuren op zijn tijd
45150d
#00d5eb
a85418
ffa4b5
#346d0c
#F83064
57AFE2
cc7833
#ED8FAD
0014d0
#f8bdc6
#00ffe1
#5a005a
#006699
40E0D0
#1caed3
FCE900
#2c3e50

#832032
#567787
#e7b0f7
#24bbe0
296a9d
#f98b88
#000
#FF0000
#000080
FFF
#000000
#654321
#7F0000
blouw
#2a476f
D0021B
#55168c
000
#0042b5
5BBBE8

#a8ceeb
#72313e
#f2ecdf
#48d1cc
`

const favouriteColorArray = favouriteColorString.split('\n');

function addHashtags(fedArray){
    return newArray = fedArray.map(function(currentString) {
        currentString = removeWhiteSpace(currentString);
        if (checkIfHashtagIsNeeded(currentString) && checkIfStringLengthIsCorrect(currentString)){
            currentString = "#" + currentString;
        } else if (checkIfHashtagIsNeeded(currentString)) {
            currentString = "";
        } else {
            currentString;
        } return currentString
    })
}

function removeWhiteSpace(stringThatNeedsWhiteSpaceRemoved){
    return stringThatNeedsWhiteSpaceRemoved.replace(/\s/g, '');
}

function checkIfStringLengthIsCorrect(stringThatNeedsLengthCheck){
    return (stringThatNeedsLengthCheck.length == 3 || stringThatNeedsLengthCheck.length == 6)
}

function checkIfHashtagIsNeeded(stringThatNeedsHashtagCheck){
    return (stringThatNeedsHashtagCheck.charAt(0) != "#")
}

addHashtags(favouriteColorArray);