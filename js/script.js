const showProduct = () =>{
    const productField = document.getElementById('product-field')
    const quantityField = document.getElementById('quantity-field')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    displayData(product, quantity)
    setDataToLs(product,quantity)
}

const displayData = (product,quantity) =>{
    const main = document.getElementById('main')
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}`
    main.appendChild(li)
}

const getDataFromLs = () =>{
    let cart = {}
    const getData = localStorage.getItem('cart')
    if(getData){
        cart = JSON.parse(getData)
    }
    return cart;
}

const setDataToLs = (product, quantity) =>{
    const cart = getDataFromLs()
    cart[product] = quantity;
    const cartSringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartSringify)
}

const displayProduct = () =>{
    const saveData = getDataFromLs()
    console.log(saveData)
    for(data in saveData){
        const quantity = saveData[data]
        console.log(data,quantity)
        displayData(data, quantity)
    }
}

displayProduct()

