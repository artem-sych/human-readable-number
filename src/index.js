module.exports =
    function toReadable(number) {

        let arr1 = ['', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine'
        ];
        let arr10 = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];

        let arr20 = ['', 'ten', 'twenty', 'thirty', 'forty',
            'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];
        let arr100 = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred',
            'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
        ];

        let result = [];
        let arrNumb = Array.from(String(number), Number);

        if (number > 0 && number < 10) {
            return arr1[number];
        } else if (number > 9 && number < 20) {
            return arr10[arrNumb[1] + 1];
        } else if (number > 19 && number < 100) {
            arrNumb.forEach((el, i) =>
                result.push((i == 0) ? arr20[el] : arr1[el])
            );
            return result.join(' ');
        } else if (number > 99 && number < 110 || number > 199 && number < 210 ||
            number > 299 && number < 310 || number > 499 && number < 510 ||
            number > 599 && number < 610 || number > 699 && number < 710 ||
            number > 799 && number < 810 || number > 899 && number < 910) {
            arrNumb.forEach((el, i) =>
                result.push((i == 0) ? arr100[el] : (i == 1) ? arr10[el] : arr1[el])
            );
            let x = result.splice(1, 1);
            return result.join(' ');
        } else if (number > 109 && number < 120 || number > 209 && number < 220 ||
            number > 309 && number < 320 || number > 409 && number < 420 ||
            number > 509 && number < 520 || number > 609 && number < 620 ||
            number > 709 && number < 720 || number > 809 && number < 820 ||
            number > 909 && number < 920
        ) {
            arrNumb.forEach((el, i) =>
                result.push((i == 0) ? arr100[el] : (i == 2) ? arr10[el + 1] : '')
            );
            let x = result.splice(1, 1);
            return result.join(' ');
        } else if (number > 119 && number < 200 || number > 219 && number < 300 ||
            number > 319 && number < 400 || number > 419 && number < 500 ||
            number > 519 && number < 600 || number > 619 && number < 700 ||
            number > 719 && number < 800 || number > 819 && number < 900 ||
            number > 919 && number < 999
        ) {
            arrNumb.forEach((el, i) =>
                result.push((i == 0) ? arr100[el] : (i == 1) ? arr20[el] : arr1[el])
            );

            return result.join(' ').trim();
        } else if (number == 0) {
            return 'zero';
        }
    }
