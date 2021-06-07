const Qualification = ({ data }) => {
    return (
        <article>
            <h4 className="qualification">{data.provider}-{data.qualification}</h4>
            <p className="date">{data.date}</p>
        </article>
    );
}

export default Qualification;
