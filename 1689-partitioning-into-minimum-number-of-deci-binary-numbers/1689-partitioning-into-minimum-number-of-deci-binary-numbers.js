let minPartitions = n => n.split('').map(x => +x).reduce((x, y) => x > y ? x : y);
