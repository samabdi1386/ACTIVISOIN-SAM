const cart = [];

const createItem = (item, products) => {
   
    
    const col = document.createElement('div');
    col.classList.add('col-sm-12', 'col-lg-4')
    col.innerHTML = `
               <div class="card ">

                            <img width="115%" src=${item.image}
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <b>
                                    <P class="card-title">${item.pName}</P>
                                    <p class="card-text">${item.price}</p>
                                </b>
                                <div class="shabe">

                                    <div class="shap">

                                    </div>

                                </div>
                                <b>
                                    <a class="read" href="#">READ MORE
                                        <svg class="icon-card" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path
                                                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </a>
                                </b>
                            </div>
                        </div>

`




    return col;
}



const renderItems = (products) => {
    const productsContainer = document.getElementById('products');
    products.map(item => {
        const col = createItem(item, products)
        productsContainer.appendChild(col)
        
        
    })
    
}


(function main() {
    const products = [
        { id: 1, pName: 'Nov 07, 2024', price: 'Black Ops 6 Season 01:What You Nees To Know', image: './assets/img/BO6-SEASON-01-ANNOUNCEMENT-TOUT.jpg' },
        { id: 2, pName: 'Nov 07, 2024', price: 'Black Ops 6 Season 01:What You Nees To Know', image: './assets/img/BO6-SEASON01-BATTLEPASS-TOUT.jpg' },
        { id: 3, pName: 'Nov 07, 2024', price: 'Black Ops 6 Season 01:What You Nees To Know', image: './assets/img/BO6-LAUNCH-LIVE-TOUT.jpg' },
        { id: 4, pName: 'Nov 07, 2024', price: 'Black Ops 6 Season 01:What You Nees To Know', image: './assets/img/COD-BO6-S0-ANNOUNCEMENT-TOUT.jpg' },
        { id: 5, pName: 'Nov 07, 2024', price: 'Black Ops 6 Season 01:What You Nees To Know', image: './assets/img/CODE-15-YEAR-IMAGE-TOUT.jpg' },
        { id: 6, pName: 'Nov 07, 2024', price: 'Black Ops 6 Season 01:What You Nees To Know', image: './assets/img/CODM-S10-5TH-ANNIVERSARY-TOUT.jpg' },

    ]
    renderItems(products)
})()





const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
// or
const myModalAlternative = new bootstrap.Modal('#myModal', options)


