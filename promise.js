const myPromise =new Promise((resolve,reject)=>{
	setTimeout(()=>resolve('Hello world'),1000)
	setTimeout(()=>reject('Ahh'),500)
})

myPromise.then(
	(value)=>console.log("執行成功 結果為:" +value),
	(error)=>console.log("執行成功 結果為:" +error)
)
	