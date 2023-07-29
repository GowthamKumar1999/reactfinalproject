import React , { useState } from "react";
import Resume from "./resume";

const ResumeBuilder = () => {
    const [save , setSave] = useState({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position , setPosition] = useState('');
    const [summary, setSummary] = useState('');
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [bool,setBool] = useState(false)

    const handleAddExperience = () => {
        setExperience([...experience, { company: '', position: '', duration: '' }]);
    };
    const handleAddEducation = () => {
        setEducation([...education, { institution: '', degree: '', year: '' }]);
    };
    const handleSave = () => {
        setSave({
            'name':name,
            'email':email,
            'phone':phone,
            'summary':summary,
            'position':position,
        })
    }

    const getResume = () => {
        setBool(true)

        // console.log(bool)
    }
    
    return(
    <div>
        <h2 className="resume-title">Resume Builder</h2>
        
        <div className="personal-details">
            <div className="childs">
            <label>Name:</label>
            <input type="text" value={ name } onChange={(e) => setName(e.target.value)} />
            </div>
            
            <div className="childs">
            <label>Email:</label>
            <input type="email" value={ email } onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <div className="childs">
            <label>Phone:</label>
            <input type="tel" value={ phone } onChange={(e) => setPhone(e.target.value)} />
            </div>
            
            <div className="childs">
            <label> Position </label>
            <input type="text" value= { position } onChange={(e) => setPosition(e.target.value)} />
            </div>
            
            <div className="childs">
            <label>Summary:</label>
            <textarea value={ summary } onChange={(e) => setSummary(e.target.value)} />
            </div>
        </div>
        
        <div>
            <h3>Experience:</h3>
            {experience.map(( exp , index ) => (
            
            <div key={index}>
                <label>Company:</label>
                <input type="text" value={exp.company} onChange={(e) => {
                    const updatedExperience = [...experience];
                    updatedExperience[index].company = e.target.value;
                    setExperience(updatedExperience);
                }}
                />
                
                <label>Position :</label>
                <input type="text" value={exp.position} onChange={(e) => {
                    const updatedExperience = [...experience];
                    updatedExperience[index].position = e.target.value;
                    setExperience(updatedExperience);}}
                />
                
                <label>Duration:</label>
                <input type="text" value={exp.duration} onChange={(e) => {
                    const updatedExperience = [...experience];
                    updatedExperience[index].duration = e.target.value;
                    setExperience(updatedExperience);
                }}
                />
            </div>
        ))}
    </div>
    
    <button onClick={handleAddExperience}>Add Experience</button>
    <h3>Education:</h3>
    {education.map((edu, index) => (
    <div key={index}>
        <label>Institution:</label>
        <input type="text" value={edu.institution}
        onChange={(e) => {
            const updatedEducation = [...education];
            updatedEducation[index].institution = e.target.value;
            setEducation(updatedEducation);
        }}
    />
    
    <label>Degree:</label>
        <input type="text" value={edu.degree} onChange={(e) => {
            const updatedEducation = [...education];
            updatedEducation[index].degree = e.target.value;
            setEducation(updatedEducation);
            }}
        />
        
        <label>Year:</label>
        <input type="text" value={edu.year}
            onChange={(e) => {
              const updatedEducation = [...education];
              updatedEducation[index].year = e.target.value;
              setEducation(updatedEducation);
            }}
        />
        </div>
        ))}
        <div className="buttons">
            <button style={{backgroundColor: "greenyellow", marginBottom:"2rem", border:"green", borderRadius:"10px"}} onClick={handleAddEducation}>Add Education</button>
            <button style={{backgroundColor: "orange",marginBottom:"2rem",border:"green", borderRadius:"10px"}} className="education" onClick={handleSave}>Save Resume</button>
            <button style={{backgroundColor: "green",border:"green", borderRadius:"10px"}} onClick={getResume}>Get resume</button>
        </div>
        <div>
            {bool? <Resume  saves={save}/> : ''}
        </div>
    </div>
  );
};

export default ResumeBuilder;