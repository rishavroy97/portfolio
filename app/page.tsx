import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-16 py-12 w-[90vw] lg:w-[60vw]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-[90vw] lg:w-[60vw] lg:px-16">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
          <h4 className="text-xl py-2">Hey there!</h4>
          <h1 className="text-6xl text-primary font-extrabold pb-4">Rishav Roy</h1>
          <h3 className="text-3xl text-accent font-bold pb-2">Full-stack Developer</h3>

          <br />
          <p>
            <a role='button' className='btn btn-success' href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src='/rishav.jpg' alt='Profile Picture' className='mask mask-circle' width={350} height={350} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 w-[90vw] lg:w-[60vw] text-xl font-light px-4 lg:px-16">
        <p className="text-pretty lg:text-justify">
          I&apos;m a <span className='font-semibold'>full-stack developer</span> navigating my way through the world of <span className='font-semibold'>AI/ML</span> with a passion for turning complex problems into sleek, scalable and deployable solutions. Currently, I&apos;m diving deep into the world of <span className='font-semibold'>Computer Vision and Machine Learning</span> at <span className='font-semibold'>New York University</span>, working towards my Master&apos;s in Computer Science (MS in CS).
        </p>

        <p className="lg:text-justify">
          Prior to this, I was at <span className='font-semibold'>Morgan Stanley</span> as a Technology Manager. I had an amazing time ideating and building trade-bidding platforms for the Securitized Products (SPG) team, blending tech know-how with a sprinkle of creativity.
        </p>

        <p className="lg:text-justify">
          Now, I&apos;m on the lookout for internship/full-time opportunities where I can roll up my sleeves, get my hands dirty, and bring some magic to innovative projects. If you&apos;re looking for someone who loves to code, talk about music, and occasionally (read: frequently) make changes to their Fantasy Football team, let&apos;s <Link href={"/contact"} role='button' className='font-bold hover:bg-base-300 hover:p-2 hover:rounded-xl'>connect!</Link>
        </p>
      </div>
    </div>
  );
}
