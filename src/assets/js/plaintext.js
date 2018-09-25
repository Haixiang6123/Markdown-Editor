export default {
    plaintext: `# 652. Factorization

## Idea
1. Similar to sum combination.
2. Notes:
	1. Only add and remove in iteration.
	2. Starting from 2, and end with\`Math.sqrt(n)\`。
	3. The end condition is n <= 1 and solution.size() > 1, because there could be 8 -> [8].
---
## Codes
\`\`\`java
public List<List<Integer>> getFactors(int n) {
    List<List<Integer>> results = new ArrayList<>();

    if (n == 1) {
        return results;
    }

    getFactorsHelper(n, 2, new ArrayList<>(), results);

    return results;
}

private void getFactorsHelper(int n, int index, List<Integer> solution, List<List<Integer>> results) {
    if (n <= 1) {
        if (solution.size() > 1) {
            results.add(new ArrayList<>(solution));
        }
        return;
    }

    for (int i = index; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            solution.add(i);
            getFactorsHelper(n / i, i, solution, results);
            solution.remove(solution.size() - 1);
        }
    }

    if (n >= index) {
        solution.add(n);
        getFactorsHelper(1, n, solution, results);
        solution.remove(solution.size() - 1);
    }
}
\`\`\``
}