delete from Person
where id not in (SELECT *from(select min(id)
from Person
group by email) as s);