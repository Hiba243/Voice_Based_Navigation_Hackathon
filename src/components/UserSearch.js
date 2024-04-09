import React, { useState, useEffect } from 'react';

// const queryDynamoDB = async () => {
//     const params = {
//         TableName: 'AsgneTbl',
//         KeyConditionExpression: 'FirstName = :key',
//         ExpressionAttributeValues: {
//             ':key': { S: 'John' },
//         },
//     };

//     try {
//         const data = await dynamoDB.query(params).promise();
//         console.log('Query result:', data.Items);
//     } catch (error) {
//         console.error('Error querying DynamoDB:', error);
//     }
// };

// queryDynamoDB();

const UserSearch = () => {
  const buttonStyle = {
    display: 'none'
  };
  useEffect(() => {
    // Simulate a button click on page load
    handleSearchClick();
  }, []);
  window.AWS.config.update({
    region: 'us-east-1',
    dynamodb: { endpoint: 'dynamodb.us-east-1.amazonaws.com' },
    accessKeyId: '<secret-1>',
    secretAccessKey: '<secret-2>'
  });

  const dynamoDB = new window.AWS.DynamoDB();

  const [tableData, setTableData] = useState([]);

  const handleSearchClick = async () => {
    const params = {
      TableName: '<table-name>',
    };

    try {
      const data = await dynamoDB.scan(params).promise();
      setTableData(data.Items);
    } catch (error) {
      console.error('Error scanning DynamoDB table:', error);
    }
  };
  return (
    <div className='user_search'>
      <h1>Users List</h1>
      <button id="searchBtn" className='searchbutton' onClick={handleSearchClick} style={buttonStyle}>Search</button>
      <div className='card_flex'>
      {tableData.map((item, index) => (
        <div className="card" key={index}>
          <div className="container_usersearch">
            <h2><b>{item.FirstName.S} {item.LastName.S}</b></h2>
            <p>{item.Gender.S}</p>
            <p>{item.AccessType.S}</p>
            <p>{item.PhoneNumber.S}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default UserSearch;