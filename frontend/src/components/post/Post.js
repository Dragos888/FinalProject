import React from 'react';
import './Post.css';

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.kym-cdn.com/photos/images/original/000/875/511/a69.png"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCat">Dank Memes</span>
          <span className="postCat">Edgy Memes</span>
        </div>
        <span className="postTitle">
          Title for the lovely memes that people will post
        </span>
        <span className="timeStamp">10h ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est velit sed
        sunt expedita dignissimos culpa assumenda ipsum at quidem, voluptas
        perferendis laborum provident ut veniam blanditiis dicta ad accusamus
        impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
        velit sed sunt expedita dignissimos culpa assumenda ipsum at quidem,
        voluptas perferendis laborum provident ut veniam blanditiis dicta ad
        accusamus impedit? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Est velit sed sunt expedita dignissimos culpa assumenda ipsum at
        quidem, voluptas perferendis laborum provident ut veniam blanditiis
        dicta ad accusamus impedit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Est velit sed sunt expedita dignissimos culpa
        assumenda ipsum at quidem, voluptas perferendis laborum provident ut
        veniam blanditiis dicta ad accusamus impedit? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Est velit sed sunt expedita dignissimos
        culpa assumenda ipsum at quidem, voluptas perferendis laborum provident
        ut veniam blanditiis dicta ad accusamus impedit?
      </p>
    </div>
  );
}
