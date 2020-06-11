let number = 1;

{
    let number = 2;
    console.log('log lần 1', number);
    
}
console.log('log lần 2', number);

const PI = 3.1412345;
// PI = 5;

const sinhVien = {
    ma: 1,
    ten: 'Nguyen Van A'
};
// const sinhVien ={
//     ma: 2,
//     ten: 'Nguyen Van B'
// }

sinhVien.ma = 2;
sinhVien.ten = 'Nguyen Van B';
console.log(sinhVien);

// ------- Arrow function
// Khai báo function theo es5
let showMess = function (mess) {
    console.log(mess);
}
// Khai báo function theo es6
let showMessES6 = (mess) => {
    console.log(mess);
}

// đối với hàm có lệnh return 
// es5
let tinhDiemTrungBinh = function (dToan, dLy, dHoa) {
    return(dToan+dLy+dHoa) / 3;
}
// es6
// let tinhDiemTrungBinh = (dToan, dLy, dHoa) => (dToan+dLy+dHoa) / 3;

// Khác biệt về ngữ cảnh con trỏ this
let hocVien = {
    hoTen: 'nguyen van a',
    lop: 'Front end 41',
    layThongTinHocVien: function() {
        // let hienThiThongTin = function() { //es5
        let hienThiThongTin = () => { //es6
            console.log("Họ tên:",this.hoTen,"Lớp:",this.lop);
        }
        hienThiThongTin();
    }
}

hocVien.layThongTinHocVien();

// rest param (toán tử ...)
// let hienThiThongTinHocVien = function (hoTen, lop){
//     console.log('Họ tên:' + hoTen);
//     console.log('Lớp: ' + lop);

// }
let hienThiThongTinHocVien = function (...rest){
    switch(rest.length)
    {
        case 2: {
            console.log('Họ tên: ' + rest[0]);
            console.log('lớp: ' + rest[1]);
        };break;
        case 3: {
            console.log('mã: ' + rest[0]);
            console.log('Họ tên: ' + rest[1]);
            console.log('lớp: ' + rest[2]);
        };break;
        default:
            console.log('Không hợp lệ');  
    }
}

hienThiThongTinHocVien(1,'nguyen van D','fe 41');
hienThiThongTinHocVien('nguyen van E','fe 41');
hienThiThongTinHocVien(2,'nguyen van E','fe 41',4);
