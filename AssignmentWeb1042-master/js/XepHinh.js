manhGhep = new Array();
ktTrong = new Array(); //ktTrong[i] = false nếu ô đó trống, = true nếu ô đó chứa mảnh ghép
for(i = 1; i < 10; i++){
	ktTrong[i] = true;
	manhGhep[i] = new Image();
	manhGhep[i].src = "images/pic"+i+".jpg";
}

ktTrong[1] = false; //ô đầu tiên trống

viTriBenCanh = new Array();
viTriBenCanh[1] = new Array(2,4);
viTriBenCanh[2] = new Array(1,5,3);
viTriBenCanh[3] = new Array(2,6);
viTriBenCanh[4] = new Array(1,5,7);
viTriBenCanh[5] = new Array(2,4,6,8);
viTriBenCanh[6] = new Array(3,5,9);
viTriBenCanh[7] = new Array(4,8);
viTriBenCanh[8] = new Array(5,7,9);
viTriBenCanh[9] = new Array(6,8);

function clickChuot(x){
	for(i = 0; i < viTriBenCanh[x].length; i++){
		if(ktTrong[viTriBenCanh[x][i]] == false){
			diChuyen(x, viTriBenCanh[x][i]);
		}
	}
}

function diChuyen(f,t){
	ktTrong[f] = false;
	ktTrong[t] = true;
	document.getElementById("img"+t).src = document.getElementById("img"+f).src;
	document.getElementById("img"+f).src = "images/blank.jpg";
}

function boCuoc(giaTri){
	if(giaTri == "Bỏ cuộc"){
		for(i = 1; i < 10; i++){
			document.getElementById("img"+i).src = manhGhep[i].src; //Sắp xếp các mảnh ghép lại theo đúng thứ tự
		}
		document.getElementById("nutNhan").value = "Chơi lại";
	}
	if(giaTri == "Chơi lại"){
		location.reload(); //load lại trang
	}
}
var soLanTrao = 0;
function khoiTao(){
	while(soLanTrao < 100){
		i = Math.ceil(Math.random()*9) //Chọn một vị trí ngẫu nhiên từ 1 -> 9
		clickChuot(i);
		soLanTrao++;
	}
}