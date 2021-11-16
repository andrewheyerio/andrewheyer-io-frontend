Java
=====

Wut do
######


Theory & Concepts
#################

Memory allocation
-----------------
* As JVM compiles source code objects can be placed in 2 locations.

Stack Allocation
^^^^^^^^^^^^^^^^
* Occurs in a function call stack.
* Only accessible by owner thread.
* Allocate and deallocate faster than heap.

Heap Allocation
^^^^^^^^^^^^^^^
* Memory allocated by proggrammer.
* Objects are created in Heap space and referencing objects are in the stack.
* Accessible by other threads.
* Memory leak can happen.
