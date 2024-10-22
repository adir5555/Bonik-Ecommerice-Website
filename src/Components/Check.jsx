// import  { useState } from 'react';
// import '../HooksCss/Check.css'; // Optional for styling




// const Check = () => {
//   const [query, setQuery] = useState(''); // Track search input
//   const [results, setResults] = useState([]); // Track search results

//   // Sample data to search through
//   const data = [
//     'apple',
//     'banana',
//     'orange',
//     'grape',
//     'pineapple',
//     'mango',
//     'pear',
//     'watermelon',
//   ];

//   // Handle input change
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     // Filter the data based on search query
//     const filteredResults = data.filter((item) =>
//       item.toLowerCase().includes(value.toLowerCase())
//     );
    
//     setResults(filteredResults); // Update results
//   };

//   return (
//     <div className="container">
//     <input
//       type="text"
//       className="search-bar"
//       placeholder="Search for a fruit..."
//       value={query}
//       onChange={handleInputChange}
//     />

//     {query && (
//       <div className="results">
//         {results.length > 0 ? (
//           <ul>
//             {results.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         ) :
//          (
//           <p className='text-3xl'>No results hot found</p>
          
//         )}
//       </div>
//     )}
//   </div>
//   );
// };

// export default Check;






const Check = ({result}) => {
  return (
    <div>

{result}
      
    </div>
  );
};

export default Check;