import React,{ useState, useEffect } from "react";
// import VideoPlayer from 'react-video-js-player';
// import Mp from './img/video.mp4';
import "./Usepro.css";

function Usepro() {
  const [datas, setData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '04555d15e2msh78efe703aa2e87fp180e2ejsn56468028e006',
      'X-RapidAPI-Host': 'top-stories-of-kuensel1.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://top-stories-of-kuensel1.p.rapidapi.com/news', options)
      const actualData = await response.json();
      setData(actualData)
      console.log(actualData)
    }
    getData()
  }, [datas])

  return (
    <div className='Usepro'>
      <div className='react'>
        <p>I created my own Kuensel API that generates Top stories of KUENSEL.<span role="img" aria-label="smile">🙂</span></p>
        <p style={{fontWeight: 'bolder',fontSize:'large',textAlign: 'center'}}>Top Stories of <span style={{fontSize:'25px', fontFamily:'Playfair Display'}}>Kuensel</span></p>
          <div className='Kuensel'>
            {
              datas.map((data, id) => (
                <div className='link' key={id}>
                  <a href={data.Url} target='_SEJ' rel='noreferrer'>{data.title}.</a>
                  <p>{data.date}</p>
                </div>
              ))
            }
          </div>
      </div>
      <div className='connect'>
        <a  href="https://github.com/NOY10" target='_SEJ'  rel='noreferrer'>
          <img src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge" loading="lazy"/>
        </a>
        <a href="https://www.linkedin.com/in/lobzang-yonten-b65168221/" target='_SEJ'  rel='noreferrer'>
          <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" loading="lazy"/>
        </a>
        <a href="https://twitter.com/lobzang_yonten" target='_SEJ'  rel='noreferrer'>
          <img src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge" loading="lazy"/>
        </a>
      </div>
    </div>
  )
}

export default Usepro