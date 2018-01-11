var Regex = {
    Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    IsLetterAndNumber: /^[0-9a-zA-Z]+$/,
    IsLetter: /^[A-Za-z]+$/,
    IsNumber: /^\d+$/,
    ContainNumber: /[0123456789]/,
    IsDate: /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/ // MM/DD/YYYY and M/D/YYYY
};

var Validate = {
    Email: function (email) {
        return Regex.Email.test(email);
    },
    IsNumber: function (number) {
        return Regex.IsNumber.test(number);
    },
    NumberIsBetween: function (number, number_from, number_to) {
        return number >= number_from <= number_to;
    },
    IsLetterAndNumber: function (val) {
        return Regex.IsLetterAndNumber.test(val);
    },
    IsLetter: function (val) {
        return Regex.IsLetter.test(val);
    },
    ContainNumber: function (val) {
        return Regex.ContainNumber(val);
    },
    IsDate: function (date) {
        var year = function () {

        };

        this.format = function (format) {
            if (format.length == 8) {
                var f = format.split();
                var separator = null;

                if (!/\d/.test(f[2])) {
                    separator = f[2];
                }
                else if (!/\d/.test(f[4]) && !/\d/.test(f[4])) {
                    separator = f[4];
                }
            }
        }
        if (this.format.length != 0) {
            this.format.call;
        }
        //return this;
    },

};


