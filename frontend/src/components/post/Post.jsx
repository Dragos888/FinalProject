import './post.css';
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">History</span>
          <span className="postCat">Commedy</span>
        </div>
        <div className="spanpostTitle">Something else idk</div>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
    </div>
  );
}
