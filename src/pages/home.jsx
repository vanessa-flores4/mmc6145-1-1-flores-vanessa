import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'
import webpagedesign from '../assets/loginwebpage.png'
import magazine from '../assets/magazinecover.png'
import cookbook from '../assets/cookbook.png'
import Project from '../components/project'

export default function Home() {
  return (
    <main>
      <h1 className={styles.heading}>Hi, I’m Vanessa, a Graphic Designer</h1>
      <p> I will be graduating this fall with a Masters in Mass Communication and Web Design. Please take a look at some of my design work showcased below.</p>
      <Project className={styles.projectImages}>
        <h3>Login Webpage Design</h3>
          <Link to={"/"}>
            <img src={webpagedesign} style={{ height: '400px' }} alt="login webpage design" />
          </Link>
      </Project>
      <Project className={styles.projectImages}>
        <h3>Cookbook</h3>
          <Link to={"/"}>
            <img src={cookbook} style={{ height: '400px' }} alt="cookbook cover" />
          </Link>
      </Project>
      <Project className={styles.projectImages}>
        <h3>Magazine</h3>
          <Link to={"/"}>
            <img src={magazine} style={{ height: '400px' }} alt="magazine cover" />
          </Link>
      </Project>
    </main>
  )
}
