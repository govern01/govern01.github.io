const ProjectCard = ({ data }) => {
    return(
        <div className="card_container">
            <article className="card">
                <header>
                    <h3>{data.title}</h3><h4> - {data.date}</h4>
                    <p>{data.tagline}
                    &nbsp;--&nbsp;
                    {data.opensource ? <a href={data.source} rel="norefference">Source here</a> : "Closed Source"}</p>
                </header>
                {/* I'll add in proper images once I find good images for each project */}
                {/* Which means I really need to find the source for that anti-theft */}
                {/* For now we shall use tasteful images of dogs */}
                <div className="image">
                    <img src={`${process.env.PUBLIC_URL}${data.img}`} alt={`${data.title}-img not found`} />
                </div>
                <div className="description">
                    <p>{data.desc}</p>
                    <div className="techlist">
                        <ul>
                            {data.technologies.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ProjectCard;
