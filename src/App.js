import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import {Container } from '@material-ui/core';
//import { Container } from 'react-bootstrap';




function App() {

  const [leads,setLeads] = useState ([]);

  useEffect ( () => {
    fetch('http://127.0.0.1:8000/api/leads/',{
      'method': 'GET',
      headers: {
        'Content-Type': 'application',
        'Authorization' : 'Token 6c4aa24b1394b0bb3f072588f4db328d42c51552'
      }

    })
    .then(resp => resp.json())
    .then(resp=> setLeads(resp))
    .catch (error => console.log(error))

  }, [])
 

  return (
  <div className='app-container'>
         <h1 className='text-center'>CRM Application</h1>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        
         <div className='app-container'  >
           
           <table>
             <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>PhoneNumber</th>
                  <th>MobileNumber</th>
                  <th>JobPosition</th>
                </tr>
             </thead>
             
             <tbody>
             {leads.map ( (lead) =>{
          return (
               <tr key = {lead.id}>
                  <td>{lead.firstName}</td>
                  <td>{lead.lastName}</td>
                  <td>{lead.email}</td>
                  <td>{lead.company}</td>
                  <td>{lead.phoneNumber}</td>
                  <td>{lead.mobileNumber}</td>
                  <td>{lead.jobPosition}</td>
               </tr>
                )
              })}

         
             </tbody>
           </table>
           </div>

          

  

    </div>
  );
  }
       

export default App;




// return (
//   <div className='App'>
//        <h1>CRM Application</h1>

//        {leads.map ( lead =>{
//           return (
//             <div key = {lead.id}>
//           <h2>{lead.firstName}</h2>
//           <h2>{lead.lastName}</h2>
//           <h2>{lead.email}</h2>
//           <h2>{lead.company}</h2>
//           <h2>{lead.phoneNumber}</h2>
//           <h2>{lead.mobileNumber}</h2>
//           <h2>{lead.jobPosition}</h2>

//             </div>
//           )
//        })


//        }





//   </div>
//   );



// }






// default code from react 
// for animate logo need set show animate in windows display setting
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
