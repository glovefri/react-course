import type { GiphyRandomResponse } from '../data/giphy.response';

const API_KEY = 'qBYw2zK8BpSQn8C6LLyKWlApHgpCizyh';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)

const createImageInsideDom = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
}

myRequest.then( (response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    // const imageUrl = data.data.images.original.url;
    // console.log(imageUrl)

    createImageInsideDom(imageUrl)
  })
  .catch( (error) => {
    console.error(error)
  })