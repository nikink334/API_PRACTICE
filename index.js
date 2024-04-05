import express from 'express';

const app = express();

const PORT = 5000;

app.get('/first', (req, res)=>{
    res.send("<h1> the first request </h1>");
})

app.get('/second', (req, res)=>{
    res.send("the second request");
})

/*
app.get('/burger', (req, res)=>{
    res.send("Chicken Burger Is Ready");
})

app.get('/pizza', (req, res)=>{
    res.send("Panner Pizza Is Ready");
})

app.get('/pasta', (req, res)=>{
    res.json({
        name: "Pesto Pasta",
        price: 500
    })
})

*/


/*
app.get("/order-food", (req, res) => {

    // Query Parasm
    
    const queryParams = req.query;
    console.log("#######");
    console.log(queryParams);
    console.log("#######");

    res.json({
        message: "order recived successfully"
    })  

    const menu = req.query.menu;
    const quantity = req.query.quantity;

    res.json({
        message: `You Have Ordered ${quantity} ${menu}`
    })  


    const {menu, price, quantity} = req.query;
    const totalPrice = parseInt(price)*parseInt(quantity);

    res.json({
        message: `You Have Orderd ${quantity} ${menu}`,
        bill: `Your Total Bill Is ${totalPrice}`
    })
})
*/


// Path

app.get("/food/:type", (req, res) => {

    const {type} = req.params;

    if(type=="veg"){
        return res.json({
            message: "You Have Orderd Veg Food. "
        })
    }

    else{
        return res.json({
            message: "You Have Orderd Non-Veg Food."
        })
    }

    res.json({
        message: "You Have Orderd Food"
    })
})


// Headers
/*
app.get("/order-food", (req, res) => {

    console.log(`Headers: ` , req.headers)

    const {menu, price, quantity} = req.query;
    const totalPrice = parseInt(price)*parseInt(quantity);

    res.json({
        message: `You Have Orderd ${quantity} ${menu}`,
        bill: `Your Total Bill Is ${totalPrice}`
    })
})  */



// Body




app.listen(PORT, ()=>{

    console.log('server is running on 5000');

})