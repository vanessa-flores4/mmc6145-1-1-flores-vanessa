import styles from '../styles/about.module.css';
import me from '../assets/me.png';

export default function About() {
    return (
      <>
        <main>
        <div className={styles.image}>
        <img src={me} style={{ maxWidth: '500px', height: 'auto' }}  alt="vanessa flores"/>
        </div>
        <h1 className={styles.heading}>About Me</h1>
        <div className={styles.text}>
            <p>My name is Vanessa! I currently work in communications at Los Alamos National Laboratory. I also freelance with Florida Blue as an experiential marketing specialist. At Florida Blue I work with sports marketing teams to organize promotional events and create marketing material. 
            </p>
            <p>I graduated from UF with a degree in public relations and am currently in the final semester of my master's program in mass communication. Apart from my studies, I enjoy listening to podcasts and participating in RunDisney events. Additionally, I love going on hikes with my husband and our German Shepherd. 
            </p>  
        </div>     
      </main>
      </>
    )
}