import styles from "./Experiences.module.css";

const Experience = () => {
  return (
    <>
      <div className={styles.experience}>
        <div className={styles.caption}>
          <h4 className="text-xl">Explore my</h4>
          <h1 className="text-6xl text-primary font-extrabold pb-4">Experiences</h1>
        </div>
        <div className={styles.content + " text-xl font-light"}>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-5 w-5">
                  <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10 font-light text-lg">
                <time className="italic">Sept 2023 - May 2025</time>
                <div className="text-lg font-black">New York University</div>
                <div className="text-base font-medium">Master of Science, Computer Science</div>
                <div className="text-base flex gap-2 justify-end items-center pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" stroke="currentColor" className="h-3 w-3">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <span>New York City, NY</span>
                </div>
                <div className="text-sm font-normal"><span className="font-semibold">Coursework:</span> Algorithms, OS, Computer Vision, Machine Learning</div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-5 w-5">
                  <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="italic">Jan 2023 - Aug 2023</time>
                <div className="text-lg font-black">Morgan Stanley</div>
                <div className="text-base font-medium">Technology Manager</div>
                <div className="text-base flex gap-2 justify-start items-center pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" stroke="currentColor" className="h-3 w-3">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <span>Bengaluru, India</span>
                </div>
                <div className="text-sm font-normal">
                  <div className="text-justify">Overhauled and deployed a cloud-ready micro-service-oriented <span className="font-semibold">real-time trading system </span> to replace the traditional monolith-styled trading system</div>
                  <br />
                  <span className="font-semibold">Tech-stack: </span> Java, Spring Boot, Typescript, Angular, AngularJs, Rxjs
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-5 w-5">
                  <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="italic">Aug 2020 - Dec 2022</time>
                <div className="text-lg font-black">Morgan Stanley</div>
                <div className="text-base font-medium">Senior | Technology Associate</div>
                <div className="text-base flex gap-2 justify-start items-center pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" stroke="currentColor" className="h-3 w-3">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <span>Bengaluru, India</span>
                </div>
                <div className="text-sm font-normal">
                  <div className="text-justify">Spearheaded the development of <span className="font-semibold">Azure-cloud-hosted trade-bidding API service </span> for external clients resulting in a 200% increase in quarterly trading activities</div>
                  <br />
                  <span className="font-semibold">Tech-stack: </span> Spring Boot, Spring Cloud Gateway, Swagger OpenAPI
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-5 w-5">
                  <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10 font-light text-lg">
                <time className="italic">July 2016 - May 2020</time>
                <div className="text-lg font-black">National Institute of Technology - Tiruchirappalli</div>
                <div className="text-base font-medium">B.Tech, Computer Science and Engineering</div>
                <div className="text-base flex gap-2 justify-end items-center pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" stroke="currentColor" className="h-3 w-3">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <span>Tiruchirappalli, India</span>
                </div>
                <div className="text-sm font-normal">
                  <div className="text-justify">At NIT - Trichy, I was a <span className="font-semibold">web-developer for Spider</span>, the institute&apos;s R&D club. As a member, I developed multiple projects for the student body and the university.
                    <br />
                    <br />
                    I was elected the <span className="font-semibold">Web-Dev Head</span> from 2019-20 where I corresponded with the university administration via emails and phone calls for sustainable task delegations for the Spider Web-dev team.
                  </div>
                  <br />
                  <span className="font-semibold">Coursework:</span> Data Structures, Algorithms, ML, NLP, Database systems, Operating systems
                </div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Experience
