function findPair(nums, target) {
    const numSet = new Set();
    for (const num of nums) {
        const complement = target - num;
        if (numSet.has(complement)) {
            console.log(`Pair found (${num}, ${complement})`);
            return;
        }
        numSet.add(num);
    }
    console.log("Pair not found.");
}

// Test cases
findPair([8, 7, 2, 5, 3, 1], 10); // Pair found (8, 2) or (7, 3)
findPair([5, 2, 6, 8, 1, 9], 12); // Pair not found.
