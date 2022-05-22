import React from "react";

const date = new Date();
 function thisweek(){
    return (
      <>
      <h3 > 한성수님의 {date.getFullYear()}-{date.getMonth()}-{date.getDate()} ~{date.getFullYear()}-{date.getMonth()}-{date.getDate()+6} WEEK</h3> <button> LAST WEEK</button>
          <table border="1">
          <thead>
            <tr> 
              <th>{date.getMonth()}월 {date.getDate()}일</th>
              <th>{date.getMonth()}월 {date.getDate()+1}일</th>
              <th>{date.getMonth()}월 {date.getDate()+2}일</th>
              <th>{date.getMonth()}월 {date.getDate()+3}일</th>
              <th>{date.getMonth()}월 {date.getDate()+4}일</th>
              <th>{date.getMonth()}월 {date.getDate()+5}일</th>
              <th>{date.getMonth()}월 {date.getDate()+6}일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBaUmnb6syjxN6yY3EQ3fBg6nXv1u7-DtKw&usqp=CAU" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zT26WiVPEKDtIhuIkurK2Mzj2bwLcc1kvw&usqp=CAU" width="200" height="200" alt="My Image"/></td>
                <td><img src="" width="200" height="200" alt="My Image"/></td>
                <td><img src="" width="200" height="200" alt="My Image"/></td>
                <td><img src="" width="200" height="200" alt="My Image"/></td>
                <td><img src="" width="200" height="200" alt="My Image"/></td>
                <td><img src="" width="200" height="200" alt="My Image"/></td>
            </tr>
            <tr>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gBkH8vVew9-rn_l6TXLgnBk6SviOIiAoxg&usqp=CAU" width="200" height="200" alt="My Image"/></td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUkRCpoRggl9eByG7ht2a6peVPL1HjhqGkw&usqp=CAU" width="200" height="200" alt="My Image"/></td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cOnnp8SX1qFmYt6_2I7Ik0Nx0elrRPZf0A&usqp=CAU" width="200" height="200" alt="My Image"/></td>
            <td><img src="" width="200" height="200" alt="My Image"/></td>
            <td><img src="" width="200" height="200" alt="My Image"/></td>
            <td><img src="" width="200" height="200" alt="My Image"/></td>
            <td><img src="" width="200" height="200" alt="My Image"/></td>
            </tr>
            <tr>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP1WTKgVR2L8_v8fFtPWC3ISPz1OnaF-jAA&usqp=CAU" width="200" height="200" alt="My Image"/></td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILrHcaXpb86kLLb25kmoMTYCwIvhGUwor7Q&usqp=CAU" width="200" height="200" alt="My Image"/></td>
            <td><img src="" width="200" height="200" alt="My Image"/></td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofII2I9Yn58vdE7-8q2oj58M-YWJjAvxPJA&usqp=CAU" width="200" height="200" alt="My Image"/></td>
            <td><img src="" width="200" height="200" alt="My Image"/></td>
            <td><img src="" width="200" height="200" alt="My Image"/></td>
            <td><img src="" width="200" height="200" alt="My Image"/></td>
            </tr>
          </tbody>
        </table>
        <table>
        <thead>
            <tr>
            <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
            </tr>
          </thead>

        </table>
      </>
    )
  }
export default thisweek;
