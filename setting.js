function handleTicket(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let newTicket = ticketCount;
    if (isIncrease == true) {
        newTicket = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        newTicket = ticketCount - 1;
    }
    ticketInput.value = newTicket;
    const fTicketInput = document.getElementById('f-ticket-count').value;
    const eTicketInput = document.getElementById('e-ticket-count').value;
    const total = fTicketInput * 150 + eTicketInput * 100;
    document.getElementById('ticket-cost').innerText = total;

    const tax = Math.round(total * 0.1);
    document.getElementById('tax').innerText = tax;

    const totalCost = total + tax;
    document.getElementById('total').innerText = totalCost;
};

function gettingValue(firstValue, secondValue) {
    const getValue = document.getElementById(firstValue).value
    document.getElementById(secondValue).innerText = getValue;
}

document.getElementById('submit-btn').addEventListener('click', function () {
    document.getElementById('booking').style.display = 'none';
    document.getElementById('booked').style.display = 'block';

    gettingValue('flying-to-text', 'flying-to');
    gettingValue('flying-from-text', 'flying-from');
    gettingValue('departure-date', 'departure');
    gettingValue('return-date', 'return');

    const fTicket = document.getElementById('f-ticket-count').value
    document.getElementById('f-ticket-qty').innerText = fTicket;

    const fTicketCost = fTicket * 150;
    document.getElementById('f-ticket-cost').innerText = fTicketCost;

    const eTicket = document.getElementById('e-ticket-count').value
    document.getElementById('e-ticket-qty').innerText = eTicket;

    const eTicketCost = eTicket * 100;
    document.getElementById('e-ticket-cost').innerText = eTicketCost;

    const total = fTicket * 150 + eTicket * 100;
    document.getElementById('total-price').innerText = total;

    const tax = Math.round(total * 0.1);
    document.getElementById('vat').innerText = tax;

    const totalCost = total + tax;
    document.getElementById('grand-total').innerText = totalCost;
});