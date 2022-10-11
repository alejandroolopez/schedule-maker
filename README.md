# Schedule-maker library
#### Example code

```
<html>
<head>
    <title>Schedule</title>
</head>
<body>

<div id="horario"></div>

<script>
    let styles = {
        "color":"#fff",
        "font-family":"Arial",
        "cursor":"pointer",
        "font-weight": "500"
    };

    let M01 = new Clase("Professor1", "M01", "Class 1" Object.assing(styles, {"background": "#0ff"}));
    let M02 = new Clase("Professor2", "M02", "Class 2" Object.assing(styles, {"background": "#0f0"}));
    let M03 = new Clase("Professor3", "M03", "Class 3" Object.assing(styles, {"background": "#ff0"}));
    let M04 = new Clase("Professor4", "M04", "Class 4" Object.assing(styles, {"background": "#f00"}));
    let M05 = new Clase("Professor3", "M05", "Class 5" Object.assing(styles, {"background": "#ff0"}));
    let M06 = new Clase("Professor5", "M06", "Class 6" Object.assing(styles, {"background": "#f0f"}));

    let schedule_div = "horario";

    let H = new Horario(schedule_div);
    H.setMonday([M01, M01, M02, M02, M03, Clase.free()]);
    H.setTuesday([M01, M01, M02, M02, M03, Clase.free()]);
    H.setWednesday([M01, M01, M02, M02, M03, Clase.free()]);
    H.setThursday([M01, M01, M02, M02, M03, Clase.free()]);
    H.setFriday([M01, M01, M02, M02, M03, Clase.free()]);

    H.render();
</script>
</body>
</html>
```

# Clase

## Parameters

- **professors**

    Name of the professor/s.
    > required
    - __Type:__ String Array or Strings

- **code**

    Code of the assignature.
    > required
    - __Type:__ String

- **name**

    Name of the assignature.
    > required
    - __Type:__ String

- **css styles**

    Styles of the assignature.
    > optional
    - __Type:__ Object


## Methods

- **free()**

    Replace a Clase with an empty section


# Horario

## Parameters

- id

    The name of the div where its going to insert the schedule.
    > required
    - __Type:__ String