import React from 'react';
import './StudentInfoComponent.css';

// var StudentList = [
//     { ID: 1, Name: 'Nguyễn Văn A', Age: 30, Address: 'Hà Nội' },
//     { ID: 2, Name: 'Trần Trung B', Age: 32, Address: 'Hà Nội' },
//     { ID: 3, Name: 'Lê Thanh C', Age: 27, Address: 'Hà Nội' },
//     { ID: 4, Name: 'Nguyễn Tùng D', Age: 29, Address: 'Hà Nội' }
// ];

// function Studentinfo(props) {
//     const student = props.StudentList;
//     return (
//         student.map((StudentList) => {
//             console.log(props);
//                 return (
//                     <div className="table-container">
//                         <tr>
//                             <td>{props.ID}</td>
//                             <td>{props.Name}</td>
//                             <td>{props.Age}</td>
//                             <td>{props.Address}</td>
//                         </tr>
//                     </div>
//                 )
//             }
//         )
//     )
// };
function Studentinfo(props) {
    return (
        <div className="table-container">
            <table>
                <tbody>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>{props.ID}</td>
                <td>{props.Name}</td>
                <td>{props.Age}</td>
                <td>{props.Address}</td>
            </tr>
                </tbody>
            
            </table>
        </div>
    )
};
export default Studentinfo;