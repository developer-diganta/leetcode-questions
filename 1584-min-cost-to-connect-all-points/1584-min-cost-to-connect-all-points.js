const calcDistance = ([x1, y1], [x2, y2]) =>
    Math.abs(x1 - x2) + Math.abs(y1 - y2);

  var minCostConnectPoints = function (points) {
    const n = points.length;
    let dist = [];

    for (let i = 0; i < n; i++) {
      const [x1, y1] = points[i];
      for (let j = i; j < n; j++) {
        const [x2, y2] = points[j];
        if (x1 === x2 && y1 === y2) continue;
        const d = calcDistance([x1, y1], [x2, y2]);
        dist.push([i, j, d]);
      }
    }

    dist = dist.sort((a, b) => a[2] - b[2]);

    // union and find
    const unf = Array.from({ length: n }, (v, i) => i);

    // find
    function Find(x) {
      if (x === unf[x]) return x;
      else return (unf[x] = Find(unf[x]));
    }

    // union
    function Union(x, y) {
      let fx = Find(x);
      let fy = Find(y);
      if (fx !== fy) unf[fx] = fy;
    }

    let cnt = 1;
    let answer = 0;
    for (const [p1, p2, d] of dist) {
      let f1 = Find(p1);
      let f2 = Find(p2);
      if (f1 !== f2) {
        // union
        unf[f1] = f2;
        answer += d;
        cnt++;
      }
      if (cnt === n) break;
    }
    return answer;
  };