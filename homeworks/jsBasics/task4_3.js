let radius = 5;
let height = 9;

function calculateCylinderVolume(radiusValue, heightValue) {
  let cylinderVolume = Math.PI * (radiusValue ** 2) * heightValue;
  console.log(`Cylinder volume is ${cylinderVolume.toFixed(2)}`);
}

calculateCylinderVolume(radius, height);