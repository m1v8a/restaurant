const scheds = {
    Monday: "8am - 6pm",
    Tuesday: "8am - 6pm",
    Wednesday: "8am - 6pm",
    Thursday: "8am - 6pm",
    Friday: "8am - 6pm",
    Saturday: "8am - 9pm",
    Sunday: "Closed"
};

export default function schedule() {
    const container = document.createElement("section");
    container.className = "schedules";

    const heading = document.createElement("h2");
    heading.className = "head-text";
    heading.innerHTML = `<span class="hl-text">S</span>chedules`;

    const timeList = document.createElement("ul");
    timeList.className = "time-list";

    for (let key in scheds) {
        const li = document.createElement("li");
        const day = document.createElement("p");
        const time = document.createElement("p");
        day.textContent = key;
        time.textContent = scheds[key];
        li.append(day, time);
        timeList.appendChild(li);
    }


    container.append(heading, timeList);

    return container;
}
