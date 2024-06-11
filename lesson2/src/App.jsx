import "./App.css";
import React, { useState } from "react";
function App(props) {
  const [photos, setPhotos] = useState([
    {
      id: 101,
      url: "https://wallpapers.com/images/featured/prague-l8aujv2epf7ojy0r.jpg",
    },
    { id: 102, url: "https://images8.alphacoders.com/374/374028.jpg" },
    {
      id: 103,
      url: "https://images7.alphacoders.com/487/thumb-1920-487159.jpg",
    },
    {
      id: 104,
      url: "https://wallpapers.com/images/hd/prague-church-at-dawn-500ebpx4fnhzqxni.jpg",
    },
    {
      id: 105,
      url: "https://wallpapers.com/images/hd/prague-churches-and-spires-kr2ll9pmha86r9tt.jpg",
    },
    {
      id: 106,
      url: "https://c4.wallpaperflare.com/wallpaper/150/315/757/prague-czechia-czech-republic-europe-wallpaper-preview.jpg",
    },
    { id: 107, url: "https://wallpapers-hub.art/wallpaper-images/41279.jpg" },
    { id: 108, url: "https://wallpaper.dog/large/20388524.jpg" },
  ]);

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= photos.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const prev = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return photos.length - 1;
      }
      return newIndex;
    });
  };

  const photoClick=(i)=>{
 setIndex(i)
  }
  return (
    <div>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img id="main" src={photos[index].url}></img>
      <div>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <div id="timeline">
        {photos.map((elm, i) => {
          let style = i == index ? "active" : "";
          return <img key={elm.id} src={elm.url} class={style} 
          onClick={()=>photoClick(i)}/>;
        })}
       
          
      </div>
    </div>
  );
}
export default App;
