import Skills from "@/app/ui/Expertise/Skills"

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 py-12 w-[90vw] lg:w-[60vw]">
      <div className="flex flex-col justify-center items-center gap-2 w-[90vw] lg:w-[60vw] lg:px-16">
        <h4 className="text-xl">Learn more about my</h4>
        <h1 className="text-6xl text-primary font-extrabold pb-4">Skills and Expertise</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 w-[90vw] lg:w-[60vw] text-xl font-light px-4 lg:px-16">
        <Skills />
      </div>
    </div>
  )
}

export default About
