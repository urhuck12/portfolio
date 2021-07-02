
window.onload = function () {

    var myC = [0, 0, 0, 0, 0, 0, 0];
    var v = [0, 0, 0, 0, 0, 0];
    // myC = document.getElementById("my_cl"); //내가 선택할 숫자.
    // ca = document.getElementById("result"); // 결과값
    // bt_1 = document.getElementById("pc_cl"); // 컴퓨터가 추첨해놓은거

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var p5 = document.getElementById("p5");
    var p6 = document.getElementById("p6");

    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");
    var c5 = document.getElementById("c5");
    var c6 = document.getElementById("c6");

    var pc_cl = document.getElementById("pc_cl");


    pc_cl.onclick = cl();


    function cl() {

        myC[0] = c1.value;
        myC[1] = c2.value;
        myC[2] = c3.value;
        myC[3] = c4.value;
        myC[4] = c5.value;
        myC[5] = c6.value;
        a10();
    }


    function a10() {
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45];


        var r = Math.floor(Math.random() * a.length + 1);// 45까지 숫자를 랜덤하게 뽑음.
        v[0] = r;                                       //랜덤하게 뽑은 숫자를 v로 보냄
        var temp = 0;                                     //랜덤하게 뽑은 숫자를 임시 저장함


        ccc:
        while (true) {
            temp = Math.floor(Math.random() * a.length + 1);
            for (i = 0; i < 6; i++) {
                if (v[1] == temp) {
                    continue ccc;
                }
            }
            v[1] = temp;
            break;
        }
        ddd:
        while (true) {
            temp = Math.floor(Math.random() * a.length + 1);
            for (i = 0; i < 6; i++) {
                if (v[2] == temp) {
                    continue ddd;
                }
            }
            v[2] = temp;
            break;
        }
        eee:
        while (true) {
            temp = Math.floor(Math.random() * a.length + 1);
            for (i = 0; i < 6; i++) {
                if (v[3] == temp) {
                    continue eee;
                }
            }
            v[3] = temp;
            break;
        }

        fff:
        while (true) {
            temp = Math.floor(Math.random() * a.length + 1);
            for (i = 0; i < 6; i++) {
                if (v[4] == temp) {
                    continue fff;
                }
            }
            v[4] = temp;
            break;
        }
        ggg:
        while (true) {
            temp = Math.floor(Math.random() * a.length + 1);
            for (i = 0; i < 6; i++) {
                if (v[5] == temp) {
                    continue ggg;
                }
            }
            v[5] = temp;
            break;
        }
        


        p1.innerHTML = "내가 지정한 번호";

        // dw("추첨번호 ")
        var ts = "";
        for (var i = 0; i < v.length; i++) {             //v에 있는 숫자갯수만큼만  
            ts = ts + (v[i] + " ");
        }

        p2.innerHTML = ts;

     
        p3.innerHTML = "당신의 번호: ";

        var ts4 = "";
        for (var i = 0; i < 6; i++) {
            ts4 = ts4 + (myC[i] + " ");
        }
        p4.innerHTML = ts4;

        var ca = 0;
        for (var i = 0; i < 6; i++) {
            if (myC[i] == v[0]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                ca = ca + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (myC[i] == v[1]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                ca = ca + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (myC[i] == v[2]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                ca = ca + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (myC[i] == v[3]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                ca = ca + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (myC[i] == v[4]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                ca = ca + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (myC[i] == myC[5]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                ca = ca + 1;
            }
        }
        p5.innerHTML = "맞춘갯수: " + ca;
        switch (ca) {
            case 3:
                p6.innerHTML = ("5등입니다.");
                break;
            case 4:
                p6.innerHTML = ("4등입니다.");
                break;
            case 5:
                p6.innerHTML = ("3등입니다.");
                break;
            case 6:
                p6.innerHTML = ("1등입니다.");
                break;
            default:
                p6.innerHTML = ("꽝입니다.")
                break;
        }
    }
}

