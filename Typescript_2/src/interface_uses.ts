// interface is used to implement class
// inheritence is used to extend class

interface Vehicle {
    brandName: string,
    getBrandName: () => string,
}

class Bike implements Vehicle {
    brandName: string;

    constructor(brandName: string){
        this.brandName = brandName;
    }

    getBrandName(): string{
        return this.brandName = this.brandName;
    }

    openAirBags(): void{
        console.log("Air bags opened");
    }
}
