import { Avatar } from "../Avatar/Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDeleteCommet() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/WGabrielM.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wellington Monteiro</strong>
              <time title="11 de Outubro às 08:13h" dateTime="2023-10-23">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteCommet} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
