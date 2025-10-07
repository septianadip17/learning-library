# Big-O Notation

Big-O notation is a mathematical concept used in computer science to describe the efficiency of algorithms, especially how their running time or space requirements grow as the input size increases.

## What is Big-O Notation?

Big-O notation expresses the upper bound of an algorithm’s growth rate. It tells you how the runtime or space usage increases as the input size ($n$) grows, focusing on the worst-case scenario.

### Why is Big-O Important?

- It helps compare algorithms regardless of hardware or implementation.
- It predicts scalability and performance for large inputs.

## Common Big-O Classes

- **O(1) — Constant time:**  
    Example: Accessing an element in an array by index.

    ```go
    x := arr[5]
    ```

- **O(log n) — Logarithmic time:**  
    Example: Binary search in a sorted array.

    ```go
    func binarySearch(arr []int, target int) int {
            left, right := 0, len(arr)-1
            for left <= right {
                    mid := (left + right) / 2
                    if arr[mid] == target {
                            return mid
                    } else if arr[mid] < target {
                            left = mid + 1
                    } else {
                            right = mid - 1
                    }
            }
            return -1
    }
    ```

- **O(n) — Linear time:**  
    Example: Looping through all elements in an array.

    ```go
    for _, item := range arr {
            fmt.Println(item)
    }
    ```

- **O(n log n) — Linearithmic time:**  
    Example: Mergesort algorithm.

    ```go
    func mergeSort(arr []int) []int {
            if len(arr) <= 1 {
                    return arr
            }
            mid := len(arr) / 2
            left := mergeSort(arr[:mid])
            right := mergeSort(arr[mid:])
            return merge(left, right)
    }
    ```

- **O(n^2) — Quadratic time:**  
    Example: Nested loops to compare all pairs.

    ```go
    for i := 0; i < len(arr); i++ {
            for j := 0; j < len(arr); j++ {
                    fmt.Println(arr[i], arr[j])
            }
    }
    ```

- **O(2^n) — Exponential time:**  
    Example: Generating all subsets of a set.

    ```go
    func subsets(arr []int) [][]int {
            if len(arr) == 0 {
                    return [][]int{{}}
            }
            first := arr[0]
            rest := subsets(arr[1:])
            result := make([][]int, len(rest)*2)
            copy(result, rest)
            for i, subset := range rest {
                    result[len(rest)+i] = append([]int{first}, subset...)
            }
            return result
    }
    ```

## Example

Suppose you have a function that loops through an array:

```go
func printItems(arr []int) {
    for _, item := range arr {
        fmt.Println(item)
    }
}
```

This function is O(n) because it prints each item once.

## How to Find Big-O

1. Count the number of basic operations as input grows.
2. Ignore constants and lower-order terms.
3. Focus on the dominant term as $n$ becomes large.

## Summary

Big-O notation helps you analyze and compare algorithms by describing their efficiency as input size increases. It’s a key tool for writing scalable, high-performance code.

---

*Expand each section with more details as you learn.*
*Last updated: 2025-10-07*
