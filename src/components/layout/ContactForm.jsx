
const ContactForm = (props) => {
    return (
        <div id="contact" className="contact">
            <h2>Jacob Morris</h2>
            <ul className="contact">
                <li>
                    <h3>Email</h3>
                    <a href="mailto:jacob.morris118@gmail.com">jacob.morris118@gmail.com</a>
                </li>
                <li>
                    <h3>Socials</h3>
                    <ul className="icons">
                        <li>
                            <a href="https://github.com/govern01" target="_blank" rel="noreferrer" className="icon brands fa-github">
                                <span className="label">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jjamorris/" target="_blank" rel="noreferrer" className="icon brands fa-linkedin-in">
                                <span className="label">LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default ContactForm;
