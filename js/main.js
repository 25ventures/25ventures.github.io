    function displayNextImage() {
        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("imgLogo").src = images[x];
        // document.createClass('animated').src = images[x];
    }

    function startTimer() {
        setInterval(displayNextImage, 3000);
    }

    // $('#imgLogo').addClass('animated fadeIn');

    var images = [],
        x = -1;
    images[0] = "./img/25%20abstract%201.png";
    images[1] = "./img/25%20abstract%202.png";
    images[2] = "./img/25%20abstract%203.png";
    images[3] = "./img/25%20abstract%204.png";
    images[4] = "./img/25%20abstract%205.png";
    images[5] = "./img/25%20abstract%206.png";
    images[6] = "./img/25%20abstract%207.png";
    images[7] = "./img/25%20abstract%208.png";
    images[8] = "./img/25%20abstract%209.png";
    images[9] = "./img/25%20abstract%2010.png";
    images[10] = "./img/25%20abstract%2011.png";
    images[11] = "./img/25%20abstract%2012.png";
    images[12] = "./img/25%20abstract%2013.png";
    images[13] = "./img/25%20abstract%2014.png";
    images[14] = "./img/25%20abstract%2015.png";
    images[15] = "./img/25%20abstract%2016.png";
    images[16] = "./img/25%20abstract%2017.png";
    images[17] = "./img/25%20abstract%2018.png";
    images[18] = "./img/25%20abstract%2019.png";
    images[19] = "./img/25%20abstract%2020.png";
    images[20] = "./img/25%20abstract%2021.png";
    images[21] = "./img/25%20abstract%2022.png";
    images[22] = "./img/25%20abstract%2023.png";
    images[23] = "./img/25%20abstract%2024.png";
    images[24] = "./img/25%20abstract%2025.png";
    images[25] = "./img/25%20abstract%2026.png";
    images[26] = "./img/25%20abstract%2027.png";
    images[27] = "./img/25%20abstract%2028.png";
    images[28] = "./img/25%20abstract%2029.png";
    images[29] = "./img/25%20abstract%2030.png";
    images[30] = "./img/25%20abstract%2031.png";
    images[31] = "./img/25%20abstract%2032.png";
    images[32] = "./img/25%20abstract%2033.png";
    images[33] = "./img/25%20abstract%2034.png";
    images[34] = "./img/25%20abstract%2035.png";
    images[35] = "./img/25%20abstract%2036.png";
    images[36] = "./img/25%20abstract%2037.png";
    images[37] = "./img/25%20abstract%2038.png";
    images[38] = "./img/25%20abstract%2039.png";
    images[39] = "./img/25%20abstract%2040.png";
    images[40] = "./img/25%20abstract%2041.png";
    images[41] = "./img/25%20abstract%2042.png";
    images[42] = "./img/25%20abstract%2043.png";
    images[43] = "./img/25%20abstract%2044.png";
    images[44] = "./img/25%20abstract%2045.png";
