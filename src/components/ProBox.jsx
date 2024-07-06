import {ReactComponent as GitHub} from "../assets/icons/brand-github.svg";
import { ReactComponent as Demo} from "../assets/icons/live-demo.svg";

function ProBox (
    {
        title,
        img,
        date,
        description,
        techno1,
        techno2,
        code,
        demo,
        scrollY,
        icon 
    }) 
    {
    return (
        <div className="projects-grid">
      <div className="pro pro__1">
        <div className="pro__img">
          <img src={img} alt={title} />
        </div>
        <div className="pro__text">
          <img src={icon} alt="icon" />
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="stack">
            <p>{techno1}</p>
            <p>{techno2}</p>
          </div>
          <div className="links">
            <a href={code} target="_blank" rel="noreferrer">
                <code className='link-icon'>Code</code>
                <GitHub width={30} height={30}/>
            </a>
            <a href={demo} target="_blank" rel="noreferrer">
                <code className='link-icon'>Live Demo</code>
                <Demo width={30} height={30}/>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProBox;