const Experience = ({ data }) => {
    return (
        <article>
            <h4>{data.company}-{data.position}</h4>
            <h6>{data.dates}</h6>
            <h6>{data.desc}</h6>
            <ul>
                {data.bulletpoints.map((bulletpoint) => (
                    <li key={bulletpoint}>{bulletpoint}</li>
                ))}
            </ul>
        </article>
    );
}

export default Experience;
