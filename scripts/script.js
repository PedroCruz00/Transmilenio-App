document.getElementById('busForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const plate = document.getElementById('plate').value.toUpperCase();
    const arrivalTime = document.getElementById('arrivalTime').value;

    const now = new Date();
    const year = String(now.getFullYear()).slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const fullDate = `${year}/${month}/${day}`;

    const fullArrivalTime = `${fullDate}/${arrivalTime}`;

    const response = await fetch('/register-bus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plate, arrivalTime: fullArrivalTime }),
    });

    const result = await response.text();
    alert(result);
});

document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const plate = document.getElementById('searchPlate').value.toUpperCase();

    const response = await fetch('/search-bus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plate }),
    });

    if (response.ok) {
        const bus = await response.json();
        document.getElementById('searchResult').innerText =
            `Bus Plate: ${bus.plate}, Arrival Time: ${bus.arrivalTime}, Edits: ${bus.edits}`;
    } else {
        alert(await response.text());
    }
});

document.getElementById('deleteForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const plate = document.getElementById('deletePlate').value.toUpperCase();

    const response = await fetch('/delete-bus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plate }),
    });

    const result = await response.text();
    alert(result);
});
