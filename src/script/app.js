$(document).ready(function(){
	$(".footer").find("li").click(function(){
		var str = $(this).text();
		if(str === "待办"){
			//todo 链接数据库
			alert(1);
		}
		else if(str === "已完成"){
			//todo
			alert(2);
		}
		else{
			//todo
			alert(3);
		}
	})
});