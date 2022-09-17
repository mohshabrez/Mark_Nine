import React from "react";
import { useState } from "react";
import "./styles.css";

const songsobj = {
  Party: [
    {
      SingerName: "Arjit Singh",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    },
    {
      SingerName: "Atif Aslam",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=9rGId3btfao">Dance now</a>
        </button>
      )
    },
    {
      SingerName: "YO YO HoneySingh",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=9HA5RZx-rTg">Dance now</a>
        </button>
      )
    }
  ],
  Sad: [
    {
      SingerName: "Lata Mangeshkar",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    },
    {
      SingerName: "Atif Aslam",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    },
    {
      SingerName: "Sonu Nigam",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    }
  ],
  Melodies: [
    {
      SingerName: "Arjit Singh",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    },
    {
      SingerName: "Shreya Goshal",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    },
    {
      SingerName: "AR Rahaman",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    }
  ],
  Oldhits: [
    {
      SingerName: "Mohammed Rafi",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    },
    {
      SingerName: "Rajesh khanna",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    },
    {
      SingerName: "Ilyaraja",
      Songs: (
        <button>
          <a href="https://www.youtube.com/watch?v=z6n1KiEfFCQ">Dance now</a>
        </button>
      )
    }
  ]
};

var typesongs = Object.keys(songsobj);

export default function App() {
  var [selectmood, setmood] = useState("Oldhits");
  function moodclickhandler(mood) {
    setmood(mood);
  }
  return (
    <div className="App">
      <h1>🎼Musically</h1>
      <h3>Listen music as per your mood</h3>
      <p>click down the buttons!!!</p>
      <div>
        {typesongs.map((mood) => (
          <button onClick={() => moodclickhandler(mood)}>{mood}</button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songsobj[selectmood].map((singer) => (
            <li key={singer.SingerName}>
              {" "}
              <div className="btnop">{singer.SingerName}</div>
              <div className="btnopp">{singer.Songs}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
