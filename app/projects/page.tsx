import PinnedRepos from '../components/PinnedRepos';
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={styles.projects}>
        <div className={styles.caption}>
          <h4 className="text-xl">Dive into</h4>
          <h1 className="text-6xl text-primary font-extrabold pb-4">My Work</h1>
        </div>
        <div className={styles.content + " text-xl font-light"}>
          <PinnedRepos />
        </div>
      </div>
    </>
  );
}
