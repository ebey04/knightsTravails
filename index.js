function knightMoves(start, goal) {
    const queue = [];
    const visited = new Set();
    const parent = new Map();

    queue.push(start);
    visited.add(JSON.stringify(start));

    while (queue.length > 0) {
        const node = queue.shift(); 

        if (JSON.stringify(node) == JSON.stringify(goal)) {
            return buildPath(goal, parent)
        }

        for ( let neighbor of getKnightMoves(node)) {
            if (!visited.has(JSON.stringify(neighbor))) {
                visited.add(JSON.stringify(neighbor));
                parent.set(JSON.stringify(neighbor), JSON.stringify(node));
                queue.push(neighbor)
            }
        }
    }
}