# Schedule-maker library
#### Example code

```
var M01 = new Clase("Professor1", "M01", "Class 1");
var M02 = new Clase("Professor2", "M02", "Class 2");
var M03 = new Clase("Professor3", "M03", "Class 3");
var M04 = new Clase("Professor4", "M04", "Class 4");
var M05 = new Clase("Professor3", "M05", "Class 5");
var M06 = new Clase("Professor5", "M06", "Class 6");

var H = new Horario("horario");
H.setMonday([M01, M01, M02, M02, M03, Clase.free()]);
H.setTuesday([M01, M01, M02, M02, M03, Clase.free()]);
H.setWednesday([M01, M01, M02, M02, M03, Clase.free()]);
H.setThursday([M01, M01, M02, M02, M03, Clase.free()]);
H.setFriday([M01, M01, M02, M02, M03, Clase.free()]);

H.render();
```