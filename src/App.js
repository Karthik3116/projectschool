// // import './App.css'
// import Home from "./components/Home"
// import Login from "./components/Login"
// import Signup from "./components/Signup"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/home" element={<Home/>}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadForm = () => {
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

// export default UploadForm;




// App.js

import React from 'react';
import Home from './Home';

const App = () => {
  return (
    <div>
      <p>
        <br></br>
      </p>
      <Home />
    </div>
  );
};

export default App;
