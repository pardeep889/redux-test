import data from "../data.json";
let orders = [];

export function getInventory(){
    return{
        type: "GET_INVENTORY",
        payload: data
    }
}

export function addOrder(item){
    orders.push(item);
    return{
        type: "ADD_ORDER",
        payload: orders
    }
}

export function makeComplete(data,i) {
    data[i] = {
        ...data[i], complete: true
    }
    return{
        type: "COMPLETE",
        payload: orders
    }
}

export function makePickup(data,i) {
    console.log(i)
    data[i] = {
        ...data[i], status: "Picked-up"
    }
    return{
        type: "COMPLETE",
        payload: orders
    }
}