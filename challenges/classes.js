// 1. Copy and paste your prototype in here and refactor into class syntax.

console.log('\n*** Classes.js Section ***\n\n');
// CuboidMaker and cuboid are already defined in prototypes.js, thus I've named the following CuboidMaker2 and cuboid2
  class CuboidMaker2 {
      constructor(cuboid) {
        this.length = cuboid.length;
        this.width = cuboid.width;
        this.height = cuboid.height;
      }

      volume() {
        return this.length * this.width * this.height
      }

      surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      }
  }
  
  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    // with a cube, l = w = h
    constructor(cuboid) {
        if (cuboid.length === cuboid.height && cuboid.height === cuboid.width){
            super(cuboid);
        } else {
            // throw errow if not a cube
            throw "Your cuboid's length, height and width must be equal";
        }
    }

    volume(){ // V = l|w|h ^3
        return this.length * this.length * this.length;
    }

    surfaceArea() { // A = 6 * l/w/h^2
        return 6 * (this.length * this.length);
    }
}

// works as expected
try {
    const cube = new CubeMaker({
        length: 5,
        height: 5,
        width: 5
    })

    console.log(cube.volume()); // 125

    console.log(cube.surfaceArea()); // 150

} catch(e) {
    console.log(e);
}

// expect error to be console logged
try {
    const cube2 = new CubeMaker({
        length: 5,
        height: 6,
        width: 5
    })

    console.log(cube.volume()); // 125

    console.log(cube.surfaceArea()); // 150

} catch(e) {
    console.log(e);
}

