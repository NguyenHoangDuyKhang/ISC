import './list_comment.css';
import img from "./../../assets/img/img.jpg";
import img2 from "./../../assets/img/img2.jpg";
const comments = [
  {
    id: 1,
    username: 'Khang nè',
    avatar: img,
    content: 'Quá đã thiệt á chứ',
  },
  {
    id: 2,
    username: 'Ai kìa?',
    avatar: img2,
    content: 'Hahaha',
  },
];

const List_comment = () => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <img
            src={comment.avatar}
            alt={`${comment.username}'s avatar`}
            className="comment-avatar"
          />
          <div className="comment-content">
            <div className="comment-header">
              <span className="comment-username">{comment.username}</span>
            </div>
            <p className="comment-text">{comment.content}</p>
            <button className="reply-button">Trả lời</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List_comment;
