const Experience = ({ data }) => {
    return (
        <article>
            <h4>{data.company}-{data.position}</h4>
            <p className="date">{data.dates}</p>
            <p className="desc">{data.desc}</p>
            <ul>
                {data.bulletpoints.map((bulletpoint) => (
                    <li key={bulletpoint}>{bulletpoint}</li>
                ))}
            </ul>
        </article>
    );
}

export default Experience;
