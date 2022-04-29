/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    var output = true;
    if(graph.length <= 1) return true;
    var visited = {};
    function visit(ind, value){
        if(ind in visited){
            if(visited[ind] != value){
                output = false;
                return;
            }
        } else {
            visited[ind] = value;
            graph[ind].forEach(function(connection) {
                if(value == "A") visit(connection, "B");
                else visit(connection, "A");
            });
        }
    }
    for(var i = 0; i < graph.length; i++){
        if(!(i in visited)) visit(i, "A");
    }
    return output;
};