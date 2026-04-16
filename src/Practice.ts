type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (update: Partial<Chai>) => {
    console.log(updateChai);
}

updateChai({price: 40});
updateChai({isHot: true});
updateChai({})