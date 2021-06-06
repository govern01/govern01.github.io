const SkillBar = ({ data }) => {

    const fgStyling = {
        background: data.color,
        width: `${String((data.level / 5.0) * 100.0)}%`,
        height: "inherit"
    };

    const nameStyling = {
        paddingRight: 15,
        textAlign: "left",
        float: "left"
    };

    const levelStyling = {
        paddingLeft: 15,
        textAlign: "right",
        float: "right"
    }

    return (
        <article>
            <div className="skillBg">
                <div style={fgStyling}>
                    <div className="content" style={nameStyling}>{data.name}</div>
                    <div className="content" style={levelStyling}>{data.level}</div>
                </div>
            </div>
            <br />
        </article>
    );
};

export default SkillBar;
