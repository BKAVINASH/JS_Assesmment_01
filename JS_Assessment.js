/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let carCollection = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintCar(make, model, year, color, rarity) {
    // Create an object to represent the car with its metadata
    let car = {
        make: make,
        model: model,
        year: year,
        color: color,
        rarity: rarity
    };
    // Add the new car to the collection
    carCollection.push(car);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listCars() {
    // Loop through each car in the collection
    for (let i = 0; i < carCollection.length; i++) {
        let car = carCollection[i];
        console.log(`Car #${i + 1}`);
        console.log(`Make: ${car.make}`);
        console.log(`Model: ${car.model}`);
        console.log(`Year: ${car.year}`);
        console.log(`Color: ${car.color}`);
        console.log(`Rarity: ${car.rarity}`);
        console.log('------------------------');
    }
}
// print the total number of NFTs we have minted to the console
function getTotalCars() {
    return carCollection.length;
}
// call your functions below this line
// Minting some cars
mintCar('Toyota', 'Corolla', 2020, 'Blue', 'Common');
mintCar('Honda', 'Civic', 2019, 'Red', 'Rare');
mintCar('Ford', 'Mustang', 2021, 'Black', 'Legendary');

// Listing all cars
listCars();

// Printing the total number of cars minted
console.log(`Total Cars Minted: ${getTotalCars()}`);
