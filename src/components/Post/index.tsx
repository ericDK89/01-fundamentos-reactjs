import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Author, Content } from "../../services/api/Posts";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./post.module.scss";

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana hein!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const { authorUrl, name, role } = author;

  const publishedDateFormatTitle = format(
    publishedAt,
    "d 'de' MMMM 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateFormatRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e: Event): void {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(e: Event): void {
    setNewCommentText((e.target as HTMLTextAreaElement).value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={authorUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatTitle}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateFormatRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
