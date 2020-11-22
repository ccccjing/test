function setColor(){
	var db = document.getElementById("box");
	var list = db.children;
	for(var i = 0;i < list.length;i++){
		list[i].style.background = getColor();
	}
}
setColor();
function getColor(){
	var str = "0123456789ABCDEF";
	var count = "#";
	for(var i = 0;i < 6;i++){
		var randomIndex = Math.floor(Math.random()*16);
		var randomStr = str[randomIndex];
		count += randomStr;
	}
	return count;
}