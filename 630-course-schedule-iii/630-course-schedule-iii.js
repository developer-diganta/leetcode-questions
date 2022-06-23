var scheduleCourse = function(courses) {
    courses.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    
    let heap = new MaxPriorityQueue({compare: (a, b) => b[0] - a[0]});

    let totalDur = 0, totalCourses = 0;
    for (let i = 0; i < courses.length; i++) {
        let [curDur, curLast] = courses[i];
        if (totalDur + curDur > curLast) {
            if (heap.size()) {
                let [largestDur] = heap.front();
                if (curDur > largestDur) continue;
                if (totalDur - largestDur + curDur <= curLast) {
                    totalDur = totalDur - largestDur + curDur;
                    heap.dequeue();
                    heap.enqueue(courses[i]);
                }
            }
        }
        else {
            totalDur += curDur;
            totalCourses++;
            heap.enqueue(courses[i]);
        }
    }
    
    return totalCourses;
};