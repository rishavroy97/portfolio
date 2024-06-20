import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-16 py-12 w-[90vw] lg:w-[60vw]">
        <div className="flex flex-col justify-center items-center gap-2 w-[90vw] lg:w-[60vw] lg:px-16">
          <h4 className="text-xl">Feel free to</h4>
          <h1 className="text-5xl lg:text-6xl text-primary font-extrabold pb-4">Get in touch!</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start w-[80vw] lg:w-[60vw] lg:px-16 text-xl font-light gap-8">
          <div className="lg:text-justify flex-1">
            I am open to discussing potential job opportunities or collaborations. With experience in data science, web development, software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let&apos;s discuss!

            <br />
            <br />

            The link to my socials are available below. For more urgent communications, please use the form here to send me a message.
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact