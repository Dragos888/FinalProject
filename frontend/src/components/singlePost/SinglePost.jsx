import './singlePost.css';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Some random text , I will finish this project and make my fam and God
          proud of me
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-square-minus"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Dragos</b>
          </span>
          <span className="singlePostDate">1 h ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          dignissimos perferendis dicta, odio ad veniam voluptas fugiat. Quos
          neque atque eveniet esse eos ullam illum nam dignissimos, eligendi,
          dolore labore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quis dignissimos perferendis dicta, odio ad veniam voluptas
          fugiat. Quos neque atque eveniet esse eos ullam illum nam dignissimos,
          eligendi, dolore labore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis dignissimos perferendis dicta, odio ad veniam
          voluptas fugiat. Quos neque atque eveniet esse eos ullam illum nam
          dignissimos, eligendi, dolore labore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis dignissimos perferendis dicta, odio
          ad veniam voluptas fugiat. Quos neque atque eveniet esse eos ullam
          illum nam dignissimos, eligendi, dolore labore. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quis dignissimos perferendis dicta,
          odio ad veniam voluptas fugiat. Quos neque atque eveniet esse eos
          ullam illum nam dignissimos, eligendi, dolore labore.
        </p>
      </div>
    </div>
  );
}
