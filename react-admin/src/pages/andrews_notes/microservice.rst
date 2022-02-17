Microservice Architecture
=========================

Wut do
######


Theory & Concepts
#################

Single responsibility
---------------------
* Like classes, 1 purpose per service.
* Each microservice has it's own DB.

Async Behavior
--------------
* Delegate events to service handler

Fail fast
---------
* Don't allows failures to cascade. "Circuit breaker" pattern.
