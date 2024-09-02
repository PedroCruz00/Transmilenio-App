document.getElementById('busForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const plate = document.getElementById('plate').value;
    const arrivalTime = document.getElementById('arrivalTime').value;

    const response = await fetch('/register-bus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plate, arrivalTime }),
    });

    const result = await response.text();
    alert(result);
});

document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const plate = document.getElementById('searchPlate').value;

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

    const plate = document.getElementById('deletePlate').value;

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