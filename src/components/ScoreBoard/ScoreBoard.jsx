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
           <td>Ilya</td>
           <td>Babich</td>
           <td>CartPole</td>
           <td>-0.10304095</td>
           <td>1.21697297</td>
           <td>31</td>
            {/*<td>1</td>
           <td>Barry</td>
           <td>Allen</td>
           <td>N/A</td>
           <td>N/A</td>
           <td>N/A</td>
           <td>N/A</td>*/}
         </tr>
         <tr>
           <td>2</td>
           <td>Barry</td>
           <td>Allen</td>
           <td>CartPole</td>
           <td>-0.09578687</td>
           <td>-0.02943731</td>
           <td>19</td>
           {/*<td>2</td>
           <td>Clark</td>
           <td>Kent</td>
           <td>N/A</td>
           <td>N/A</td>
           <td>N/A</td>
           <td>N/A</td>*/}
         </tr>
         <tr>
           <td>3</td>
           <td>Clark</td>
           <td>Kent</td>
           <td>N/A</td>
           <td>N/A</td>
           <td>N/A</td>
           <td>N/A</td>
           {/*<td>3</td>
           <td>Ilya</td>
           <td>Babich</td>
           <td>N/A</td>
           <td>N/A</td>
           <td>N/A</td>
           <td>N/A</td>*/}
         </tr>
       </tbody>
     </Table>
    </div>
  );
}
