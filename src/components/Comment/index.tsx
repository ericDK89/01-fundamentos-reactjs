import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./comment.module.scss";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/68076508?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eric Macedo</strong>
              <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
