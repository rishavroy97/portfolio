import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.caption}>
          <h1 className="text-6xl text-primary font-extrabold pb-4">Get in touch!</h1>
        </div>
        <div className={styles.content + " text-xl font-light"}>
          <div className="text-justify flex-1 font-extralight">
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