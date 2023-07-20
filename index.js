//Asynchronus JavaScript

mail = [
	{ subject: "amazon order", content: "your amazon order was placed.." },
	{ subject: "order packed", content: "your amazon order was packed.." },
	{ subject: "amazon shiped", content: "your amazon order was shiped.." },
	{ subject: "amazon deleverd", content: "your amazon order was deleverd.." }
];
// //callback
// callback hell -
/*=============================================*/
function order() {
	setTimeout(() => {
		function packed() {
			setTimeout(() => {
				console.log(mail[1]);
				setTimeout(() => {
					console.log(mail[2]);
					setTimeout(() => {
						console.log(mail[3]);
					}, 3000);
				}, 2000);
			}, 1000);
		}
		packed();
		console.log(mail[0]);
	}, 2000);
}
order();
/*=============================================*/

//Promise
/*=============================================*/
let order = (time, status) => {
	return new Promise((resolve, reject) => {
		if (mail) {
			setTimeout(() => {
				resolve(status());
			}, time);
		}
    else{
      reject('an error accour!')
    }
	});
}

order(2000,()=>console.log(mail[0].content)).then(() => {
  return (order(1000,()=>console.log(mail[1].content)))
}).then(()=>{
   return (order(1000,()=>console.log(mail[2].content)))
}).then(() => {
 return (order(3000,()=>console.log(mail[3].content)))
})
	.catch((error) => console.log("error"))
 .finally(() =>{
console.log('okk bye!')
 })
 /*=============================================*/

// async -await
/*=============================================*/

