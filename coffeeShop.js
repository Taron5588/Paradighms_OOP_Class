class CoffeeShop {
    constructor(name, menu) {
      this.name = name;
      this.menu = menu;
      this.orders = [];
    }
    addOrder(itemName) {
        const found = this.menu.find(element => element.name === itemName)
        if(found) {
            this.orders.push(found)
            return "Order added"
        }
        // *first version*
        // for (let value of this.menu) {
        //   if (itemName === value.name) {
        //     this.orders.push(value);
        //     return "Order added"
        //   }
        // }
            return "This item is currently unavailable!"
    };
    fulfillOrder() {
        if (this.orders.length) {
            return `This ${this.orders.shift().name} is ready!`;
        }
            return `All orders have been fulfilled! `;
    };
    listOrders() {
        return this.orders.map(({name}) => name);
    };
    dueAmount() {
        return this.orders.reduce((acc, {price}) => (acc + price), 0);
    };
    cheapestItem() {
        return this.menu.reduce((p, c) => p.price < c.price ? p : c).name
                //*second version
                // const minItem = this.menu.reduce((prev, curr) => {
                //         return prev.price < curr.price ? prev : curr
                //     })
                // return minItem.name
        // *first version*    
        // let minPrice = this.menu[0].price
        // let ItemWithMinPrice = this.menu[0].name
        // for(let value of this.menu){
        //     if(value.price < minPrice) {
        //         minPrice = value.price
        //         ItemWithMinPrice = value.name
        //     }
        // }
        // return `${ItemWithMinPrice} is the cheapset on our menu!`;
    };
    drinksOnly() {
        return this.menu.filter(({type}) => type === "drink");
    }
    foodOnly() {
        return this.menu.filter(({type}) => type === "food");
    }
    }

const myMenu = [
        { name: "Cola", type: "drink", price: 300 },
        { name: "Cappuccino", type: "drink", price: 400 },
        { name: "pizza", type: "food", price: 3500 },
        { name: "Ice cream", type: "food", price: 50 },
        {name: "cinnamon roll", type: "food", price: 550},
        {name: "iced coffee", type: "drink", price: 450}
      ];
const tcs = new CoffeeShop("MyCoffeeShop", myMenu);

console.log(tcs.addOrder("hot cocoa")); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa 
console.log(tcs.addOrder("iced tea")); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process 
console.log(tcs.addOrder("cinnamon roll")); // "Order added!
console.log(tcs.addOrder("iced coffee")); // "Order added!
console.log(tcs.listOrders()); // ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
console.log(tcs.dueAmount()) // 1000
console.log(tcs.fulfillOrder()) // "The cinnamon roll is ready!"
console.log(tcs.fulfillOrder()) // "The iced coffee is ready!" 
console.log(tcs.fulfillOrder()) // "All orders have been fulfilled!"
// all orders have been presumably served
console.log(tcs.listOrders()) // []
console.log(tcs.dueAmount()) // 0
console.log(tcs.cheapestItem())
console.log(tcs.drinksOnly())
console.log(tcs.foodOnly())




