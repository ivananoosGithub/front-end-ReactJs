import axios from 'axios';

const BASE_URL = 'http://localhost:8082/account';

// Function to perform login request
export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, user);
    return response.data; // Successful login response
  } catch (error) {
    throw error.response.data; // Error response
  }
};
