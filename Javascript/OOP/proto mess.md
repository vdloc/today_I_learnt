

Nói chung thì bất kỳ Object nào trong JS đều có một pointer `__proto__` để trở đến thằng mà nó thừa kế

Bình thường thì một object có `__proto__` trỏ đến Object prototype object 

Còn với một object được tạo ra bởi một constructor function, `__proto__` sẽ trỏ đến Prototype object của Function đó, thường thì object này chỉ có 2 thông tin cơ bản là constructor tương ứng là gì và `__proto__` của object này (point đến Object prototype)