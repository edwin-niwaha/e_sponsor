import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getSponsors } from '../services/SponsorService';
import "../App.css";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
   let mounted = true;
   getSponsors()
     .then(data => {
       if(mounted) {
        setSponsors(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <h4>LIST OF SPONSORS</h4>
    <hr></hr>
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>#</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Job Title</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {sponsors.map((sps) =>
            <tr key={sps.id}>
                <td>{sps.id}</td>
                <td>{sps.last_name}</td>
                <td>{sps.first_name}</td>
                <td>{sps.job_title}</td>
                <td>{sps.description}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Sponsors;