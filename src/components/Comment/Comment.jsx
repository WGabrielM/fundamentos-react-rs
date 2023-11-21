import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/WGabrielM.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wellington Monteiro</strong>
              <time title="11 de Outubro às 08:13h" dateTime="2023-10-23">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
