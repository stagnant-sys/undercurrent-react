import React from "react";
import Article from "./components/Article";

const Musique = () => {
  return (
    <div>
      <Article 
        id="test" 
        src="null" 
        artist="Chatmonchy" 
        release="耳鳴り (Miminari)"
        subtitle="Chatmonchy's first album"
        content="This is the first album from Chatmonchy."
      />
    </div>
  )
}

export default Musique;