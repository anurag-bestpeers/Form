// import React from "react";
// import { useState } from "react";

// const UserForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState("");

//   const handleForm = (e) => {
//     e.preventDefault();
//     alert(
//       `hello ${name} your email is ${email} your phone number is ${phone} your city is ${city}`
//     );
//   };
//   return (
//     <div>
//       <h2>User Form</h2>
//       <form className="container" onSubmit={handleForm}>
//         <div>
//           <label>Enter Your Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Enter Your Email</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Enter Your Phone</label>
//           <input
//             type="number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Enter Your City</label>
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <div>
//           <button>submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserForm;
