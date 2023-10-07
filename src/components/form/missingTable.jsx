import React, { useState } from 'react';
import './missingTable.css';


/*
This function will create a table with the name, phone number & gender of everyone.
input: list of lists with the info : [[name, gender, phone-number]....]
*/
import './missingTable.css';

function MissingTable({ informations }) {
  const [searchTerm, setSearchTerm] = useState('');
  

  const filteredData = informations.filter((info) =>
    info[0].includes(searchTerm)
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="missing-people">
      <h2>נמצאו {informations.length} אנשים</h2>
      <div className="searchBar">
        <input
          type="text"
          className="searchInput"
          placeholder="חפש לפי שם"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="findMeTable">
        <thead>
          <tr>
            <th>שם</th>
            <th>מגדר</th>
            <th>צור קשר עם</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((information, index) => (
            <tr key={index}>
              <td>{information[0]}</td>
              <td>{information[1]}</td>
              <td>
                <button>{information[2]}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissingTable;

