import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post(props) {
  console.log('props', props)
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={props.author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>Wellington Monteiro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          cabei de subir mais um projeto no meu portifa. É um projeto que fiz no
          NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
