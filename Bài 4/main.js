// Bài 4:
// cách 1:
let chuoi = prompt("Nhập vào chuỗi ký tự bất kì:"); //nhập chuỗi mình cần nhập
let chuDaXet = []; // mảng lưu các chữ mình đếm số lần cho nó

function countRepeat(chu) {

    for (i = 0; i < chuDaXet.length; i++) {
        if (chu == chuDaXet[i]) {
            return;
        }
    }

    let count = 0;
    for (i = 0; i < chuoi.length; i++) {
        if (chu == chuoi[i]) {
            count++;
        }
    }
    chuDaXet.push(chu);
    return count;
}

for (let i = 0; i < chuoi.length; i++) {
    let count = countRepeat(chuoi[i]);

    if (count != undefined) {
        console.log(`Chữ ${chuoi[i]} xuất hiện ${count} lần`);
    }
}

// cách 2:
function handleSubmit() {
    // lấy ra giá trị của ô input
    let value = document.getElementById("input").value;
    console.log(value);
}

// tạo 1 mảng để chứa danh sách các kí tự và số lần xuất hiện của nó
let array = []; // mảng 2 chiều, kí tự sẽ lưu ở phần tử  số 0 của mảng con

// duyệt từng kí tự của chuỗi trong ô input và kiểm tra
for (let i = 0; i < value.length; i++) {
    if (checkExistCharacter(array, value.charAt(i))) { // nếu kí tự thứ i tồn tại trong mảng array
        // đã tồn tại kí tự, phải sửa số lần xuất hiện
        // for (let i = 0; i < array.length; i++) {
        //     if (array[i][0] == value.charAt(i)) {
        //         array[i][1] += 1;
        //     }
        // }
        array[index][1] += 1;
    } else {
        // chưa tồn tại thì thêm mới vào mảng array 1 phần tử có số lần xuất hiện là 1
        array.push([value.charAt(i), 1]);
    }
}
// array = [[r,1],[i,2],[k,2],[e,2],[a,2],['',1],[c,1],[d,1],[m,1],[y,1]]
// array.push([value.charAt(i), 1]);

// In ra kết quả
for (let i = 0; i < array.length; i++){
    console.log(`Ký tự ${array[i][0]} xuất hiện $(array[i][1]) lần`);
}

// Kiểm tra tồn tại của 1 kí tự trong 1 mảng và trả về vị trí của phần tử nếu tồn tại,
// nếu không tồn tại thì sẽ trả về -1
function checkExistCharacter(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == char) {
            // tồn tại
            return i;
        } 
    }
    // chưa tồn tại
    return -1;
}

// Bài 6:
// function chuoi(nhapchuoi) {
//     return nhapchuoi.sort((a, b) => a - b);
// }
// console.log(chuoi([4, 5, 6, 7, 53, 6]));

// Bài
