import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate , Navigate} from 'react-router-dom';
import apiRequest from '../lib/utils/apiRequest';
 
const UserProfile = () => {

  const { currentUser , updateUser} = useContext(AuthContext);

  const navigate = useNavigate();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const handleLogout =  async () => {
      try {
        await apiRequest.post('auth/logout');
        updateUser(null)
        navigate('/')
                
      } catch (error) {
        console.log(error) 
      } 
  };

  console.log(currentUser)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={currentUser.avatar || null } alt="User Avatar" className="w-full h-auto rounded-full" />
        </div>
        <div>

          <h2 className="text-xl font-semibold mb-2">{currentUser.firstName}</h2>
          <p className="text-gray-600 mb-4">Email: {currentUser.email}</p>
          <p className="text-gray-600">Membership Type: {currentUser.membershipType || null}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
           onClick={handleLogout}>
            Logout
           </button>

        </div>
      </div>
    </div>
  );
}

export default UserProfile;
