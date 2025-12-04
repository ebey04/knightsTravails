function knightMoves(start, goal) {
    const queue = [];
    const visited = new Set();
    const parent = new Map();

    queue.push(start);
    visited.add(JSON.stringify(start));

    while (queue.length > 0) {
        const node = queue.shift(); 

        if (JSON.stringify(node) == JSON.stringify(goal)) {
            return buildPath(JSON.stringify(goal), parent)
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

function buildPath(goal, parent) {
    const path = [];
    let current = goal;

    while (current !== undefined) {
        path.unshift(JSON.parse(current))
        current = parent.get(current);
    }
    return path;
}

function getKnightMoves([startRow, startCol]) {
    const boardSize = 8; // For an 8x8 chessboard
    const knightMoves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    const availableMoves = [];

    for (const move of knightMoves) {
        const newRow = startRow + move[0];
        const newCol = startCol + move[1];

        // Check if the new position is within the board boundaries
        if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
        availableMoves.push([newRow, newCol]);
        }
    }

    return availableMoves;
}