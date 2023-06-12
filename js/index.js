// THÊM SỐ N VÀO MẢNG
var data = []
function addToArray() {
    var themSo = +document.getElementById('themSo').value;

    data.push(themSo);
    document.getElementById('txtKetQua').innerHTML = '\xa0\ ' + data;

}
document.getElementById('btnSubmit').onclick = addToArray



// TÍNH TỔNG SÓ DƯƠNG
document.getElementById('btnTotal').onclick = function () {
    var sum = 0
    for (var i = 0; i < data.length; i++) {
        if (data[i] > 0) { sum += data[i] };
    }
    document.getElementById('txttinhTong').innerHTML = sum
}

// ĐẾM SỐ DƯƠNG
document.getElementById('btndemSoduong').onclick = function () {
    var count = 0
    for (var i = 0; i < data.length; i++) {
        if (data[i] > 0) {
            count++
        }
    }
    document.getElementById('txtDemsoduong').innerHTML = count
}


// TÌM SỐ NHỎ NHẤT 
document.getElementById('btnMinnumber').onclick = function () {

    var min = +data[0]
    for (var i = 0; i < data.length; i++) {
        var value = data[i]
        if (value < min) {
            min = value
        }
    }
    document.getElementById('txtsoNhonhat').innerHTML = min
}


// TÌM SỐ DƯƠNG NHỎ NHẤT
document.getElementById('btnSoduongnhonhat').onclick = function () {
    var min = +data[0]
    for (var i = 0; i < length; i++) {
        var value = data[i]
        if (value < min && value > 0) {
            min = value
        }
    }
    document.getElementById('txtsoDuongnhonhat').innerHTML = min
}



// TÌM SỐ CHẴN CUỐI CÙNG
document.getElementById('btnTimsochan').onclick = function () {
    var maxLast = data[0]
    for (var i = 0; i < data.length; i++) {
        var value = data[i]
        if (value % 2 == 0) {
            maxLast = value
        }
    }

    document.getElementById('txtsoChancuoicung').innerHTML = maxLast
}

// ĐỔI CHỖ PHẦN TỬ TRONG MẢNG
document.getElementById('btnDoicho').onclick = function () {
    // // duy[i] = cái số muốn đổi
    // tmp = duy[0]

    // i = j 

    // j = i 
    var numb1 = document.getElementById('numBer1').value

    var numb2 = document.getElementById('numBer2').value

    var temp = data[numb1];

    data[numb1] = data[numb2];

    data[numb2] = temp


    document.getElementById('Doichoresult').innerHTML = 'Mảng sau khi đổi là' + '\xa0\ ' + data
}


// // SẮP XẾP MẢNG TĂNG DẦN
document.getElementById('btnSapxep').onclick = function () {

    for (var i = 0; i < data.length - 1; i++) {
        for (var j = i + 1; j < data.length; j++) {
            if (data[i] > data[j]) {
                var temp = data[i]

                data[i] = data[j]

                data[j] = temp
            }
        }
    }
    document.getElementById('Sapxepresult').innerHTML = 'Mảng sau khi sắp xếp' + '\xa0\ ' + data
}


// TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
document.getElementById('btnSNT').onclick = function () {
    var temp = -1;
    for (var i = 0; i < data.length; i++) {
      var flag = true;
      if (data[i] < 2) {
        flag = false;
      } else {
        for (var j = 2; j <= Math.sqrt(data[i]); j++) {
          if (data[i] % j == 0) {
            flag = false;
            break;
          }
        }
      }
      if (flag) {
        temp = data[i];
        break;
      }
      
    }
    document.getElementById("Sntresult").innerHTML = temp !== -1 ? temp : "khong co so nguyen to";
}


// ĐẾM SỐ NGUYÊN
var demso = []
function putInteger() {

    var nhapsonguyen = +document.getElementById('countNumber').value;
    demso.push(nhapsonguyen);

    document.getElementById('numberIntegerDisplay').innerHTML = demso

    function countInteger() {
        var cout = 0
        for (var i = 0; i < demso.length; i++) {
            if (Number.isInteger(demso[i])) {
                cout++;
            }
        }
        document.getElementById("demSonguyen").innerHTML = "Số lượng số nguyên: " + cout;
    }
    document.getElementById('btnCountInt').onclick = countInteger;
}

document.getElementById('btnNumberInteger').onclick = putInteger



// SO SÁNH SỐ LƯỢNG ÂM VÀ DƯƠNG
function compareNumber() {
    var positiveNum = 0;
    var negativeNum = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i] >= 1) {
            positiveNum++
        } else if (data[i] < 0) {
            negativeNum++
        }
    }

    if (positiveNum > negativeNum) {
        document.getElementById("compareResult").innerHTML = "số dương > số âm";
    } else if (positiveNum < negativeNum) {
        document.getElementById("compareResult").innerHTML = "số dương < số âm";
    } else {
        document.getElementById("compareResult").innerHTML = "số dương = số âm";
    }
}
document.getElementById("btnCompare").onclick = compareNumber;

