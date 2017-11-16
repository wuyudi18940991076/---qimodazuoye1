var num = 1;
function tab(tab){
	document.getElementById("tab_"+num).style.display="none";
	document.getElementById("contain_"+num).classList.remove("xian");
	document.getElementById("tab_"+tab).style.display="block";
	document.getElementById("contain_"+tab).classList.add("xian");
	num = tab;
}

function leftt(){
	document.getElementById("tab_"+num).style.display="none";
	document.getElementById("contain_"+num).classList.remove("xian");
	if(num == 1){
		num = 6;
	}
	num--;
	document.getElementById("tab_"+num).style.display="block";
	document.getElementById("contain_"+num).classList.add("xian");
	
}

function rightt(){
	document.getElementById("tab_"+num).style.display="none";
	document.getElementById("contain_"+num).classList.remove("xian");
	if(num == 5){
		num = 0;
	}
	num++;
	document.getElementById("tab_"+num).style.display="block";
	document.getElementById("contain_"+num).classList.add("xian");
}