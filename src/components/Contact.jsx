import {ReactComponent as Location} from "../assets/icons/location.svg";
import {ReactComponent as Mail} from "../assets/icons/mail.svg";

function Contact() {
    return(
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact__content">
                        <div className="contact__title">
                            <p>contact</p>
                            <h3>Don't be shy! Hit me up! 👇</h3>
                            </div>
                            <div className="contact__icons">
                            <div className="contact__icon-box">
                                <span>
                                    <Location width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Location</h3>
                                    <p>Chernivtsi, Ukraine.</p>
                                </div>
                            </div>

                            <div className="contact__icon-box">
                                <span>
                                    <Mail width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Mail</h3>
                                    <a href="mailto:stefan.topallovic@gmail.com">
                                        eternaldream128@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;