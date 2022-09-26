var equationsPossible = function(equations) {
    let equals = {};
    for(let eq of equations){
        if(eq[1] === "="){
            let c1 = eq[0];
            let c2 = eq[3];
            if(!equals[c1]) equals[c1] = [c1];
            if(!equals[c1].includes(c2)) equals[c1].push(c2);
            if(!equals[c2]) equals[c2] = [c2];
            if(!equals[c2].includes(c1)) equals[c2].push(c1);
        }
        
    }
    let visited={};
    const dfs=(c1,c2) => {
        if(!equals[c1] || visited[c1] ) return false;
        if(equals[c1].includes(c2)) return true;
        visited[c1] = true;
        let returnVal = false;
        for(let c of equals[c1]){
            let currVal = dfs(c,c2);
            if(currVal) returnVal = true;
        }
        return returnVal;
    }
    for(let eq of equations){
        visited={};
        if(eq[1] === "!"){
            let c1 = eq[0];
            let c2 = eq[3];
            if(c1===c2) return false;
            if(dfs(c1,c2)) return false;
        }
    }
    return true;
};