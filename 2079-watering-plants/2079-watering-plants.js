/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
        var temp = capacity, steps=0;
    for(var i=0; i<plants.length; i++)
        {
            if(capacity>=plants[i])
                {
                    steps++;
                    capacity-=plants[i];
                }
            else
                {
                    steps+=i+i+1;
                    capacity=temp-plants[i];
                }
        }
    return steps;
};