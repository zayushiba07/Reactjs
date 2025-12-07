import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function output(student) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">{student.name}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text"><strong>Date of Birth:</strong> {student.dob}</p>
                    <p className="card-text"><strong>Gender:</strong> {student.gender}</p>
                    <p className="card-text"><strong>City:</strong> {student.city}</p>
                    <p className="card-text"><strong>Education:</strong> {student.study}</p>
                </div>
            </div>
        </div>
    );
}


var student ={
  name:"Ayushiba Zala",
  dob:"24-03-2004",
  gender:"Female",
  city:"Bhavnagar",
  study:"M.C.A"
}
var student1 ={
  name:"Bhavyaa Badheka",
  dob:"02-10-2003",
  gender:"Female",
  city:"Bhavnagar",
  study:"M.B.A"
}
var student2 ={
  name:"Gopika Gohel",
  dob:"01-12-2003",
  gender:"Female",
  city:"Bhavnagar",
  study:"B.C.A"
}

function class1() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Class Members</h1>
            <div className="row">
                {output(student)} 
                {output(student1)} 
                {output(student2)} 
            </div>
        </div>
    )
}

root.render(class1());
