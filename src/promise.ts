import axios from "axios";

interface Article {
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface FetchNewsParams{
  q: string;
  searchIn?: 'title' | 'description' | 'content',
  sources?: string;
  language?: string;
}

interface FetchNewsResponse {
  articles: Article[];
  status: string;
  totalResults: number;
}

async function fetchNews(userParams: FetchNewsParams){
  const BASE_URL = 'https://newsapi.org/v2';
  const END_POINT = '/everything';
  const url = BASE_URL +END_POINT;

  const params = {
    apiKey:'c8747511a2c34730a83caaff4f3693e7',
    ...userParams
  };

  const res = await axios.get<FetchNewsResponse>(url, {params});

  return res.data
}

function example1(){
  const promise = fetchNews({q:'Tesla'})
  promise.then((greenData)=>{
    console.log('Ням ням ням', greenData);
  }).catch((redData)=>{
    console.log('Поверніть гроші');
  })
}


async function example2(){
  const promise = fetchNews({q:'Tesla'});
  try{
    const greenData = await promise;
    
    console.log(greenData);
  }catch{
    console.log('ERROR');
  }
}


