# Operations on Data Structures

This document covers the fundamental operations that can be performed on various data structures. Understanding these operations is essential for designing efficient algorithms and choosing the right data structure for a given problem.

## Table of Contents

- [Insertion](#insertion)
- [Deletion](#deletion)
- [Traversal](#traversal)
- [Searching](#searching)
- [Sorting](#sorting)

---

## Insertion

Insertion is the process of adding a new element to a data structure. The method and efficiency of insertion depend on the type of data structure:

- **Array:** Insert at a specific index (may require shifting elements).
- **Linked List:** Insert at the beginning, end, or any position by updating pointers.
- **Stack:** Push an element onto the top.
- **Queue:** Enqueue an element at the rear.
- **Tree:** Insert a node at the correct position (e.g., in a BST).
- **Graph:** Add a new vertex or edge.
- **Map:** Add a new key-value pair.

## Deletion

Deletion removes an element from a data structure. The process varies by structure:

- **Array:** Remove at a specific index (may require shifting elements).
- **Linked List:** Remove a node and update pointers.
- **Stack:** Pop the top element.
- **Queue:** Dequeue the front element.
- **Tree:** Remove a node and restructure if necessary.
- **Graph:** Remove a vertex or edge.
- **Map:** Remove a key-value pair by key.

## Traversal

Traversal means visiting each element in a data structure, often to process or display data:

- **Array/Linked List:** Iterate from start to end.
- **Stack/Queue:** Process elements in LIFO/FIFO order.
- **Tree:** Use preorder, inorder, postorder, or level-order traversal.
- **Graph:** Use depth-first search (DFS) or breadth-first search (BFS).

## Searching

Searching finds a specific element in a data structure:

- **Array:** Linear or binary search.
- **Linked List:** Linear search.
- **Stack/Queue:** Linear search (rarely used).
- **Tree:** Binary search (in BST), or traversal.
- **Graph:** Search for a vertex or path using DFS/BFS.
- **Map:** Direct lookup by key.

## Sorting

Sorting arranges elements in a specific order:

- **Array/Linked List:** Use algorithms like bubble sort, merge sort, quick sort, etc.
- **Tree:** Inorder traversal of BST yields sorted order.
- **Other structures:** May require conversion to a list/array for sorting.

---

*Expand each operation with examples and details as you learn.*
*Last updated: 2025-10-07*
