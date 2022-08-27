import React from 'react';
import './StudentInfoComponent.css';

var StudentList = [
    { ID: 1, Name: 'Nguyễn Văn A', Age: 30, Address: 'Hà Nội' },
    { ID: 2, Name: 'Trần Trung B', Age: 32, Address: 'Hà Nội' },
    { ID: 3, Name: 'Lê Thanh C', Age: 27, Address: 'Hà Nội' },
    { ID: 4, Name: 'Nguyễn Tùng D', Age: 29, Address: 'Hà Nội' }
];


function Studentinfo(props) {
    console.log(StudentList);

    return (
        <div className="container">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {StudentList.map((Student, index) => (
                        <tr key={index} >
                            <td>{Student.ID}</td>
                            <td>{Student.Name}</td>
                            <td>{Student.Age}</td>
                            <td>{Student.Address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
export default Studentinfo;