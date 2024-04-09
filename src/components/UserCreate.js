import React, { useRef, useState } from 'react';

const UserCreate = () => {
  const firstnameRef = useRef('');
  const lastnameRef = useRef('');
  const phonenumberRef = useRef('');
  const accesstype_admin = useRef('');
  const accesstype_user = useRef('');
  const messageRef = useRef(null);
  const selectRef = useRef(null);
  
  const options = [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Other', value: 'other' },

  ];


  const handleSave = async () => {
    try {

      window.AWS.config.update({
        region: 'us-east-1',
        dynamodb: {endpoint: 'dynamodb.us-east-1.amazonaws.com'},
        accessKeyId: '<secret-1>',
        secretAccessKey: '<secret-2>'
      });

      // Set up AWS DynamoDB Document Client
      const docClient = new window.AWS.DynamoDB.DocumentClient();
      let access_type='';
      if(accesstype_admin.current.checked)
      access_type='admin';
      else
      access_type='user';
      // DynamoDB parameters
      const params = {
        TableName: '<table-name>', // Replace with your table name
        Item: {
          FirstName: firstnameRef.current.value,
          LastName: lastnameRef.current.value,
          Gender:selectRef.current.value,
          AccessType:access_type,
          PhoneNumber: phonenumberRef.current.value
        },
      };

      // Save data to DynamoDB
      const result = await docClient.put(params).promise();

      console.log('Data saved successfully:', result);
      messageRef.current.innerText = 'Save successfull!';
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleReset = () => {
    firstnameRef.current.value = '';
    lastnameRef.current.value = '';
    phonenumberRef.current.value = '';
  };
  function phonedone() {
    var x = document.getElementById("PhoneNumber").value;
    //console.log("value is " + x);

  }

  return (
    <div className="user_create">
      <p ref={messageRef}></p>
      <p>Note: Please enter PII data manually</p>
      <div className='form_fields'>
        <div className='field'>
        <label>First Name&nbsp;</label>
        <input
          type="text"
          id="FirstName"
          ref={firstnameRef}
        />
        </div>
      <div className='field'>
      <label>
        Last Name&nbsp;</label>
        <input
          type="text"
          id="LastName"
          ref={lastnameRef}
        />
      </div>

      <div className='field'>
    <label>

      Gender &nbsp;</label>

      <select id="Gender" className='dropdown' ref={selectRef}>

        {options.map((option) => (

          <option value={option.value} key={option.value}>{option.label}</option>

        ))}

      </select>

    
    </div>

    <div className='field'>
      <label>
        Access Type
        </label>
        <div className='radio-flex'>
        <div className='radiolabel'><input type="radio" id="type_admin" name="access_type" value="Admin" ref={accesstype_admin}/>&nbsp;<label>Admin</label></div>
        &nbsp;&nbsp;
        <div className='radiolabel'><input type="radio" id="type_user" name="access_type" value="User" ref={accesstype_user}/>&nbsp;<label>User</label></div>
        </div>
      </div>

      <div className='field'>
      <label>
        Phone Number&nbsp;
        </label>
        <input
          type="text"
          id="PhoneNumber"
          ref={phonenumberRef}
          onBlur={phonedone}
        />
      </div>
      
      </div>

      <div className='usercreate_btn'>
        <button id="SaveBtn" className='saveBtn' onClick={handleSave}>Save</button>
        <button id="ResetBtn" className='resetBtn' onClick={handleReset}>Reset</button>
      </div>

    </div>
  );
};



export default UserCreate;