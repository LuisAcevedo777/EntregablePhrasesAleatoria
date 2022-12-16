import React, { useState } from "react";
import quotes from "./quotes.json";
import continuar from "./assets/img/pngegg.png"
import comillas from "./assets/img/comillas.svg"

const UserBox = () => {
  const color = ["blueviolet","maroon","red","purple","fuchsia","green",
  "lime","olive","yellow","navy","blue","aqua","orange",
  ,"aquamarine","IndianRed",
  "black","blueviolet","brown","cadetblue",
  "chartreuse","chocolate","coral","cornflowerblue","crimson","darkblue",
  "limegreen","orchid","fuchsia","grey","magenta","hotpink","indianred",
  "darkcyan","darkgoldenrod",
  "darkgreen","darkkhaki","darkmagenta","darkolivegreen",
  "darkorange","darkorchid","darkred","darksalmon","darkseagreen",
  "darkslateblue","darkslategray","darkslategrey","darkturquoise",
  "darkviolet","deeppink","deepskyblue","darkorchid","dimgrey","dodgerblue",
  "firebrick","orangered","forestgreen","gainsboro","coral","darkcyan","darkgoldenrod",
  "darkgreen","darkkhaki","darkmagenta","darkolivegreen",
  "darkorange","darkorchid","darkred","darksalmon","darkseagreen",
  "darkslateblue","darkslategray","darkslategrey","darkturquoise",
  "darkviolet","deeppink","deepskyblue","darkorchid","dimgrey","dodgerblue",
  "firebrick","orangered","forestgreen","gainsboro","coral","darkcyan","darkgoldenrod",
  "darkgreen","darkkhaki","darkmagenta","darkolivegreen",
  "darkorange","darkorchid","darkred","darksalmon","darkseagreen",
  "darkslateblue","darkslategray","darkslategrey","darkturquoise",
  "darkviolet","deeppink","deepskyblue","darkorchid","dimgrey","dodgerblue",
  "firebrick","orangered","forestgreen","gainsboro","coral","darkcyan","darkgoldenrod",
  "darkgreen","darkkhaki","darkmagenta","darkolivegreen",
  "darkorange","darkorchid","darkred","darksalmon","darkseagreen",
  "darkslateblue","darkslategray","darkslategrey","darkturquoise",
  "darkviolet","deeppink","deepskyblue","darkorchid","dimgrey","dodgerblue",
  "firebrick","orangered","forestgreen","gainsboro","coral","blueviolet","maroon","red","purple","fuchsia","green",
  "lime","olive","yellow","navy","blue","aqua","orange",
  ,"aquamarine","IndianRed",
  "black","blueviolet","brown","cadetblue",
  "chartreuse","chocolate","coral","cornflowerblue","crimson","darkblue",
  "limegreen","orchid","fuchsia","grey","magenta","hotpink","indianred",
  "darkcyan","darkgoldenrod",
  "darkgreen","darkkhaki","darkmagenta","darkolivegreen",
  "darkorange","darkorchid","darkred","darksalmon","darkseagreen",
  "darkslateblue","darkslategray","darkslategrey","darkturquoise",
  "darkviolet","deeppink","deepskyblue","darkorchid","dimgrey","dodgerblue",
  "firebrick","orangered","forestgreen","gainsboro","coral","darkcyan","darkgoldenrod",

]
  

  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);
  // const index = 1;

  const changeUser = () => {
    const newRandom = Math.floor(Math.random() * quotes.length);
    setIndex(newRandom);
  };


  return (
    <body style={{backgroundColor: color[index]}}>
      
    
    <div className="BoxPhrase" style={{backgroundColor: "white"}}>
<div className="p1">
<i class="fa-solid fa-quote-left"  style={{color: color[index], fontSize:"68px"}}></i>
<p style={{color: color[index]}}>"{quotes[index].quote}"</p></div>
<div className="union"> 
      <h4 style={{color: color[index]}}>
        {quotes[index].author}
      </h4>
      
      <img style={{backgroundColor: color[index]}} onClick={changeUser} src={continuar} alt="" /> </div></div>
    </body>
  );
};

export default UserBox;
