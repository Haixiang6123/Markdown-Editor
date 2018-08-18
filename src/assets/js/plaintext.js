export default {
    plaintext: `# 652. Factorization
#Lintcode/组合与排列
---
# Idea
1. 与 sum 类似。
2. 注意：
	1. 只有在可以整除的时候才 add 、递归、 remove。
	2. 遍历从2开始到 \`Math.sqrt(n)\` 结束。
	3. 结束的情况是n <= 1 且 solution.size() > 1，因为有可能存在 8 -> [8] 的情况。
---
# Codes
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