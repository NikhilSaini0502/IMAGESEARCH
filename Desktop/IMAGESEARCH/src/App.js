import "./App.css";
import jk from "./images/jk.jpeg";
import naru from "./images/naruto.jpeg";
import op from "./images/onepiece.jpeg";
import rr from "./images/rolls.jpeg";
import bm from "./images/bmwM5.jpeg";
import pors from "./images/porsche.jpeg";
import tkr from "./images/tokyo revengers.jpeg";
import bagh from "./images/bagheera.jpeg";
import dore from "./images/doraemon.jpeg";
import lamboe from "./images/lomborghini.jpeg";
import mo from "./images/monk.jpeg";
import she from "./images/sher.jpeg";
import sin from "./images/sinchan.jpeg";
import { useState, useEffect } from "react";

let data = [
  {
    images: jk,
    imageTitle: "Jujutsu Kaisen",
  },
  {
    images: naru,
    imageTitle: "Naruto",
  },
  {
    images: op,
    imageTitle: "One Piece",
  },
  {
    images: rr,
    imageTitle: "Rolls Royce",
  },
  {
    images: bm,
    imageTitle: "BMW M5",
  },
  {
    images: pors,
    imageTitle: "Porsche 911 GT",
  },
  {
    images: tkr,
    imageTitle: "Tokyo Revengers",
  },
  {
    images: bagh,
    imageTitle: "Bagheera",
  },
  {
    images: dore,
    imageTitle: "Doraemon",
  },
  {
    images: lamboe,
    imageTitle: "Lambhorghini",
  },
  {
    images: mo,
    imageTitle: "Monk",
  },
  {
    images: she,
    imageTitle: "Sher",
  },
  {
    images: sin,
    imageTitle: "Rolls Sinchan",
  },
];

function App() {
  const [val, setValue] = useState("");
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    setDataShow(data);
  }, []);

  const searchFunc = () => {
    console.log(val);

    let filetedData = data.filter(function (item) {
      if (item.imageTitle.includes(val)) {
        return item;
      }
    });

    setDataShow(filetedData);
  };

  return (
    <div className="imag">
      <div className="btn">
        <h1>Image Search</h1>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={val}
        />
        <button onClick={searchFunc}>Search</button>
      </div>
      {dataShow.map((item, index) => (
        <div className="main1">
          <img className="img1" src={item.images} /> ,<h2>{item.imageTitle}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
