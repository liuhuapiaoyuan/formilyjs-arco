import React, { Fragment } from 'react';
import { isFn } from '@formily/shared';
var isNum = function (c) {
    return c >= 48 && c <= 57;
};
var isLower = function (c) {
    return c >= 97 && c <= 122;
};
var isUpper = function (c) {
    return c >= 65 && c <= 90;
};
var isSymbol = function (c) {
    return !(isLower(c) || isUpper(c) || isNum(c));
};
var isLetter = function (c) {
    return isLower(c) || isUpper(c);
};
var getStrength = function (val) {
    if (!val) {
        return 0;
    }
    var num = 0;
    var lower = 0;
    var upper = 0;
    var symbol = 0;
    var MNS = 0;
    var rep = 0;
    var repC = 0;
    var consecutive = 0;
    var sequential = 0;
    var len = function () { return num + lower + upper + symbol; };
    var callme = function () {
        var re = num > 0 ? 1 : 0;
        re += lower > 0 ? 1 : 0;
        re += upper > 0 ? 1 : 0;
        re += symbol > 0 ? 1 : 0;
        if (re > 2 && len() >= 8) {
            return re + 1;
        }
        else {
            return 0;
        }
    };
    for (var i = 0; i < val.length; i++) {
        var c = val.charCodeAt(i);
        if (isNum(c)) {
            num++;
            if (i !== 0 && i !== val.length - 1) {
                MNS++;
            }
            if (i > 0 && isNum(val.charCodeAt(i - 1))) {
                consecutive++;
            }
        }
        else if (isLower(c)) {
            lower++;
            if (i > 0 && isLower(val.charCodeAt(i - 1))) {
                consecutive++;
            }
        }
        else if (isUpper(c)) {
            upper++;
            if (i > 0 && isUpper(val.charCodeAt(i - 1))) {
                consecutive++;
            }
        }
        else {
            symbol++;
            if (i !== 0 && i !== val.length - 1) {
                MNS++;
            }
        }
        var exists = false;
        for (var j = 0; j < val.length; j++) {
            if (val[i] === val[j] && i !== j) {
                exists = true;
                repC += Math.abs(val.length / (j - i));
            }
        }
        if (exists) {
            rep++;
            var unique = val.length - rep;
            repC = unique ? Math.ceil(repC / unique) : Math.ceil(repC);
        }
        if (i > 1) {
            var last1 = val.charCodeAt(i - 1);
            var last2 = val.charCodeAt(i - 2);
            if (isLetter(c)) {
                if (isLetter(last1) && isLetter(last2)) {
                    var v = val.toLowerCase();
                    var vi = v.charCodeAt(i);
                    var vi1 = v.charCodeAt(i - 1);
                    var vi2 = v.charCodeAt(i - 2);
                    if (vi - vi1 === vi1 - vi2 && Math.abs(vi - vi1) === 1) {
                        sequential++;
                    }
                }
            }
            else if (isNum(c)) {
                if (isNum(last1) && isNum(last2)) {
                    if (c - last1 === last1 - last2 && Math.abs(c - last1) === 1) {
                        sequential++;
                    }
                }
            }
            else {
                if (isSymbol(last1) && isSymbol(last2)) {
                    if (c - last1 === last1 - last2 && Math.abs(c - last1) === 1) {
                        sequential++;
                    }
                }
            }
        }
    }
    var sum = 0;
    var length = len();
    sum += 4 * length;
    if (lower > 0) {
        sum += 2 * (length - lower);
    }
    if (upper > 0) {
        sum += 2 * (length - upper);
    }
    if (num !== length) {
        sum += 4 * num;
    }
    sum += 6 * symbol;
    sum += 2 * MNS;
    sum += 2 * callme();
    if (length === lower + upper) {
        sum -= length;
    }
    if (length === num) {
        sum -= num;
    }
    sum -= repC;
    sum -= 2 * consecutive;
    sum -= 3 * sequential;
    sum = sum < 0 ? 0 : sum;
    sum = sum > 100 ? 100 : sum;
    if (sum >= 80) {
        return 100;
    }
    else if (sum >= 60) {
        return 80;
    }
    else if (sum >= 40) {
        return 60;
    }
    else if (sum >= 20) {
        return 40;
    }
    else {
        return 20;
    }
};
export var PasswordStrength = function (props) {
    if (isFn(props.children)) {
        return props.children(getStrength(String(props.value)));
    }
    else {
        return React.createElement(Fragment, null, props.children);
    }
};
//# sourceMappingURL=password-strength.js.map