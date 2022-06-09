import styles from "./avatar.module.scss";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = false }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
