import logoImg from '../../assets/images/logo.svg'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Ignite Club" aria-label='Ignite Club' />
    </header>
  )
}