# Theory of Data Structures

This document summarizes the main types of data structures, their characteristics, and common uses. It serves as a quick reference for understanding and selecting data structures in software development.

## Table of Contents

- [Introduction](#1-introduction)
- [Types of Data Structures](#2-types-of-data-structures)
  - [Linear Data Structures](#21-linear-data-structures)
    - [Array](#211-array)
    - [Linked List](#212-linked-list)
      - Singly Linked List
      - Doubly Linked List
      - Circular Linked List
    - [Stack](#213-stack)
    - [Queue](#214-queue)
  - [Non-linear Data Structures](#22-non-linear-data-structures)
    - [Tree](#221-tree)
      - Root
      - Parent/Child
      - Leaf
      - Subtree
      - Height
      - Depth
      - Level
      - Degree
      - Edge
    - [Graph](#222-graph)
  - [Associative Data Structures](#23-associative-data-structures)
    - [Map](#231-map)

---

## 1. Introduction

A data structure is a specialized format for organizing, processing, and storing data in a computer so that operations such as retrieval, insertion, deletion, and traversal can be performed efficiently. Choosing the appropriate data structure is crucial for optimizing the performance and scalability of algorithms and applications.

## 2. Types of Data Structures

### 2.1. Linear Data Structures

A linear data structure is a type of data structure where elements are arranged sequentially, and each element has a unique predecessor and successor (except the first and last elements). In linear data structures, data is organized in a single line, making traversal straightforward from one end to the other.

Key characteristics:

- Elements are stored in a contiguous or sequential manner.
- Traversal is typically done in a single direction (left to right or vice versa).
- Examples include arrays, linked lists, stacks, and queues.

Linear data structures are simple to implement and efficient for operations that require accessing elements in order.

#### **2.1.1. Array**

Collection of elements identified by index

```go
// Example: Array in Go
var arr = [5]int{1, 2, 3, 4, 5}
```

#### **2.1.2. Linked List**

Sequence of nodes, each containing data and references. There are several types

1. **Singly Linked List**: Each node points to the next node. Traversal is forward only.

    ```go
    // Example: Singly Linked List Node in Go
    type Node struct {
        data int
        next *Node
    }
    ```

2. **Doubly Linked List**: Each node points to both the next and previous nodes. Traversal is possible in both directions.

    ```go
    // Example: Doubly Linked List Node in Go
    type DNode struct {
        data int
        prev *DNode
        next *DNode
    }
    ```

3. **Circular Linked List**: The last node points back to the first node, forming a circle. Can be singly or doubly linked.

    ```go
    // Example: Circular Singly Linked List Node in Go
    type CNode struct {
        data int
        next *CNode
    }
    // In a circular list, the last node's next points to the head node.
    ```

#### **2.1.3. Stack**

LIFO (Last In, First Out) structure

```go
// Example: Stack using slice in Go
var stack []int
stack = append(stack, 10) // push
top := stack[len(stack)-1] // peek
stack = stack[:len(stack)-1] // pop
```

#### **2.1.4. Queue**

FIFO (First In, First Out) structure

```go
// Example: Queue using slice in Go
var queue []int
queue = append(queue, 10) // enqueue
front := queue[0] // peek
queue = queue[1:] // dequeue
```

### 2.2. Non-linear Data Structures

A non-linear data structure is a type of data structure where elements are not arranged sequentially. Instead, each element can be connected to multiple other elements, forming complex relationships.

Key characteristics:

- Elements are organized in a hierarchical or interconnected manner.
- Traversal can occur in multiple directions, not just linearly.
- Examples include trees and graphs.

Non-linear data structures are useful for representing relationships like hierarchies (tree structures) or networks (graph structures), where simple linear organization is insufficient. They allow for more flexible and powerful ways to store and access data.

Before we dive into trees and graphs, let's clarify two fundamental concepts: **nodes** and **edges**.

```text
- Nodes hold the data.
- Edges define the relationships between nodes.
```

#### **2.2.1. Tree**

Hierarchical structure with nodes connected by edges.

```go
// Example: Binary Tree Node in Go
type TreeNode struct {
    value int
    left  *TreeNode
    right *TreeNode
}
```

Besides the basic structure, trees have several important concepts.

Let's consider the following multi-level tree:

```text
     1
    / \
   2   3
 /   / \
4   5   6
    /
   7
```

Key concepts of trees based on the above example:

1. **Root**: The topmost node in the tree. (Node 1)
    - The starting point of the tree structure.

2. **Parent/Child**: A parent is a node directly above another; a child is directly below. (Node 3 is parent of 5 and 6; Node 5 is parent of 7)
    - Defines hierarchical relationships.

3. **Leaf**: A node with no children. (Nodes 4, 6, 7)
    - Represents endpoints in the tree.

4. **Subtree**: Any node and all its descendants. (Node 3 and its descendants: 5, 6, 7)
    - Useful for recursive operations.

5. **Height**: The number of edges on the longest downward path from the root to a leaf. (Height is 3: 1 → 3 → 5 → 7)
    - Indicates the tree's depth.

6. **Depth**: The number of edges from the root to a given node. (Node 1: depth 0; Node 3: depth 1; Node 5: depth 2; Node 7: depth 3)
    - Shows how far a node is from the root.

7. **Level**: All nodes at the same depth. (Level 1: Node 1; Level 2: Nodes 2, 3; Level 3: Nodes 4, 5, 6; Level 4: Node 7)
    - Groups nodes by their distance from the root.

8. **Degree**: The number of children a node has. (Node 1: degree 2; Node 3: degree 2; Node 5: degree 1; leaves: degree 0)
    - Measures branching at each node.

9. **Edge**: A connection between parent and child nodes. (E.g., 3–5, 5–7)
    - Forms the structure of the tree.

#### **2.2.2. Graph**

Set of nodes connected by edges, can be directed or undirected.

```go
// Example: Graph using adjacency list in Go
type Graph struct {
    adj map[int][]int
}
```

### 2.3. Associative Data Structures

Associative data structures store data as key-value pairs, allowing efficient access, insertion, and deletion by key. They are not organized sequentially or hierarchically, but by association.

Key characteristics:

- Elements are accessed via unique keys, not by position or hierarchy.
- Fast lookup, insertion, and deletion operations (typically O(1) with hashing).
- Examples include maps in Go, dictionaries in Python, and hash tables in many languages.

Associative data structures are ideal for scenarios where you need to quickly find, add, or remove data based on a key.

#### **2.3.1. Map**

Collection of key-value pairs

```go
// Example: Map in Go
var m = map[string]int{"apple": 5, "banana": 3}
m["orange"] = 7 // insert
value := m["apple"] // lookup
delete(m, "banana") // delete
```

---

*Expand each section with more details as you learn.*
*Last updated: 2025-10-07*
