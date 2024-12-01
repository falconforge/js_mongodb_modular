import axios from 'axios';

// Utility to dynamically import endpoints
const loadEndpoint = async (endpointName) => {
  try {
    // Dynamically import the endpoint configuration file
    const { default: endpoints } = await import('./endpoints'); // Adjust the path as needed
    if (!endpoints[endpointName]) {
      throw new Error(`Endpoint "${endpointName}" not found.`);
    }
    return endpoints[endpointName];
  } catch (error) {
    console.error(`Failed to load endpoint: ${error.message}`);
    throw error;
  }
};

// Main Axios handler function
export const axiosRequest = async ({ endpointName, method = 'GET', data = {}, params = {}, headers = {} }) => {
  try {
    // Load the endpoint dynamically
    const endpoint = await loadEndpoint(endpointName);

    // Axios configuration
    const config = {
      url: endpoint.url,
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        ...endpoint.defaultHeaders, // Load default headers from endpoint config
        ...headers, // Override or add custom headers
      },
      params, // Query parameters
      data,   // Request body for POST, PUT, etc.
      timeout: endpoint.timeout || 10000, // Default to 10s timeout if not specified
    };

    // Perform the Axios request
    const response = await axios(config);

    // Handle the response
    console.info(`Request to ${endpointName} successful.`);
    return {
      success: true,
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error(`Error in ${method} request to "${endpointName}":`, error.message);
    
    // Handle and format errors
    return {
      success: false,
      status: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      data: error.response?.data || null,
    };
  }
};