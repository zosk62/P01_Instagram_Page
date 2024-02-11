import { useState, useEffect } from "react";
import RightMenu from "./RightMenu"; // Import the RightMenu component
function Main() {
  const initialCatLikes = parseInt(localStorage.getItem("catLikes")) || 0;
  const initialDogLikes = parseInt(localStorage.getItem("dogLikes")) || 0;
  const [catLikes, setCatLikes] = useState(initialCatLikes);
  const [dogLikes, setDogLikes] = useState(initialDogLikes);
  const handleCatLikeClick = () => {
    const newCatLikes = catLikes + 1;
    setCatLikes(newCatLikes);
    localStorage.setItem("catLikes", newCatLikes.toString());
  };

  const handleDogLikeClick = () => {
    const newDogLikes = dogLikes + 1;
    setDogLikes(newDogLikes);
    localStorage.setItem("dogLikes", newDogLikes.toString());
  };

  // useEffect(() => {
  //  localStorage.setItem("catLikes", catLikes.toString());
  //  }, [catLikes]);

  //useEffect(() => {
  // localStorage.setItem("dogLikes", dogLikes.toString());
  //}, [dogLikes]);

  return (
    <div>
      <div class="header">
        <div className="container">
          <img src="/left.png" alt="Left" className="header-image" />
          <h1 className="header-text">Welcome to Our Pet Adoption Site!</h1>
          <img src="/right.png" alt="Right" className="header-image" />
        </div>
        <div class="top">
          <div class="logo">
            <img
              src="/cat.png"
              alt="Cute Cats"
              style={{ width: "270px" }}
            ></img>
          </div>

          <div class="or">
            <p></p>
            <p>Cat's Are Cute</p>
            <p></p>
          </div>
          <div class="dif">
            <div class="fb">
              <img src="/catcheck.png" alt="CheckMArk" />
              <p style={{ marginRight: "5px" }}>Do you want to own me?</p>

              <button
                style={{ backgroundColor: "green", color: "white" }}
                onClick={handleCatLikeClick}
              >
                Like
              </button>
              <p>{catLikes} Likes</p>
            </div>
            <div class="forgot">
              <button style={{ backgroundColor: "red", color: "white" }}>
                {" "}
                Adopt me{" "}
              </button>
              <p> </p>
              <p> </p> <br />
              <a href="#" style={{ border: "1px solid black" }}>
                Click me for more information
              </a>
            </div>
          </div>
        </div>
        <div class="top">
          <div class="logo">
            <img
              src="/dog.png"
              alt="Cute Dogs"
              style={{ width: "270px" }}
            ></img>
          </div>

          <div class="or">
            <p></p>
            <p>Dogs Are Cute too</p>
            <p></p>
          </div>
          <div class="dif">
            <div class="fb">
              <img src="/heart.png" alt="CheckMArk" />
              <p style={{ marginRight: "5px" }}>Do you want to own me?</p>

              <button
                style={{ backgroundColor: "green", color: "white" }}
                onClick={handleDogLikeClick}
              >
                Like
              </button>
              <p>{dogLikes} Likes</p>
            </div>
            <div class="forgot">
              <button style={{ backgroundColor: "blue", color: "white" }}>
                {" "}
                Adopt me{" "}
              </button>
              <p> </p>
              <p> </p> <br />
              <a href="#" style={{ border: "1px solid black" }}>
                Click me for more information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
