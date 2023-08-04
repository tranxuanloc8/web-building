function validateForm() {
    if (document.forms[0].txtHo.value == '') {
        alert('Chưa nhập họ!');
        return false;
    }
    if (document.forms[0].txtTen.value == '') {
        alert('Chưa nhập tên!');
        return false;
    }
    if (document.forms[0].dateNgaySinh.value == '') {
        alert('Chưa nhập ngày sinh!')
        return false;
    }
    var gioitinhArr = document.getElementsByName('gioitinh');
    if (!(gioitinhArr[0].checked || gioitinhArr[1].checked)) {
        alert('Chưa chọn giới tính!');
        return false;
    }
    if (document.forms[0].txtSoDienThoai.value == '') {
        alert('Chưa nhập số điện thoại!');
        return false;
    }
    var sdt = document.forms[0].txtSoDienThoai.value;
    var patt = new RegExp();
    patt = /^(0\d{9,10})$/;
    if (!patt.test(sdt)) {
        alert('Số điện thoại không đúng!');
        return false;
    }
    if (document.forms[0].txtEmail.value == '') {
        alert('Chưa nhập địa chỉ email!');
        return false;
    }
    var email = document.forms[0].txtEmail.value;
    patt = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    if (!patt.test(email)) {
        alert('Email không đúng!');
        return false;
    }

    if (document.forms[0].txtSLTV.value == '') {
        alert('Chưa nhập số lượng thành viên!');
        return false;
    }
    if (isNaN(document.forms[0].txtSLTV.value)) {
        alert('Số lượng thành viên phải là số!');
        return false;
    }
    if (document.forms[0].txtSLTV.value < 15 || document.forms[0].txtSLTV.value > 20) {
        alert('Mỗi trại phải có tối thiểu 15 thành viên và tối đa 20 thành viên');
        return false;
    }
    var troChoiArr = document.getElementsByName('trochoi');
    var soLuongTroChoi = 0;
    for (i = 0; i < troChoiArr.length; i++) {
        if (troChoiArr[i].checked) {
            soLuongTroChoi++;
        }
    }
    if (soLuongTroChoi < 3) {
        alert('Mỗi trại phải tham gia ít nhất 3 trò chơi!');
        return false;
    }
    return true;
}