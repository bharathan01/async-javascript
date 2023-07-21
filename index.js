//Asynchronus JavaScript

 mail = [
 	{ subject: "amazon order", content: "your amazon order was placed.." },
	{ subject: "order packed", content: "your amazon order was packed.." },
 	{ subject: "amazon shiped", content: "your amazon order was shiped.." },
 	{ subject: "amazon deleverd", content: "your amazon order was deleverd.." }
 ];
 //callback
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

// promises all, settiled,any,race

let animal = ['Cat', 'dog']
let flower = ['jasmin', 'rose']


getAminal = new Promise((res, rej) => {
	if (animal) {
		setTimeout(() => {
			res(animal)
		}, 2000)
	}
	else {
		rej(console.log('error message..'))
	}
})


getFlower = new Promise((res, rej) => {
	if (animal) {
		setTimeout(() => {
			res(flower)
		}, 1000)
	}
	else {
		rej(console.log('error message..'))
	}
})


 getAminal.then((data) =>console.log(data))
 getFlower.then((data) =>console.log(data))

//all

 Promise.all([getAminal,getFlower])
	 .then((data) => console.log(data))
	 .catch(console.log("error")) // obtaining the all resloved  promises

//allsettiled
 Promise.allSettled([getAminal,getFlower])
	 .then((data) => console.log(data))
	 .catch(console.log("error")) // obtaining the resloved promises only ..

//any
 Promise.any([getAminal,getFlower])
	 .then((data) => console.log(data))
	 .catch(console.log("error")) // returning a single promises , after the sucess.

//race
 Promise.race([getAminal,getFlower])
	 .then((data) => console.log(data))
	 .catch(console.log("error"))  // return the first resolved or rejected promises 

/*=============================================*/

// async -await

//normal- function
async function fun() {
	const data1 = await getAminal
	const data2 = await getFlower
	console.log(data1,data2)
}
fun()
/*=============================================*/

