import axios from 'axios';

export default{

    getUsers:function() {
        return axios.get('https://randomuser.me/api/?nat=us&results=1337&nat=us')
    }
};

// const BASEURL = "https://randomuser.me/api/?results=25";
// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function() {
//     return axios.get(BASEURL);
//   }
// };