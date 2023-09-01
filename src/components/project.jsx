import styles from '../styles/home.module.css';

const Project = ({ children }) => {
  return ( 
    <div className={styles.projectImages}>
      {children}
    </div>
  );
};

export default Project;