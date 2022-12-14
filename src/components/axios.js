import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.cryptoslam.io/im6pi8nxcs120nhb/v1/sales/top-100?timeRange=week',
});

instance.get('X-BLOBR-KEY: ovbUETdWPB0b7cu3gZQ6Ld0lNcd5YM1A')

export default instance;


// export default axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'X-BLOBR-KEY': 'ovbUETdWPB0b7cu3gZQ6Ld0lNcd5YM1A'
//     }
// });

// export default {
//     getData: () =>
//     axios({
//         const options = {
//             method: 'GET',
//             headers: {
//               'X-BLOBR-KEY': 'ovbUETdWPB0b7cu3gZQ6Ld0lNcd5YM1A'
//             },
//           };
          
//           fetch('https://api.cryptoslam.io/im6pi8nxcs120nhb/v1/sales/top-100?timeRange=week', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
//     })
// }

// import axios from 'axios';
// const BASE_URL = 'https://api.cryptoslam.io/im6pi8nxcs120nhb/v1/sales/top-100?timeRange=week', options;

// export default axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         const options = {method: 'GET',
//                         headers: {'X-BLOBR-KEY': 'ovbUETdWPB0b7cu3gZQ6Ld0lNcd5YM1A'
//     }
// });