# Write your MySQL query statement below
SELECT name as Customers from Customers where id NOT IN (SELECT customerId from Orders);