import axios from 'axios';

// module.exports = {
//     getJokes:function(){
//         return new Promise((resolve,reject) =>{
//             fetch('https://api.chucknorris.io/jokes/random')
//             .then(res => res.json())
//             .then(data => {
//                 resolve(data.value);
//             })
//         })
//     }
// }

// export const jokes = {
//     getJokes:function(){
//         return new Promise((resolve,reject) =>{
//             fetch('https://api.chucknorris.io/jokes/random')
//             .then(res => res.json())
//             .then(data => {
//                 resolve(data.value);
//             })
//         })
//     }
// }

export const jokes = {
    getJokes:function(){
        return new Promise((resolve,reject) =>{
            axios.get('https://api.chucknorris.io/jokes/random')
                .then(res =>{
                    resolve(res.data.value)
                })
        })
    }
}