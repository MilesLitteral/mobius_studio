import React, { Component } from "react";
import Card from "./Card.js";
import { Button, Jumbotron, ButtonToolbar, Image } from "react-bootstrap";

class App extends Component {
  render() {
    const wStyles = { maxWidth: 400, margin: "0 auto 10px", left: "145px" };
    const wBStyles = { maxWidth: 400, margin: "0 auto 10px", left: "345px" };
    const wXStyles = { maxWidth: 400, margin: "0 auto 10px", left: "545px" };
    const xo = {
      backgroundImage:
        "url(https://uploads.codesandbox.io/uploads/user/bf39a48c-cc3f-4699-9922-99498a6a8538/lrfl-BBG.v1.jpg)",
      width: "200%"
    };
    const gin = { width: "87%", height: "65px", left: "0px" };

    const sr = { left: "1000px" };
    return (
      <div>
        <title>Mobius on Heroku</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="../img/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" />
        <script
          type="text/javascript"
          src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"
        />
        <ButtonToolbar>
          <nav className="navbar navbar-default navbar-static-top navbar-inverse">
            <a href="/i">
              <Button
                className="glyphicon glyphicon-home"
                bsSize="large"
                bsStyle="primary"
              >
                {" "}
                HOME{" "}
              </Button>
            </a>
            <Card
              title=" Use Mobius Online"
              bsStyle="primary"
              bsSize="large"
              wellStyles={wStyles}
              ActionA="Search by Album"
              ActionB="Search by Artist"
              ActionC="Search by Agent"
              ActionD="Advanced Search"
              glyph="star"
            />
            <Card
              title=" Info & Features"
              bsStyle="primary"
              bsSize="large"
              wellStyles={wBStyles}
              ActionA="Mission Statement"
              ActionB="Business Model"
              ActionC="Goals & Milestones"
              ActionD="Services"
              glyph="cog"
            />
            <Card
              title=" Login"
              bsStyle="primary"
              bsSize="large"
              wellStyles={wXStyles}
              ActionA="User Login"
              ActionB="Artist Login"
              ActionC="Industry Agent Login"
              ActionD="Help Center"
              glyph="user"
            />
            <div className="navbar-right">
              <a href="/home"><img
                style={gin}
                src={
                  "https://uploads.codesandbox.io/uploads/user/bf39a48c-cc3f-4699-9922-99498a6a8538/9TLt-Mob.png"
                }
                alt="lt"
              /></a>
            </div>
          </nav>
        </ButtonToolbar>
        <Jumbotron style={xo}>
          <h1>Welcome to Mobius!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>;
        <p>
          {" "}
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
        <div class="col-md-6">
          <h3>
            <span class="glyphicon glyphicon-link" /> Helpful Links
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
      </div>
    );
  }
}

export default App;
