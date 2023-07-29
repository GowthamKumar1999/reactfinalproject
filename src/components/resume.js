import "../styles/resume.css";
const Resume = (props) => {
    // console.log(props.saves)
    return (
        <div>
            <p>{props.saves.name}</p>
            <p>{props.saves.email}</p>
            <p>{props.saves.phone}</p>
            <p>{props.saves.position}</p>
            <p>{props.saves.summary}</p>
            
        </div>
    )
}

export default Resume;