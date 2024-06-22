//Solve using level order traversal (BFS)

function bfs(src, dest, g, visited) {
    //corner case 
    if (src == dest) return true;

    //maintain a ques for all elements
    const qu = [];

    qu.push(src);//push the src in que

    visited.add(src);//add in the visited set

    while (!qu.length == 0) { // till the time que is not empty

        const ele = qu.shift(); //we remove the front element

        for (neighbour of g[ele]) {
            if (neighbour == dest) return true;

            if (!visited.has(neighbour)) { //if visited set dont have the neighbour
                visited.add(neighbour); // we add it 
                qu.push(neighbour)  // and push to que also
            }
        }
    }

    return false;


}

var validPath = function (n, edges, source, destination) {
    //created the graph
    const g = new Array(n);
    for (let i = 0; i < n; i++) {
        g[i] = []
    }

    //Populated the graph

    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0]
        let v = edges[i][1]
        g[u].push(v);
        g[v].push(u)
    }

    // return the bfs traversal function
    return bfs(source, destination, g, new Set());


};