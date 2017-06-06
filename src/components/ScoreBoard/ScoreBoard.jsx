import React from 'react';
import { Table } from 'react-bootstrap';
import './scoreBoard.css';

export default function ScoreBoard() {
  return (
    <div className="scoreBoard__table">
      <Table responsive>
       <thead>
         <tr>
           <th>#</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Environment</th>
           <th>Observation</th>
           <th>Rewired</th>
           <th>Amount of timesteps</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
           <td>Table cell</td>
         </tr>
       </tbody>
     </Table>
    </div>
  );
}
