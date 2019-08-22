const {countProducts,fetchProduct,generateReceiptTtems,countTotalPrice,printReceipt} = require('../main');

it ('should count codes', () => {
//given
const codes=['0003','0005','0003'];
//when
const countedCodes= countProducts(codes);
console.log(countedCodes)
//then
    expect(countedCodes[0].count).toBe(2);
});

it ('should fetch product', () => {
    //given
    const db=[
        {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    ]
    const code="0001";
   
    //when

    const product= fetchProduct(code,db);
    console.log(product)
    //then
        expect(product.price).toBe(3);
    });

    it('结果验证',() => {
        //集成
        var codes = generateReceiptTtems(['0003','0003','0001'])
        console.log("generateReceiptTtems:",codes);
        //输出
        // [
        //     {name:'Pepsi-Cola',price:5,count:2},
        //     {name:'Coca Cola',price:3,count:1}
        // ]
    }
    )

    it('结果验证',() => {
    var countTotalPriceInput =[
        {name:'Pepsi-Cola',price:5,count:2},
        {name:'Coca Cola',price:3,count:1}
    ];
    var  totalPrice=countTotalPrice(countTotalPriceInput);
    console.log(totalPrice);
})

it('结果验证',() => {
    var receipText = printReceipt(['0003','0003','0001'])

    console.log(receipText);
})