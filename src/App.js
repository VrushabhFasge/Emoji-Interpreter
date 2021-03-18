import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙏": "prayer",
  "😙": "kiss",
  "🎀": "ribbon",
  "👇": "direction",
  "🤜": "right fist",
  "🍠": "rutabaga",
  "❌": "ban",
  "💁": "sassiness",
  "😪": "crying face",
  "😓": "crying face",
  "👹": "dead monster",
  "🙌": "praise jesus",
  "💆‍♀️": "woman getting masaage",
  "😯": "shocked",
  "😤": "angry",
  "🙇‍♂️": "got brilliant idea",
  "🏩": "hospital",
  "😡": "angry face",
  "😑": "Negative Face"
};

const emojiList = Object.keys(emojiDictionary);

var emojiDictionary1 = {
  "🙏": "high-five/ forgiveness",
  "😙": "whistle",
  "🎀": "fighting cancer",
  "👇": "feeling down",
  "🤜": "respect",
  "🍠": "sweet potato",
  "❌": "kiss in English chat",
  "💁": "information desk person",
  "😪": "sleeping in anime",
  "😓": "disappointment with relief",
  "👹": "japanese ogre",
  "🙌": "celebration",
  "💆‍♀️": "leave me alone",
  "😯": "hush hush hush!",
  "😤": "triumph",
  "🙇‍♂️": "bowing",
  "🏩": "hotel",
  "😡": "pouting face",
  "😑": "neutral face"
};

export default function App() {
  const [meaning, setMeaning] = useState();
  const [meaning1, setMeaning1] = useState();

  function clickHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      setMeaning("sorry, we are adding this emoji soon.");
    } else {
      setMeaning(meaning);
    }
    console.log("guessed meaning ", meaning);

    var inputEmoji1 = event.target.value;
    var meaning1 = emojiDictionary1[inputEmoji1];
    if (meaning1 === undefined) {
      setMeaning1("sorry, we are adding this emoji soon.");
    } else {
      setMeaning1(meaning1);
    }

    console.log("actual meaning ", meaning1);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
    setMeaning1(emojiDictionary1[emoji]);
  }

  return (
    <div className="App">
      <div className="nav">
        <h1 className="header-title"> Emoji Interpreter ! </h1>
      </div>

      <input
        placeholder="insert your emoji"
        className="input"
        onChange={clickHandler}
      ></input>
      <p className="output">Guessed meaning is: {meaning}</p>
      <p className="output">Actual meaning is: {meaning1}</p>

      <div className="emojiShow">
        {emojiList.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ padding: "4px", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="footer">
        &lt; Let's connect socially &gt;
        <ul className="unordered">
          <li className="inline">
            <a href="https://www.instagram.com/_dope_indian_dude_/">
              Instagram
            </a>
          </li>

          <li className="inline">
            <a
              style={{ color: "black" }}
              href="https://twitter.com/VrushabhFasge"
            >
              Twitter
            </a>
          </li>
          <li className="inline">
            <a
              style={{ color: "blue" }}
              href="https://www.linkedin.com/in/vrushabh-fasge-1b39a4190/?originalSubdomain=in"
            >
              Linkedin
            </a>
          </li>
          <li className="inline">
            <a
              style={{ color: "black" }}
              href="https://github.com/VrushabhFasge"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
