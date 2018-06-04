

var formValidation = {
    input1: {
        minLength: 6,
        maxLength: 15,
        error: "  )))..... ",
        maxNumber: 4
    },
    input2: {
        minLength: 4,
    },
    input3: {
        minLength: 3,
        maxLength: 10,
        cartNumber: 16,
    },
    input4: {
        minLength: 0,
        maxLength: 5,
        cartNumber: 12
    },
    input5:{
        minLength:10,
        maxLength:15,
        cartNumber:14
    }
}
let k;
let minl = null;
let minMaxLBollen = true;
let maxl = null;
let err = null;
let maxn = null;
let cartn = null;
let cartBollen = true;
function formm() {
    for (k in formValidation) {
        for (let a in formValidation[k]) {
            if (a == "minLength") {
                minl = formValidation[k][a];

            }
            if (a == "maxLength") {
                maxl = formValidation[k][a];
            }
            if (a == "error") {
                err = formValidation[k][a];
            }
            if (a == "maxNumber") {
                maxn = formValidation[k][a];
            }
            if (a == "cartNumber") {
                if (typeof formValidation[k][a] == "number") {
                    cartn = formValidation[k][a];
                    cartBollen = false;
                }

            }
        }
        if (cartBollen) {
            minMaxL(minl, maxl, err);
            if ((maxn != null) && minMaxLBollen) {
                maxNum(maxn, err);
            }
        }
        else {
            cartNumberF(cartn, err);
            cartBollen = true;
        }
        maxl = null;
        minl = null;
        err = "";
        maxn = null;
    }
}
formm();
function minMaxL(minL, maxL, erR) {

    if (minL == null && (typeof maxL == "number")) {
        if (document.getElementById(k).value.length > maxL) {
            document.getElementById(k).style.border = "2px solid red";
            document.getElementById(k).placeholder = erR;
            if (erR != "") {
                document.getElementById(k).value = "";
            }
            minMaxLBollen = false;
        }
        else {
            document.getElementById(k).style.border = "2px solid blue";
            document.getElementById(k).placeholder = "";
            minMaxLBollen = true;
        }
    }
    if ((maxL == null) && (typeof minL == "number")) {
        if (document.getElementById(k).value.length < minL) {
            document.getElementById(k).style.border = "2px solid red";
            document.getElementById(k).placeholder = erR;
            if (erR != "") {
                document.getElementById(k).value = "";
            }
            minMaxLBollen = false;
        }
        else {
            document.getElementById(k).style.border = "2px solid blue";
            document.getElementById(k).placeholder = "";
            minMaxLBollen = true;
        }
    }
    if ((maxL != null) && (minL != null) && (typeof maxL == "number") && (typeof minL == "number")) {
        if ((document.getElementById(k).value.length < minL) || (document.getElementById(k).value.length > maxL)) {
            document.getElementById(k).style.border = "2px solid red";
            document.getElementById(k).placeholder = erR;
            if (erR != "") {
                document.getElementById(k).value = "";
            }
            minMaxLBollen = false;
        }
        else {
            document.getElementById(k).style.border = "2px solid blue";
            document.getElementById(k).placeholder = "";
            minMaxLBollen = true;
        }
    }
}
function maxNum(maxN, erR) {
    let splitNum = document.getElementById(k).value.split("");
    let pushNum;
    let arr = [];
    for (let item of splitNum) {
        pushNum = parseInt(item);
        if (isNaN(pushNum) == false) {
            arr.push(pushNum);
        }
    }

    if (maxN != null) {
        if ((arr.length > maxN) && minMaxLBollen) {
            document.getElementById(k).style.border = "2px solid red";
            document.getElementById(k).value = "";
            document.getElementById(k).placeholder = erR

        }
        else {
            document.getElementById(k).style.border = "2px solid blue";
        }
    }
}

function cartNumberF(cartN, erR) {
    document.getElementById(k).type = "number";
    if (erR == "") {
        let modCart = cartN / 4;
        let modPCart = cartN % 4;
        let minus = "";
        if (modPCart == 0) {
            for (let i = 0; i < modCart; i++) {
                for (let j = 0; j < 4; j++) {
                    minus += "- ";
                }
                minus += " ";
            }
        }
        else {
            for (let i = 0; i < (modCart - modPCart / 4); i++) {
                for (let j = 0; j < 4; j++) {
                    minus += "- ";
                }
                minus += " ";
            }
            for (let k = 0; k < modPCart; k++) {
                minus += "- "
            }
        }
        document.getElementById(k).placeholder = minus;
    }
    else{
        document.getElementById(k).placeholder=erR;
    }
    
    if (document.getElementById(k).value.length == cartN) {
        document.getElementById(k).style.border = "2px solid blue";

    }
    else {
        document.getElementById(k).style.border = "2px solid red";
        document.getElementById(k).value = "";
    }

};
