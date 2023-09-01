import styles from '../styles/contact.module.css'
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export default function Contact() {
  return (
    <>
    <main>
      <h1 className={styles.heading}>Contact Me</h1>
      <div className={styles.text}>
      <p> Connect with me on LinkedIn and check out more of my work on GitHub. Can't wait to hear from you! 
      </p>
      </div>
      <div className={styles.social}>
          <a href="https://www.linkedin.com/in/vanessa-m-flores/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href=" https://github.com/vanessa-flores4" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
        </div>
    </main>
    </>
  )
}
