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
                <td><img src="https://img.gqkorea.co.kr/gq/2015/12/style_566644d1e72a9.jpg" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://newsimg-hams.hankookilbo.com/2021/11/24/91b824b9-c15e-4ceb-88bb-59126bc8b32b.png" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://newsimg-hams.hankookilbo.com/2021/11/24/91b824b9-c15e-4ceb-88bb-59126bc8b32b.png" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://newsimg-hams.hankookilbo.com/2021/11/24/91b824b9-c15e-4ceb-88bb-59126bc8b32b.png" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://newsimg-hams.hankookilbo.com/2021/11/24/91b824b9-c15e-4ceb-88bb-59126bc8b32b.png" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://newsimg-hams.hankookilbo.com/2021/11/24/91b824b9-c15e-4ceb-88bb-59126bc8b32b.png" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://img.gqkorea.co.kr/gq/2015/12/style_566644d1e72a9.jpg" width="200" height="200" alt="My Image"/></td>
            </tr>
            <tr>
            <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
            </tr>
            <tr>
            <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
            </tr>
            <tr>
            <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
            </tr>
            <tr>
            <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
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
