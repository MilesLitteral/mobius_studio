import React, {Component} from "react";
import { Button, Jumbotron, Image} from "react-bootstrap";

const xo = {
  backgroundImage:
  "url(https://uploads.codesandbox.io/uploads/user/bf39a48c-cc3f-4699-9922-99498a6a8538/lrfl-BBG.v1.jpg)",
  width: "200%",
  height: "375px"
};


const sr = { left: "1000px" };

const parse = {
    position: "relative",
    left: "500px",
    top: "0px"
  };

const parseD = {
  position: "relative",
  left: "570px",
  top: "0px"
};


const parseB = {
  position: "relative",
  left: "250px",
  top: "15px",
};

const imgg = {
  position: "relative",
  left: "690px",
  top: "-20px",
  width: "200px"
  
};

 const home = () => (
    <div>
  <title>Mobius on Heroku</title>
  <Jumbotron style={xo}>
       <Image className="border border-danger" style={imgg} src={"https://uploads.codesandbox.io/uploads/user/bf39a48c-cc3f-4699-9922-99498a6a8538/F2EE-9TLt-Mob.png"} circle></Image>
       <h1 style={parse}>Welcome to Mobius!</h1>
    <p style={parseD}>
      A Digital Community for Artists and Industry folks
    </p>
    <p style={parse}>
      <Button style={parseB}bsStyle="primary">Learn more</Button>
    </p>
  </Jumbotron>
<p>
  Determined to make the first mass-distribution record in full 4D as
          well as to do the first transition from analogue recording to 4D
          mixing and processing. But What IS this "spatial sound" you speak of?
          Without getting into specifics, spatial sound is a way of projecting
          sound that mimics a hologram more closely than a traditional sound-
          projecting platform. This has the advantage of being able to
          artificially simulate reverb environments as well as to create
          "objects" that feel as if they are physically there, unlike the
          currently dominant platforms that can only create a general sense of
          echolocation. This opens artists of all kinds up to the use of space
          itself as a canvas to create with.
        </p>
  <div className="col-md-6">
    <h3>
      <span className="glyphicon glyphicon-link" /> Helpful Links
          </h3>
    <ul>
      <li>
        <a href="https://www.heroku.com/home">Heroku</a>
      </li>
      <li>
        <a href="http://www.4dsound.net/blog/2017/6/30/tedx-talk-the-ecology-of-listening">
          TEDx Talk: The Ecology of Listening
              </a>
      </li>
    </ul>
  </div>
</div>)

export default home;