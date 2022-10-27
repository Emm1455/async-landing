const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCX9NJ471o7Wie1DQe94RVIg&filter=uploads_latest&hl=en&gl=US';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf5fdc591emshb4efc7c3428379dp1ddfe1jsn09c81190da14',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}

(async() =>{
    try{
        const videos = await fetchData(API);
        let view = '';
        for (let i = 0; i<4 ;i++){
            let imgUrl = videos.contents[i].video.thumbnails[3].url;
            let title = videos.contents[i].video.title;
            view = view + `
            <a href="https://youtube.com/watch?v=${videos.contents[i].video.videoId}" target="_blank">
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${imgUrl}" alt="lala" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${title}
                    </h3>
                </div>
            </div>
            </a>`;
        }
        // let imgUrl = videos.contents[0].video.thumbnails[3].url;
        // let view = `${videos.contents.map(video => `
        // <div class="group relative">
        // <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        //     <img src="${video.video.thumbnails[3].url}" alt="lala" class="w-full">
        //     </div>
        //     <div class="mt-4 flex justify-between">
        //     <h3 class="text-sm text-gray-700">
        //         <span aria-hidden="true" class="absolute inset-0"></span>
        //         ${video.video.title}
        //     </h3>
        //     </div>
        // </div>
        // `).slice(0,4).join('')} `;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();