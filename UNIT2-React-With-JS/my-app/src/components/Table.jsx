// import { Component } from "react";
// import './Table.css';

import { Component } from "react";
import TableBar from "./TableBar";

// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Job</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Charlie</td>
//                         <td>Janitor</td>
//                     </tr>
//                     <tr>
//                         <td>Mac</td>
//                         <td>Bouncer</td>
//                     </tr>
//                     <tr>
//                         <td>Dee</td>
//                         <td>Aspiring actress</td>
//                     </tr>
//                     <tr>
//                         <td>Dennis</td>
//                         <td>Bartender</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

// export default Table


// function component

// const TableHeader = () => {
//     return (
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Job</th>
//             </tr>
//         </thead>
//     )
// }

// export default TableHeader;

class App extends Component {
    state = {
        users: [
            { name: "Charlie", job: "Janitor" },
            { name: "Mac", job: "Bouncer" },
            { name: "Dee", job: "Aspiring actress" },
            { name: "Dennis", job: "Bartender" }
        ]
    }

    render() {
        return (
            <div className="container">
                <TableBar characterData={this.state.users} />
            </div>
        )
    }
}