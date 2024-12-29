// const cart = [];

// const createItem = (item, products) => {
   
    
//     const col = document.createElement('div');
//     col.classList.add('col-sm-12', 'col-lg-4')
//     col.innerHTML = `
//                <div class="card-c">
//                             <img width="65%" src=${item.image} alt="">
//                             <div class="card-t">
//                                <b><p>${item.pName}</p></b>
//                                <p>${item.price}</p>
//                             </div>
//                         </div>
// `




//     return col;
// }



// const renderItems = (products) => {
//     const productsContainer = document.getElementById('products');
//     products.map(item => {
//         const col = createItem(item, products)
//         productsContainer.appendChild(col)
        
        
//     })
    
// }


// (function main() {
//     const products = [
//         { id: 1, pName: 'Rob Kostich', price: 'President', image: '../assets/img/rob-kostich.jpg' },
//         { id: 2, pName: 'Josh Taub', price: 'Chief Operating Officer', image: '../assets/img/josh-taub-e1415296398678.jpg' },
//         { id: 3, pName: 'Suzie Carr', price: 'Chief People Officer', image: '../assets/img/suzie-carr.jpg' },
//         { id: 4, pName: 'Terri Durham', price: 'SVP & General Counsel', image: '../assets/img/exec_1660078594604.jpg' },
//         { id: 5, pName: 'David Stohl', price: 'Head of Development, Call of Duty', image: '../assets/img/GSVvONFC_5PZHNfXNllLUQN8Xi3nn8LnkU3lVOu7t23T-ETJ4ADDFqXe8m4b1u52AjUICsCXwSxlz14q2yKVwQ.jpg' },
//         { id: 6, pName: 'Pat Kelly', price: 'Head of Creative, Call of Duty', image: '../assets/img/patt-kelly (1).jpg' },
//         { id: 7, pName: 'Tyler Bahl', price: 'SVP, Head of Marketing', image: '../assets/img/tyler-bahl.jpg' },
//         { id: 8, pName: 'Natasha Tatarchuk', price: 'SVP, Chief Technology Officer', image: '../assets/img/natasha.jpg' },
//         { id: 9, pName: 'Matt Cox', price: 'GM, Call of Duty', image: '../assets/img/matt-cox.jpg' },



//     ]
//     renderItems(products)
// })()


const showUserName = () =>{
    const userName = JSON.parse(localStorage.getItem('user-name'));
    const userBtn = document.getElementById('user');
    if(userName){
        // userBtn.innerText = userName;
        userBtn.innerHTML =  `
            welcome ${userName}        
        `
        userBtn.addEventListener('click',(e) =>{
            e.preventDefault();
            localStorage.removeItem('user-name');
            navigation.reload();
        })
    }
}

(async function render(){
    
showUserName();
})()