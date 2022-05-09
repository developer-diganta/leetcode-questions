# Write your MySQL query statement below
SELECT a.id from Weather as a, Weather as b where a.temperature>b.temperature and TO_DAYS(a.recordDate)-TO_DAYS(b.recordDate)=1;