const myPromise = new Promise((resolve, reject) => {});
console.log(myPromise);

myPromise.then((value) => {}).catch((error) => {});

const url = `https://dog.ceo/api/breeds/image/random`;
const url2 = `https://jsonplaceholder.typicode.com/users`;

fetch(url)
	.then((response) => response.json()) //{return response.json()}
	.then((json) => {
		console.log(json);
	})
	.catch((error) => {
		// console.log(error.message);
		console.log("Что то сломалось");
	});

const getData = async (url) => {
	try {
		const res = await fetch(url);
		const dataFromServer = await res.json();
		return dataFromServer;
	} catch (error) {
		console.log(error.message);
	}
};



const btnEl = document.querySelector('button');
btnEl.addEventListener('click', async (e) => {
    const fetchData = await getData(url);
    const imgEl = document.querySelector('img');
    imgEl.src = fetchData.message;
});