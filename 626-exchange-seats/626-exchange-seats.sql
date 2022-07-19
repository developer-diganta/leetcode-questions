select
    id,
    case
        when id % 2 = 1 then ifnull(lead(student, 1) over(order by id), student)
        else lag(student, 1) over(order by id)
    end as student
from Seat;