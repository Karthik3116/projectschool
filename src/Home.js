// // Home.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(null);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('image', image);

//     axios.post('http://localhost:8000/uploads', formData)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error('Error:', error.message);
//       });
//   };

//   return (
//     <div>
//       <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
//       <input type="file" onChange={handleImageChange} accept="image/*" />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default Home;


// Home.js

import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [name, setName] = useState('');
  const [regNumber, setRegNumber] = useState(''); // Add registration number state
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRegNumberChange = (e) => {
    setRegNumber(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    // formData.append('name', name);
    formData.append('regNumber', regNumber); // Append registration number to FormData
    formData.append('image', image);

    axios.post('http://localhost:8000/uploads', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <input type="text" value={regNumber} onChange={handleRegNumberChange} placeholder="Registration Number" />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Home;
