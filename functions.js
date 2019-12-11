import React, {useEffect,useState } from 'react';
const accessToken = 'BQDqCflUQ12aM8fi8cFsKpddhRv95BlEyaTK3Fg-jANU8IDqfScwwjd3ur-SveEfYkbACzP2sVLVaH2Tuvk9L9lEPp-DIrGSt26G_9uSlH35l4LyWWkfMEOtEIhNlnE5___4lC7aBR9XMZFDNUm1_H9ujJay5rcBslqVRevlkr7cGsM9';

export function Spotify(){

const [query,setQuery] = useState('')
const [tracks, setTracks] = useState([]);

useEffect(() => {
	fetchTracks();
}, []);


	function fetchTracks(){
		let url = `https://api.spotify.com/v1/search?q=${query}&type=track`;

		fetch(url, {
		headers: {
			'Content-Type': 'application.json',
			Autorization: `Bearer ${accessToken}`
		}
	})
	.then(resp => resp.json())
	.then(data => {
			console.log(data);
		 	setTracks(data.tracks.items)
	});
}

function handleSubmit(e){
	e.preventDefault();
	fetchTracks();
}

return(
	<div className="min-h-screen App flex px-10 justify-center items-center flex-col">
		<h1 className="text-5x1 mb-10">Searching Spotify!</h1>

		/*search bar */
		<form className="mb-10 flex" onSubmit={handleSubmit}>
			<input type ="text" className = "p-2 mr-2 round shadow-lg w-full" value = {query} onChage={e => setQuery(e.targe.value)}/>
			<button type="submit" className="bg-red-600 text-blue-100 py-2 px-8 rounded shadow-lg">Search</button>
		</form>

		/* show search results*/
		<div className="flex">
		{tracks.map((track,index) => {
			const img = tracks.images[0];

			return(
				<div className="w-1/3 mb-10" key={index}>
					{img && <img className="rounded mb-3 text-center p-3" src={img.url} alg={tracks.name} width = "300" />}
				<h2>{track.name}</h2>
				</div>


		)}
		)}
			</div>
		</div>
	);

}
