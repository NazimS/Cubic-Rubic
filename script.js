const suduki1 = document.getElementById("suduki1");
const suduki2 = document.getElementById("suduki2");
const suduki3 = document.getElementById("suduki3");
const suduki4 = document.getElementById("suduki4");
const suduki5 = document.getElementById("suduki5");

bosluq = ''
let x = 1

for (let i = 1; i <= 5; i++) {  // row
    bosluq +="<tr>";
        for (let k = 1; k <= 5; k++) {  // column
            if (i == k) {
                 x = "green"; 
            }
            else if  (i + k == 6 ) {
                x = "purple"   
            }
            else if  (i == 3 || k == 3 ) {
                x = "orange"   
            }
            else {
                x = "yellow"
            }
            bosluq +=`<td class = "${x}"></td>`;
        }
    bosluq += "</tr>" ;
}
suduki1.innerHTML = bosluq

bosluq1 = ''
let x1 = 1

for (let i = 1; i <= 5; i++) {
    bosluq1 += `<tr>`
        for (let k = 1; k <= 5; k++) {
            if (i == k || i < k) x1 = "green"; else x1 = '';
            bosluq1 += `<td class = "${x1}"></td>`;
        }
    bosluq1 += `</tr>`
}
suduki2.innerHTML = bosluq1

bosluq2 = ''
let x2 = 1

for (let i = 1; i <= 5; i++) {
    bosluq2 += `<tr>`
        for (let k = 1; k <= 5; k++) {
            if (i==k || i + k == 6)  x2 = "yellow";  else  x2 = ''
                bosluq2 += `<td class = "${x2}"></td>`
        }
    bosluq2 += `</tr>`
}
suduki3.innerHTML = bosluq2

bosluq3 = ''
let x3 = 1

for (let i = 1; i <= 5; i++) {
    bosluq3 += `<tr>`
        for (let k = 1; k <= 5; k++) {
            if (i==k) { 
                x3 = "green";
            }
             else if (i > k || i < k){
                  x3 = "purple";
             }
             else {
                  x3 = ''
             }
                bosluq3 += `<td class = "${x3}"></td>`
        }
    bosluq3 += `</tr>`
}
suduki4.innerHTML = bosluq3

bosluq4 = ''
let x4 = 1

for (let i = 1; i <= 8; i++) {
    bosluq4 += `<tr>`
        for (let k = 1; k <= 8; k++) {
            if (i == k || i + k == 9) {
                x4 = "green";
            }
            else if ( i == 1 || i == 8 )  {
                x4 = "green" ;
            }
            else if ( (k - i == 1) && ( k + i == 5 || k + i == 7) 
                     || (k - i == 2) && ( k + i == 6 || k + i == 8)
                     || (k - i == 3) && ( k + i == 7 || k + i == 8) 
                     || (k - i == 4) && (k + i == 8)
                     || (k - i == -2) && ( k + i == 10 || k + i == 12 || k + i == 14)
                     || (k - i == -1) && ( k + i == 11 || k + i == 13 || k + i == 15)
                     || (k - i == -4) && (k + i == 10) 
                     || (k - i == -3) && (k + i == 11)
                    )  {
                x4 = "green" ;
            }
            else {
                x4 = ""
            }
            bosluq4 += `<td class = "${x4}""></td>`
        }
    bosluq4 += `</tr>`
}
suduki5.innerHTML = bosluq4