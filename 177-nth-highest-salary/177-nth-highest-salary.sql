CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
declare x int;
set x = N-1;
  RETURN (
      # Write your MySQL query statement below.
      Select(Select distinct salary from Employee 
             Order by salary desc 
            limit x,1) as 'getNthHighestSalary(N)'
  );
END