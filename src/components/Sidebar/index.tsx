import { PencilLine } from "phosphor-react";
import sidebarCoverImg from "../../assets/images/sidebar.cover.jpg";
import { Avatar } from "../Avatar";
import styles from "./sidebar.module.scss";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img src={sidebarCoverImg} width="500" />

        <div className={styles.profile}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/68076508?v=4"
            hasBorder
          />
          <strong>Profile</strong>
          <span>Web Developer</span>
        </div>

        <footer className={styles.footer}>
          <a href="#">
            <PencilLine size={20} /> Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
