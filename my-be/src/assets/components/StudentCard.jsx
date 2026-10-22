import '../../styles/StudentCard.css'
function StudentCard({ID, name, grade, role}){
    return(
            <div className="student-card">
                <p className="student-card-id">#{ID}</p>
                <h2>{name}</h2>
                <h3>Grade {grade}</h3>
                <h4>{role}</h4>
            </div>
    );
}
export default StudentCard