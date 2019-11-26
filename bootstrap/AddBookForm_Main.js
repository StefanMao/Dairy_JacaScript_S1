
$(document).ready(function(){

 $('#datepicker').datepicker(); 

 //上傳圖片
});

function getBookImage(){

	//取得Input text tag
	const getSrcElement = document.getElementById("BookImg_src")
	const Imgsrc = getSrcElement.value

	const getImgElement =document.getElementById("BookImg")

	//判斷使用者輸入的圖片連結是否存在

	
	getImgElement.src=Imgsrc

	/*
	if(getImgElement.width>0)
	{
		getImgElement.src=Imgsrc
	}
	else
	{
		console.log("圖片失聯~~請確認圖片來源")
		getImgElement.src="https://i.imgur.com/EkgYcyW.jpg"
	}
	*/
	
}

