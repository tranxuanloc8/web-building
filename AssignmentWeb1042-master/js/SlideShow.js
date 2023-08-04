var viTriHienTai = 2;
cacHinh = new Array(6);
for (i = 0; i < 6; i++) {
    cacHinh[i] = new Image();
    cacHinh[i].src = 'images/ss' + i + '.jpg';
}

function goNext() {
    if (viTriHienTai < 5) {
        viTriHienTai++;
    }
    document.getElementById('image').src = cacHinh[viTriHienTai].src;
    if (viTriHienTai == 5) {
        document.getElementById('next').disabled = true;
    }
    document.getElementById('back').disabled = false;
}

function goBack() {
    if (viTriHienTai > 0) {
        viTriHienTai--;
    }
    document.getElementById('image').src = cacHinh[viTriHienTai].src;
    if (viTriHienTai == 0) {
        document.getElementById('back').disabled = true;
    }
    document.getElementById('next').disabled = false;
}

function hienNutNext(hien) {
    if (hien == true) {
        document.getElementById('nutNext').style.display = 'block';
    } else {
        document.getElementById('nutNext').style.display = 'none';
    }
}

function hienNutBack(hien) {
    if (hien == true) {
        document.getElementById('nutBack').style.display = 'block';
    } else {
        document.getElementById('nutBack').style.display = 'none';
    }
}

function nhayDenAnh(x) {
    document.getElementById('image').src = cacHinh[x].src;
    viTriHienTai = x;
}

var j = 0;
var tuDong;
function startAutoInterval() {
    tuDong = setInterval(function () {
        nhayDenAnh(j);
        j++;
        if (j > 5) {
            j = 0;
        }
    }, 200);
}

function stopAutoInterval() {
    clearInterval(tuDong);
}