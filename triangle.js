const side1 = 10
const side2 = 10
const side3 = 10

if(side1 === side2 && side2 === side3)(
    console.log("equilateral triangle")
)
else if (side1 === side2 || side1 === side3 || side2 === side3)(
    console.log("issosceles triangle")
)
else(
    console.log("scalene triangle")
)