// schedule-maker
class Horario {

    #monday = [];
    #tuesday = [];
    #wednesday = [];
    #thursday = [];
    #friday = [];

    constructor (id) {
        this.container = document.getElementById(id);
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.null = null;
        this.#init();
    }

    #init() {
        this.#createCSS();

        // Create and append top div with week days names
        var weekDays = `<div id="weekDays">
            <div class="weekDay">Lunes</div>
            <div class="weekDay">Martes</div>
            <div class="weekDay">Miercoles</div>
            <div class="weekDay">Jueves</div>
            <div class="weekDay">Viernes</div>
        </div>`;
        this.container.innerHTML += weekDays;

        // Create days div
        this.container.innerHTML += "<div id='days'></div>";

        // Create and append days divs
        var ids = ["mon", "tue", "wed", "thu", "fri"];
        var daysDiv = document.getElementById("days")
        for (const id of ids) daysDiv.innerHTML += `<div id="${id}" class="day"><div>`;
    }

    // Create css classes
    #createCSS() {
        var daysCSS = document.createElement("style");
        daysCSS.type = "text/css";
        daysCSS.innerHTML = `#days {
            height: 100%;
            width: 100%;
            display: flex;
        }`;

        var dayCSS = document.createElement("style");
        dayCSS.type = "text/css";
        dayCSS.innerHTML = `.day {
            height: 100%;
            width:${this.width / 5}px;
        }`;
        
        var asignCSS = document.createElement("style");
        asignCSS.type = "text/css";
        asignCSS.innerHTML = `.asign {
            height: ${this.height / 6 - 120}px;
            width: 100%;
            border: 1px #f00 dotted;
        }`;
        
        var weekDaysCSS = document.createElement("style");
        weekDaysCSS.type = "text/css";
        weekDaysCSS.innerHTML = `#weekDays {display: flex;}`;
        
        var weekDayCSS = document.createElement("style");
        weekDayCSS.type = "text/css";
        weekDayCSS.innerHTML = `.weekDay {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            width: ${this.width / 5}px;
            font-size: 1.5em;
            border: 1px green solid;
        }`;

        var asignaturaCSS = document.createElement("style");
        asignaturaCSS.type = "text/css";
        asignaturaCSS.innerHTML = `.asignatura {
            display: flex;
            justify-content: center;
            align-items: center;
            height: ${(this.height - 120) / 6}px;
            width: 100%;
            font-size: 1.5em;
            border: 1px blue solid;
        }`;

        var patioCSS = document.createElement("style");
        patioCSS.type = "text/css";
        patioCSS.innerHTML = `.patio {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            width: 100%;
            font-size: 1.5em;
        }`;

        var freeCSS = document.createElement("style");
        freeCSS.type = "text/css";
        freeCSS.innerHTML = `.free {
            border: none;
        }`;
        
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(daysCSS);
        head.appendChild(dayCSS);
        head.appendChild(asignCSS);
        head.appendChild(weekDaysCSS);
        head.appendChild(weekDayCSS);
        head.appendChild(asignaturaCSS);
        head.appendChild(patioCSS);
        head.appendChild(freeCSS);
    }

    setMonday(clases) {
        return this.#monday = clases;
    }

    setTuesday(clases) {
        return this.#tuesday = clases;
    }

    setWednesday(clases) {
        return this.#wednesday = clases;
    }

    setThursday(clases) {
        return this.#thursday = clases;
    }

    setFriday(clases) {
        return this.#friday = clases;
    }

    render() {
        var days = [this.#monday, this.#tuesday, this.#wednesday, this.#thursday, this.#friday]
        
        var d = document.getElementById("days").childNodes;
        var patioHtml = "<div class='patio'></div>"
        var html, classe;

        for (const [key, day] of Object.entries(days)) {
            for (const [i, asingatura] of Object.entries(day)) {
                classe = asingatura.codigo == "" ? "asignatura free" : "asignatura";
                html = `<div class="${classe}">${asingatura.codigo}</div>`;
                d[key].innerHTML += html;
                if (i == 2) d[key].innerHTML += patioHtml;
            }
        }
    }
}

class Clase {
    constructor(tutor, codigo, nombre) {
        this.tutor = tutor;
        this.codigo = codigo;
        this.nombre = nombre;
    }

    static free() {
        return {codigo: ""};
    }
}