// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// function NfthotPicks() {
//   const [data, setData] = useState([]);

//   const options = {
//     method: 'GET',
//     headers: {
//       'X-BLOBR-KEY': 'ovbUETdWPB0b7cu3gZQ6Ld0lNcd5YM1A'
//     },
//   };

//   useEffect(() => {
//     async function fetchData() {
//         const request = await axios.get('https://api.cryptoslam.io/im6pi8nxcs120nhb/v1/sales/top-100?timeRange=week', options);
//         setData(request.data);
//         return request;
//     }
//     fetchData();
//   }, ['https://api.cryptoslam.io/im6pi8nxcs120nhb/v1/sales/top-100?timeRange=week', options]);



//     const renderRow = ({ index, key, style }) => (
//         <div>
//          <div key={key} style={style} className="post">
//            <h3>{`${data[index].collectionName}-${data[index].id}`}</h3>
//            <p>{data.rank}</p>
//          </div>
//         </div>
//        )
//        return (
//          <div
//            width={1200}
//            height={700}
//            rowRenderer={renderRow}
//            rowCount={data.length}
//            rowHeight={120}
//          />
//        );

      

// }

// export default NfthotPicks;








// // import React from 'react';

// // function NfthotPicks() {
// //   const [data, setData] = useState(null);
// //   useEffect(() => {
// //     fetch("https://dog.ceo/api/breeds/image/random")
// //       .then((resp) => resp.json())
// //       .then((apiData) => {
// //         setData(apiData.message);
// //       });
// //   }, []);
// //   return (
// //     <div>
// //       <img width={100} src={data} />
// //     </div>
// //   );
// // }

// // export default NfthotPicks;

// // const NfthotPicks = () => {
// //     const [nfts, setNfts] = useState([])
  
// //      const fetchData = () => {
// //     //   fetch("https://jsonplaceholder.typicode.com/users")
// //     const options = {
// //         method: 'GET',
// //         headers: {
// //           'X-BLOBR-KEY': 'ovbUETdWPB0b7cu3gZQ6Ld0lNcd5YM1A'
// //         },
// //       };
      
// //       fetch('https://api.cryptoslam.io/im6pi8nxcs120nhb/v1/sales/top-100?timeRange=week', options)
// //      // fetch("https://jsonplaceholder.typicode.com/users")
// //       .then(response => {
// //         return response.json()
// //       })
// //       .then(data => {
// //         setNfts(data)
// //         console.log(data)
// //       })
// //   }

// //   useEffect(() => {
// //     fetchData()
// //   }, [])

// //   return (
// //     <div>
// //       {nfts.length > 0 && (
        
// //         <ul>
// //           {nfts.map(nfts => (
// //             <div>
// //             art:{nfts.collectionName}
// //             {nfts.name}
// //             <li key={nfts.id}>{nfts.collectionName}</li>
// //             </div>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   )
// // }
// // function NfthotPicks() {
// //     const [data, setData] = useState(null);
// //     useEffect(() => {
// //       axios.get("https://dog.ceo/api/breeds/image/random").then((resp) => {
// //         setData(resp.data.message);
// //       });
// //     }, []);
// //     return (
// //       <div>
// //         <img width={100} src={data} />
        
// //       </div>
// //     );
// //   }

// //   export default NfthotPicks;
  
// const client = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com/posts" 
    
//   });

//   const App = () => {
//     const [posts, setPosts] = useState([]);
 
//     useEffect(() => {
//        client.get('?_limit=10').then((response) => {
//           setPosts(response.data);
//        });
//     }, []);
 
//     return (
//         <div className="app">
//     <h2>All Posts 📫</h2>
//     {posts.map((post) => {
//        return (
//           <div className="post-card" key={post.id}>
//              <h2 className="post-title">{post.title}</h2>
//              <p className="post-body">{post.body}</p>
//              <div className="button">
//                 <div className="delete-btn">Delete</div>
//              </div>
//           </div>
//        );
//     })}
//   </div>
// );

//  };
 
//  export default App;