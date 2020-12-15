import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❣️": "Heart Exclamation",
  "💟": "Heart Decoration",
  "💞": "Revoving Hearts",
  "💓": "Bearing Heart",
  "💖": "Sparking Heart",
  "💝": "Heart with ribbon",
  "💘": "Heart with arrow",
  "❤️": "Red Heart",
  "💔": "Broken Heart",
  "🧡": "Orange Heart",
  "💛": "Yellow Heart",
  "💚": "Green Heart",
  "💙": "Blue Heart",
  "💜": "Purple Heart",
  "🖤": "Black Heart",
  "💌": "Love letter",
  "😘": "Face Blowing a Kiss",
  "💐": "Bouqet",
  "🍫": "Chocolate Bar",
  "💍": "Ring",
  "🤟": "Love you Gesture"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("Get your meaning here!");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning(
        "sorry! this emoji is not in our Database. We will update this soon."
      );
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1> Valentine’s Day</h1>
      <small>
        {" "}
        Valentine's Day is nearby know the meaning of below symbols
      </small>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Paste/type/Insert the emoji here"}
      />
      <h2> {emoji} </h2> {}
      <h3> {meaning} </h3> {}
      {emojis.map((emoji) => (
        <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
