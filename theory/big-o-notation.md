
# Theory of Big-O Notation

This document summarizes the concept of Big-O notation, its importance, common classes, and practical examples. It serves as a quick reference for analyzing and comparing algorithm efficiency in software development.

## Table of Contents

- [Introduction](#1-introduction)
- [Why is Big-O Important?](#2-why-is-big-o-important)
- [Common Big-O Classes](#3-common-big-o-classes)
  - [O(1) — Constant Time](#31-o1--constant-time)
  - [O(log n) — Logarithmic Time](#32-olog-n--logarithmic-time)
  - [O(n) — Linear Time](#33-on--linear-time)
  - [O(n log n) — Linearithmic Time](#34-on-log-n--linearithmic-time)
  - [O(n^2) — Quadratic Time](#35-on2--quadratic-time)
  - [O(2^n) — Exponential Time](#36-o2n--exponential-time)
- [How to Find Big-O](#4-how-to-find-big-o)
- [Summary](#5-summary)

---

## 1. Introduction

Big-O notation is a mathematical concept used in computer science to describe the efficiency of algorithms, especially how their running time or space requirements grow as the input size increases. It expresses the upper bound of an algorithm’s growth rate, focusing on the worst-case scenario.

## 2. Why is Big-O Important?

- It helps compare algorithms regardless of hardware or implementation.
- It predicts scalability and performance for large inputs.

## 3. Common Big-O Classes

Big-O classes describe typical growth rates for algorithms. Here are the most common:

### 3.1. O(1) — Constant Time

The algorithm takes the same time regardless of input size.

**Example:** Accessing an element in an array by index

```go
x := arr[5]
```

### 3.2. O(log n) — Logarithmic Time

Time grows slowly as input increases.

**Example:** Binary search in a sorted array

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

### 3.3. O(n) — Linear Time

Time grows directly with input size.

**Example:** Looping through all elements in an array

```go
for _, item := range arr {
    fmt.Println(item)
}
```

### 3.4. O(n log n) — Linearithmic Time

Common in efficient sorting algorithms.

**Example:** Mergesort algorithm

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

### 3.5. O(n^2) — Quadratic Time

Time grows with the square of input size.

**Example:** Nested loops to compare all pairs

```go
for i := 0; i < len(arr); i++ {
    for j := 0; j < len(arr); j++ {
        fmt.Println(arr[i], arr[j])
    }
}
```

### 3.6. O(2^n) — Exponential Time

Time doubles with each additional input.

**Example:** Generating all subsets of a set

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

## 4. How to Find Big-O

### 4.1. Count the number of basic operations as input grows

Big O notation measures how the steps an algorithm takes grow as the input gets bigger—like counting how many actions you need as your pile of toys increases.

**Go example:**

```go
func exampleFunction(arr []int) {
    sum := 0
    for _, item := range arr {
        sum += item
    }
    fmt.Println(sum)
}
```

**Explanation:** This function loops through the array once, so it’s O(n) because the time grows linearly with the size of `arr`.

### 4.2. Ignore constants and lower-order terms

Big O shows how fast something grows as your problem gets bigger. We only care about the part that matters most when things get really large.

**Go example:**

```go
func exampleFunction(arr []int) {
    for i := 0; i < len(arr); i++ { // O(n)
        for j := 0; j < len(arr); j++ { // O(n)
            fmt.Println(arr[i], arr[j]) // O(1)
        }
    }
}
```

**Explanation:** This function has a nested loop, so we multiply the time complexities: O(n) * O(n) = O(n^2).

### 4.3. Focus on the dominant term as n becomes large

As input grows, only the fastest-growing part matters. For example, in n^2 + n, n^2 dominates when n is large, so we call it O(n^2).

**Go example:**

```go
func findDuplicates(arr []int) []int {
    var duplicates []int
    for i := 0; i < len(arr); i++ { // O(n)
        for j := i + 1; j < len(arr); j++ { // O(n)
            if arr[i] == arr[j] { // O(1)
                duplicates = append(duplicates, arr[i]) // O(1)
                break
            }
        }
    }
    return duplicates // This is O(n^2) overall
}
```

**Explanation:** The nested loops give us O(n^2), and we ignore the constant time operations like appending to the slice.

## 5. Summary

Big-O notation helps you analyze and compare algorithms by describing their efficiency as input size increases. It’s a key tool for writing scalable, high-performance code.

---

*Expand each section with more details as you learn.*
*Last updated: 2025-10-08*
