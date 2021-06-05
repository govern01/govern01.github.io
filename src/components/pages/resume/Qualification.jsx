const Qualification = ({ data }) => {
    return (
        <article>
            <h4>{data.provider}-{data.qualification}</h4>
            <p>{data.date}</p>
        </article>
    );
}

export default Qualification;
