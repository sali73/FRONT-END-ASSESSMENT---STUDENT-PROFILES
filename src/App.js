import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  // api with data 
  useEffect(() => {
    axios
      .get('https://api.hatchways.io/assessment/students')
      .then((response) => setStudents(response.data.students));
  }, []);
  //  search function for first/last names 
  const [query, setQuery] = useState('');
  const filterNames = ({ firstName, lastName }) => {
    return (
      (firstName + lastName).toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  // gets average results from tests
  const getAvg = (newArr) =>
    newArr.reduce((a, b) => parseInt(a) + parseInt(b)) / newArr.length;

  // show/hide grades
  const showGrades = (e) => {
    let sibClass = e.target.previousSibling.lastChild.classList;
    sibClass.toggle('hide');
    if (sibClass.contains('hide')) {
      e.target.innerHTML = '&plus;';
    } else {
      e.target.innerHTML = '&minus;';
    }
  };

  return (
    <div className="card-container">
      <input
        type="search"
        title="search"
        aria-required="true"
        className="search"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {students.filter(filterNames).map((student, index) => (
        <div className="card-content" key={index}>
          <div className="student-img">
            <img src={student.pic} alt="student-pic" />
          </div>
          <div className="student-info">
            <h1 className="student-name">
              {student.firstName} {student.lastName}
            </h1>
            <ul>
              <li>Email: {student.email}</li>
              <li>Company: {student.company}</li>
              <li>Skill: {student.skill}</li>
              <li>Average: {`${getAvg(student.grades)}%`}</li>
            </ul>
            <ul className="gradeList hide">
              {student.grades.map((grade, index) => (
                <li key={index}>
                  Test {(index += 1)}: {grade}%
                </li>
              ))}
            </ul>
          </div>
          <div className="expand-btn" onClick={showGrades}>
            +
          </div>
        </div>
      ))}
    </div>
  );
}

//   const [values, setValues] = useState([
//     {
//       pic:"",
//       firstName: "",
//       lastName:"",
//       email: "",
//       company: "",
//       skills: "",
//       average:""
//     },
//   ]);
//    ///////////////
//   ///update data
//   //////////////
//   useEffect(() => {
//     getInfo();
//   }, []);

//   //////////////////
//   //// get data
//   /////////////////
//   const getInfo = async () => {
//     const response = await fetch("https://api.hatchways.io/assessment/students");
//     const result = await response.json();
//     const allStudents = result.students;
//     console.log(allStudents);
//     setValues(allStudents);
//   };

  

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="card-container">
//         <div>
//           <input type="search" title="search" aria-required="true" className="search" placeholder="Search by name" value="l"/>
//         </div>
//        {values.map((item) => {
//           console.log(item);
//           const {firstName, lastName, company, skill, grades, pic, email} = item;
//           return (
//             <div >
//               <div className='card-content'>
//                 <div className='student-img'>
//                   <img src={pic} alt='studernt pic'/>
//                 </div>
//                 <div className='student-info'>
//                   <h1 className='student-name'>{firstName}{lastName}</h1>  
//                   <ul>
//                     <li>Email: {email}</li>
//                     <li>Company: {company}</li>
//                     <li>Skills: {skill}</li>
//                   </ul>
//                   <ul className='gradeList'>
//                     <li>Average: {grades}</li>
//                   </ul>
//                 </div>
//                 <div class="expand-btn">+</div>
//               </div>
//             </div>
                
//           )
//        })}
//        </div>
//       </header>
//     </div>
//   );
// }

export default App;
