import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';
import photo from '../assets/photoediting.png';
import magazine from '../assets/magazinecover.png'

export function Project () {
    return (
        <>
        <div className={styles.projectImages}>
        <h3>Image Editing</h3>
        <Link to={"/"}>
        <img src={photo} style={{height: '400px'}} alt="image that has been edited in adobe photoshop" />
        </Link>
        <h3>Magazine</h3>
        <Link to={"/"}>
          <img src={magazine} style={{height: '400px'}}  alt="magazine cover" />
        </Link>
        </div>
        </>
    )
}
export default Project; 