// 1

function inXinChao() {
    console.log("Xin chao RA");
}
inXinChao()
// 2
function tinhBinhPhuong(number) {
    return Math.pow(number, 2)
}
console.log(tinhBinhPhuong(4));
console.log(tinhBinhPhuong(8));
console.log(tinhBinhPhuong(0));
// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ
// thứ nhất tính từ năm 1 đến 100

let nam = Number(prompt("Nhap nam"))

if (nam % 100 === 0) {
    console.log(`Nam ${nam} thuoc the ky ${nam / 100}`);
} else {
    console.log(`Nam ${nam} thuoc the ky ${Math.ceil(nam / 100)}`);
}
// 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu
// tiên và thêm vào dấu “…” ở cuối chuỗi

let chuoi = prompt("Nhap chuoi")

function inChuoi(chuoi) {
    if (chuoi.length < 15) {
        console.log(chuoi);
    } else {
        // hàm slice áp dụng cho chuỗi, slice có chức năng cắt chuỗi từ vị trí nào và muốn cắt bao nhiêu
        // VD: let chuoi = "mot chuoi rat la dai"
        // VD: chuoi.slice(0, 15): cắt từ vị trí 0 và cắt 15 phần tử ==> "mot chuoi rat l"
        // VD: chuoi.slice(5, 2): cắt từ vị trí 5 và cắt 2 phần tử ==> "uo"
        chuoi = chuoi.slice(0, 15)
        console.log(chuoi + "...");
    }
}
inChuoi(chuoi)