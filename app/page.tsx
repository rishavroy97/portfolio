import Image from 'next/image';
import Link from 'next/link';
import img from '../public/rishav.jpg';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.caption}>
        <div className={styles.captionHeader}>
          <h4 className="text-xl py-2">Hey there!</h4>
          <h1 className="text-6xl text-primary font-extrabold pb-4">Rishav Roy</h1>
          <h3 className="text-3xl text-accent font-bold pb-2">Full-stack Web Developer</h3>

          <br />
          <p>
            <a role='button' className='btn btn-success' href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </p>
        </div>
        <div className={styles.captionImage}>
          <Image src={img} alt='Profile Picture' className='rounded-full dark:shadow-md dark:shadow-accent-content' width={350} />
        </div>
      </div>
      <div className={styles.summary + ' text-xl font-light'}>
        <p className={styles.summaryText}>
          I'm a full-stack web developer with a knack for turning complex problems into sleek, scalable solutions. Currently, I'm diving deep into the world of Computer Science at <span className='font-semibold'>New York University</span>, working towards my <span className='font-semibold'>Master of Science</span> with a focus on <span className='font-semibold'>Data Science, Machine Learning, Distributed Systems, and System Design</span>.
        </p>

        <p className={styles.summaryText}>
          Prior to this, I was at <span className='font-semibold'>Morgan Stanley</span> as a Technology Manager. I had an amazing time ideating and building trade-bidding platforms for the Securitized Products (SPG) team, blending tech know-how with a sprinkle of creativity.
        </p>

        <p className={styles.summaryText}>
          Now, I'm on the lookout for internship/full-time opportunities where I can roll up my sleeves, get my hands dirty, and bring some magic to innovative projects. If you're looking for someone who loves to code, talk about music, and occasionally (read: frequently) make changes to their Fantasy Football team, let's <Link href={"/contact"} role='button' className='font-bold hover:bg-base-300 hover:p-2 hover:rounded-xl'>connect!</Link>
        </p>
      </div>
    </div>
  );
}
