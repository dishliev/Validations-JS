var Regex = {
    Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    LetterAndNumber: /^[0-9a-zA-Z]+$/,
    Letter: /^[A-Za-z]+$/,
    Number: /^\d+$/,
    ContainNumber: /[0123456789]/,
    Date: /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/, // MM/DD/YYYY and M/D/YYYY
    Url: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    IP: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    Base64: /[^a-zA-Z0-9\/\+=]/i,
    Integer: /^\-?[0-9]+$/,
    lowerCaseLetters: /[a-z]/g,
    upperCaseLetters: /[A-Z]/g,
    numbers: /[0-9]/g
};

var Validate = {
    Email: function (email) {
        return Regex.Email.test(email);
    },
    Number: function (number) {
        return Regex.Number.test(number);
    },
    NumberIsBetween: function (number, number_from, number_to) {
        return number >= number_from <= number_to;
    },
    LetterAndNumber: function (val) {
        return Regex.LetterAndNumber.test(val);
    },
    Letter: function (val) {
        return Regex.Letter.test(val);
    },
    ContainNumber: function (val) {
        return Regex.ContainNumber(val);
    },
    Date: function (date) {
        return Regex.Date.test(date);
    },
    Url: function (url) {
        return Regex.Url.test(url);
    },
    IP: function (ip) {
        return Regex.IP.test(ip);
    },
    Base64: function (base64) {
        return Regex.Base64.test(base64);
    },
    Integer: function (int) {
        return Regex.Integer.test(int);
    },
    CheckBox: {
        isChecked: function (checkBox) {
            return checkBox.checked ? true : false;
        }
    },
    Radio: {
        isChecked: function (radio) {
            return radio.checked ? true : false;
        }
    },
    Password: function (input, conditions) {
        var valid = 0;
        if (conditions != "") {
            // Validate numbers
            if (conditions.numbers == true) {
                if (input.value.match(Regex.numbers)) {
                   
                } else {
                    valid += 1;
                }
            }
            // Validate minLength
            if (conditions.hasOwnProperty('minLength')) {
                if (input.value.length >= conditions.minLength) {
             
                } else {
                    valid += 1;
                }
            }
            // Validate maxLength
            if (conditions.hasOwnProperty('maxLength')) {
                if (input.value.length <= conditions.maxLength) {
                   
                } else {
                    valid += 1;
                }
            }
            // Validate lowercase letters    
            if (conditions.lowerCaseLetters == true) {   
                if (input.value.match(Regex.lowerCaseLetters)) {
                   
                } else {
                    valid += 1;
                }
            }
            // Validate capital letters
            if (conditions.upperCaseLetters == true) {
                if (input.value.match(Regex.upperCaseLetters)) {
                    
                } else {
                    valid += 1;
                }
            }
        }
        return valid != 0 ? false: true;
    }
}


