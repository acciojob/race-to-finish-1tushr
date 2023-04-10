window.promises = [

new Promise(resolve=>setTimeOut(()=>resolve("promise 1 resolved"),Math.floor(Math.random()*4000)+1000)),

new Promise(resolve=>setTimeOut(()=>resolve("promise 2 resolved"),Math.floor(Math.random()*4000)+1000)),
	
new Promise(resolve=>setTimeOut(()=>resolve("promise 3 resolved"),Math.floor(Math.random()*4000)+1000)),
	
new Promise(resolve=>setTimeOut(()=>resolve("promise 4 resolved"),Math.floor(Math.random()*4000)+1000)),
	
new Promise(resolve=>setTimeOut(()=>resolve("promise 5 resolved"),Math.floor(Math.random()*4000)+1000)),
	
];
Promise.any(promises).then (result =>{
	document.getElementById("output").textContent=result;
});

// Do not change the code above this
// add your promises to the array `promises`
