import React from 'react';
import './singlePost.css';
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://m.media-amazon.com/images/M/MV5BZjFjODY1MTMtMzQ2MC00NmM3LTkwNTktOGJiNGE2Y2E1NWNiXkEyXkFqcGdeQXVyNjM2NDIwMzQ@._V1_.jpg"
          alt=""
        />
        <h1 className="singlePostTile">
          It is in fact a dank meme because free anti virus IS a virus
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Meme Lord: <b>Beni</b>
          </span>
          <span className="singlePostTimeStamp">1h ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde
          asperiores vitae corrupti repellendus. Possimus dolore minus, vero,
          incidunt expedita explicabo modi obcaecati, fuga corrupti numquam
          eligendi dolorem reprehenderit sapiente! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid unde asperiores vitae corrupti
          repellendus. Possimus dolore minus, vero, incidunt expedita explicabo
          modi obcaecati, fuga corrupti numquam eligendi dolorem reprehenderit
          sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid unde asperiores vitae corrupti repellendus. Possimus dolore
          minus, vero, incidunt expedita explicabo modi obcaecati, fuga corrupti
          numquam eligendi dolorem reprehenderit sapiente! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aliquid unde asperiores vitae
          corrupti repellendus. Possimus dolore minus, vero, incidunt expedita
          explicabo modi obcaecati, fuga corrupti numquam eligendi dolorem
          reprehenderit sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid unde asperiores vitae corrupti repellendus.
          Possimus dolore minus, vero, incidunt expedita explicabo modi
          obcaecati, fuga corrupti numquam eligendi dolorem reprehenderit
          sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid unde asperiores vitae corrupti repellendus. Possimus dolore
          minus, vero, incidunt expedita explicabo modi obcaecati, fuga corrupti
          numquam eligendi dolorem reprehenderit sapiente!
        </p>
      </div>
    </div>
  );
}
