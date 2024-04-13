import React, { useState } from 'react';

const UserProfile = () => {
  const [userDetail, setUserDetail] = useState();

  const getUserDetails = async () => {
    try {
      const response = await fetch('http://localhost:5050/api/user/profile', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
      });
  
      const data = await response.json();
      console.log(data);
      setUserDetail(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  
  getUserDetails();

  return (
    <div>
      <p>{userDetail ? JSON.stringify(userDetail) : 'Loading...'}</p>
    </div>
  );
};

export default UserProfile;
