import { ReactComponent as Github} from "../assets/icons/brand-github.svg";
import { ReactComponent as Telegram} from "../assets/icons/telegram.svg";

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footerc">
                        <h3>
                            Copyright © {new Date().getFullYear()}. All rights are reserved
                        </h3>
                        <div className="footerc__socials">
                            <a
                                aria-label="telegram"
                                target="_blank"
                                rel="noreferrer"
                                href="https://t.me/maxim_paradise"
                            >
                                <Telegram width={30} height={30} />
                            </a>
                            <a
                                aria-label="telegram"
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/Creator-Art-Life"
                            >
                                <Github width={30} height={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;