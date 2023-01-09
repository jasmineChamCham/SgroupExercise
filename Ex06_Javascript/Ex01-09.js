// 1. Viet ham tra ve thoi gian hien tai
function getDateTime(){
    const date = new Date();
    return "Now is: " + date.getHours() + ":" + date.getMinutes() + " " + 
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}
const log = getDateTime();
console.log(log);


// =====================================================================================
// 2. Viết hàm để in ra ngày tháng năm với các định dạng mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
function allFormatsOfDate({day, month, year}) {
    const date = new Date(year, month, day);

	var s1 = month + "-" + day + "-" + year + "\n"; 
    var s2 = month + "/" + day + "/" + year + "\n"; 
	var s3 = day + "-" + month + "-" + year + "\n"; 
	var s4 = day + "/" + month + "/" + year + "\n";
	return s1 + s2 + s3 + s4;
}

const date = { 
	day: 28,
	month: 12,
	year: 2022
}

const result = allFormatsOfDate(date)
console.log(result)

// =====================================================================================
// 3.Viết hàm JavaScript để kiểm tra xem một số nguyên (1 < n < 10^1000) đã cho có chuỗi 
// chữ số tăng hay không. Chuỗi chữ số tăng là chuỗi chữ số có độ dài bé nhất là 3, chữ số đứng ở 
// sau lớn hơn chữ số đứng trước (ví dụ: 123, 456, 123456, 6789)
function isIncreaseChainNumber(number) {
	// your code here	
	let numberAsString = number.toString();
	if (numberAsString.length  < 3) return false;
	for (let i=0; i<numberAsString.length-1; i++){
		if (numberAsString.charAt(i) > numberAsString.charAt(i+1)) 
			return false;
	}
	return true
}

const number1 = 123456789n
const number2 = 123432112321n
const number3 = 988811111n

console.log(isIncreaseChainNumber(number1))  // true
console.log(isIncreaseChainNumber(number2)) // false
console.log(isIncreaseChainNumber(number3)) // false

// =====================================================================================
// 4. Viết một hàm JavaScript trả về một chuỗi đã được thay thế mỗi ký tự với ký tự cách nó n 
// ký tự trong bảng chữ cái. (mã hóa caesar)

function caesarCypher(text, step) {
	let res = "";
	for(let i=0; i<text.length;i++){
	    let c = '';
	    if (text.charAt(i) == ' ') {
	        res = res + " ";
	    } 
	    else if (text.charAt(i) == 'y') {
	        res = res + "a";
	    }
	    else if (text.charAt(i) == 'Y') {
	        res = res + "A";
	    }
	    else if (text.charAt(i) == 'z') {
	        res = res + "b";
	    }
	    else if (text.charAt(i) == 'Z') {
	        res = res + "B";
	    }
	    else {
    		let c = text.charCodeAt(i) + step;
    		res = res + String.fromCharCode(c);
	    } 
	}
	return res;
}
const name = "Hoang NhanZ"
const cypherText = caesarCypher(name, 3)
console.log(cypherText) // Krdqj Qkdq

// 5. Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng
function NumFreq(number, freq){
	this.number = number;
	this.freq = freq;
}

function highestFreqNumber(numbers) {
	let arr = [];
	let arrNum = [];
	for (let i = 0; i < numbers.length; i++){
		let num = numbers[i];
		if (! arrNum.includes(num)){
		    arrNum.push(num);
			arr.push(new NumFreq(num, 1));
		}
		else {
			let temp = arr.filter(n => n.number == num);
			let x = temp[0];
			arr.splice(arr.indexOf(x),1);
			arr.push(new NumFreq(num, x.freq + 1));
		}
	}
	let max = 0;
	let maxItem;
	for (let i=0 ; i < arr.length; i++){
		let x = arr[i];
		if (x.freq > max) maxItem = x;
	}
	console.log(maxItem);
}

const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]
highestFreqNumber(numbers) 


// 6. Viết chương trình để kiểm tra xem chuỗi (không phân biệt hoa thường) chứa 'javascript' hay không
const isIncludeJS = (s) => {
    const js = "javascript";
    for (let i=0; i<s.length; i++){
        if (s.charAt(i) == 'j'){
            let temp = s.substring(i, i+js.length);
            if (temp.toLowerCase() == js) return true
        }
    }
    return false
}

const str1 = "asdsajkzzjAVAscriptttaskldjkl123aszxc"
const str2 = "jjjjjjjavaaaaScriptttttttttt"
const str3 = "888javaScript888"

console.log(isIncludeJS(str1)); //true
console.log(isIncludeJS(str2)); //false
console.log(isIncludeJS(str3)); //true

// 7. Viết hàm trả về tên tiếng Anh của tháng từ một số cụ thể: ví dụ 1 → January
function getMonthName(monthNumber) {
    switch(monthNumber){
        case 1 : return "January"; break;
        case 2 : return "February"; break;
        case 3 : return "March"; break;
        case 4 : return "April"; break;
        case 5 : return "May"; break;
        case 6 : return "June"; break;
        case 7 : return "July"; break;
        case 8 : return "August"; break;
        case 9 : return "September"; break;
        case 10 : return "October"; break;
        case 11 : return "November"; break;
        case 12 : return "December"; break;
        default: return "error";
    }
}

console.log(getMonthName(3)) // March
console.log(getMonthName(4)) // April


// 8. Viết một hàm JavaScript tìm từ dài nhất trong chuỗi
function longestWord(str) {
    console.log(str);
    console.log(str.length);
    // var newStr = str.replace(',' , '');
    // console.log(newStr);
	let s = str.split(" ");
	console.log(s);
    let max= "";
	for (let i=0 ; i < s.length ; i++) {
	    if (s[i].length > max.length) {
	        max = s[i];
	    }
	}
	console.log(max);
	return max
}

let str = "Little darlin', it's been a loooooong, cold, lonely winter"
longestWord(str); // loooooong


// 9. Viết hàm tính tổng các chữ số khác 5 của một số nguyên tố (lớn) sử dụng hàm reduce và filter
function snt(number){
	for (let i = 2; i < Math.sqrt(number); i++) {
		if (number % i == 0) return false;
	}
	return true;
}

function sum (number) {
	if (snt(number) == false) return "error";
	else {
		let numberAsString = number.toString();
		let arr = Array.from(numberAsString);
		console.log(arr);
	}
}
  
console.log(sum(1231312321378127391237219312n)) ;// 90
console.log(sum(99999999999999999999999999999n));// 261
console.log(sum(12345678908765432123456555566n));// 98
  