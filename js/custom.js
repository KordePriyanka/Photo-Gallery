var thumb1 =  document.getElementById("thumb1");
var thumb1Src =  document.getElementById("thumb1").src;
var thumb2 =  document.getElementById("thumb2");
var thumb2Src =  document.getElementById("thumb2").src;
var thumb3 =  document.getElementById("thumb3");
var thumb3Src =  document.getElementById("thumb3").src;
var thumb4 =  document.getElementById("thumb4");
var thumb4Src =  document.getElementById("thumb4").src;
var thumb5 =  document.getElementById("thumb5");
var thumb5Src =  document.getElementById("thumb5").src;
var thumb6 =  document.getElementById("thumb6");
var thumb6Src =  document.getElementById("thumb6").src;
var thumb7 =  document.getElementById("thumb7");
var thumb7Src =  document.getElementById("thumb7").src;
var thumb8 =  document.getElementById("thumb8");
var thumb8Src =  document.getElementById("thumb8").src;
var thumb9 =  document.getElementById("thumb9");
var thumb9Src =  document.getElementById("thumb9").src;
var thumb10 =  document.getElementById("thumb10");
var thumb10Src =  document.getElementById("thumb10").src;
var thumb11 =  document.getElementById("thumb11");
var thumb11Src =  document.getElementById("thumb11").src;
var thumb12 =  document.getElementById("thumb12");
var thumb12Src =  document.getElementById("thumb12").src;
var thumb13 =  document.getElementById("thumb13");
var thumb13Src =  document.getElementById("thumb13").src;
var thumb14 =  document.getElementById("thumb14");
var thumb14Src =  document.getElementById("thumb14").src;
var thumb15 =  document.getElementById("thumb15");
var thumb15Src =  document.getElementById("thumb15").src;

thumb1.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb1Src
})
thumb2.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb2Src
})
thumb3.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb3Src
})
thumb4.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb4Src
})
thumb5.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb5Src
})
thumb6.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb6Src
})
thumb7.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb7Src
})
thumb8.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb8Src
})
thumb9.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb9Src
})
thumb10.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb10Src
})
thumb11.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb11Src
})
thumb12.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb12Src
})
thumb13.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb13Src
})
thumb14.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb14Src
})
thumb15.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb15Src
})


$(document).ready(function() {
	$('.chat_icon').click(function() {
		$('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
