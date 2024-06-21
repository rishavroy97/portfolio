import Skills from "./Skills"

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 py-12 w-[90vw] lg:w-[60vw]">
      <div className="flex flex-col justify-center items-center gap-2 w-[90vw] lg:w-[60vw] lg:px-16">
        <h4 className="text-xl">Get to know more</h4>
        <h1 className="text-6xl text-primary font-extrabold pb-4">About Me</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 w-[90vw] lg:w-[60vw] text-xl font-light px-4 lg:px-16">
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
          <p className="lg:text-justify">
            Welcome! I am Rishav Roy, a <span className="font-semibold">full-stack software developer</span>. Currently, I am working towards my MS in CS degree from <span className="font-semibold">New York University (NYU)</span> with specialization in AI/ML. Previously working as an analyst at <span className="font-semibold">Morgan Stanley</span>, has allowed me to bring industry-level expertise in providing resilient technical and analytical solutions.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
          <p className="lg:text-justify">
            At NYU, I have investigated the use of Large Language Models as Recommendation Systems using the latest <span className="font-semibold">Retrieval Augmented Generation (RAG)</span> technique with LangChain and ChromaDB (Vector DB) as part of the Predictive Analytics course by Prof. Anasse Bari.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
          <p className="lg:text-justify">
            In my second semester, I have eyed the <span className="font-semibold">Computer Vision</span> domain, incorporating various Computer Graphics and ML techniques learned under the tutelage of Prof. Jean Ponce and Prof. Rajesh Ranganathan. During this time, I have explored the concept of image generation from a corresponding audio clip by customizing the Stable Diffusion pipeline.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
          <p className="lg:text-justify">
            Primarily, I have been a full-stack developer, working on all aspects of software development, from microservice architecture and database designing to API creation and UI development. More recently, I have been working as a Teaching Assistant where I grade weekly assignments and semester-long projects for 30+ students for the <span className="font-semibold">Applied Internet Technology</span> (CSCI-UA.0467) course. The course involves concepts required to develop modern web applications using the MERN stack.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-[90vw] lg:w-[60vw] lg:px-16 border-t-2 border-base-content pt-8">
        <h4 className="text-base">Learn more about my</h4>
        <h1 className="text-3xl lg:text-4xl text-primary font-extrabold">Skills and Expertise</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 w-[90vw] lg:w-[60vw] text-xl font-light px-4 lg:px-16">
        <Skills />
      </div>
    </div>
  )
}

export default About
