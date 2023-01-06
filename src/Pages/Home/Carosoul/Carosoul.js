import React from "react";
import { Link } from "react-router-dom";

const Carosoul = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-medium p-2">Let's Enjoy</h2>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/tv-hanged-wall-indoors_23-2149026089.jpg?w=996&t=st=1673021895~exp=1673022495~hmac=8beab9eecaa5500d8f20c4c95419e1a73b35906b7a63f2aa38156a46932b2de5"
            className="w-full h-min"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/excited-group-people-watching-american-football-sport-match-home_155003-41874.jpg?w=996&t=st=1673021486~exp=1673022086~hmac=ed4339cf966bb686cf67bb3edb2073fc646e3fdaeb77d8172ceea3c8457440ce"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/man-changing-film-streaming-service_23-2149026043.jpg?w=996&t=st=1673021508~exp=1673022108~hmac=e104c2c0a9c2920cdcc09f5a638cd9453dc712cc18ea3658a8b5014e1f004ec0"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/group-friends-watching-tv-sport-match-together-emotional-fans-cheering-favourite-team-watching-exciting-football-concept-friendship-leisure-activity-emotions_155003-38767.jpg?w=996&t=st=1673021530~exp=1673022130~hmac=b7616b1a46702917f7edf4dca2d45deb13e7878bf0eb92f462a7a3a4054e21da"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosoul;
