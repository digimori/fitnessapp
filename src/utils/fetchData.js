export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '20e0acb981msh280ffa3e9b90000p16a3c2jsndc30a8f07283',
    },
  };
  
 export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    headers: {
      'X-RapidAPI-Key': '20e0acb981msh280ffa3e9b90000p16a3c2jsndc30a8f07283',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };