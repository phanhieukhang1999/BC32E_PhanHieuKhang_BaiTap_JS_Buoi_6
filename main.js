/*---------Bài 1---------- */
document.getElementById('btnKetQua1').onclick = function () {
    //input: nhapSo: number
    var nhapSo = Number(document.getElementById('nhapSo').value);

    //output: soHang: number

    var tong = 0;
    var soHang = 0;
    //xử lý

    while (tong < nhapSo) {
        soHang++;
        tong = tong + soHang;
    }
    //hiên thị giao diện
    document.getElementById('ketQua_b1').innerHTML = 'Số nguyên nhỏ nhất là: ' + soHang;
}

/*---------Bài 2---------- */
document.getElementById('btnTinhTong').onclick = function () {

    var tong = 0;
    //xử lý
    var tong = tong2So('nhapX', 'nhapN');

    //hiển thị giao diện
    document.getElementById('ketQua_b2').innerHTML = 'Tổng là: ' + tong;
}

function tong2So(id1, id2) {
    //input: id của các thẻ: number
    var nhapX = Number(document.getElementById(id1).value);
    var nhapN = Number(document.getElementById(id2).value);

    //output: tong2So: number
    var tong2So = 0;
    //xử lý
    var dem = 1;
    while (dem <= nhapN) {
        tong2So = tong2So + Math.pow(nhapX, dem);
        dem++;
    }
    return tong2So;
}

/*---------Bài 3---------- */
document.getElementById('btnTinhTGiaiThua').onclick = function () {
    //input: nhapN: number
    var nhapN = Number(document.getElementById('nhapSoN').value);
    //output: giaiThua: number

    var giaiThua = 1;

    //xử lý
    var dem = 1;
    while (dem <= nhapN) {
        giaiThua = giaiThua * dem;
        dem++;
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b3').innerHTML = 'Giai thừa là: ' + giaiThua;
}

/*---------Bài 4---------- */
document.getElementById('btnTaoTheDiv').onclick = function () {
    //input: nhapSoLan: number
    var nhapSoLan = Number(document.getElementById('nhapSoLan').value);
    //output: theDiv: string
    var theDiv = '';

    //xử lý
    var dem = 1;

    while (dem <= nhapSoLan) {
        if (dem % 2 === 0) {
            var divChan = "<div class='bg-danger text-white p-2'>Div chẵn</div>";
            theDiv += divChan;
            dem++;
        } else {
            var divLe = "<div class='bg-primary text-white p-2'>Div lẻ</div>";
            theDiv += divLe;

            dem++;
        }
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b4').innerHTML = theDiv;
}

