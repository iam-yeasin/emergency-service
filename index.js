// console.log("js is connected")

//heart buttons and heart count
const heartButtons = document.querySelectorAll('.heartBtn');
const heartCount = document.getElementById('heartCount');

let hearts = parseInt(heartCount.textContent);

for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener('click', function () {
        hearts++;
        heartCount.textContent = hearts;
    });
}

// Copy buttons and copy count
const copyButtons = document.querySelectorAll('.copyBtn');
const copyCount = document.getElementById('copyCount');

let copied = parseInt(copyCount.textContent);

// Loop buttons
for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function () {

        const card = copyButtons[i].closest('.card');
        const serviceNumber = card.querySelector('h2').textContent;

        if (navigator.clipboard) {
            try {
                navigator.clipboard.writeText(serviceNumber);

                copied++;
                copyCount.textContent = `${copied} Copy`;

                alert("Number copied: " + serviceNumber);
            } catch (err) {
                alert("Failed to copy the number.");
            }
        } else {
            alert("Your browser does not support copying.");
        }
    });
}


// Call buttons and coin count
const callButtons = document.querySelectorAll('.callBtn');
const coinCount = document.getElementById('coinCount');
const callHistory = document.getElementById('callHistoryContainer'); // ✅ FIXED

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function () {
        const card = callButtons[i].closest('.card');

        // ✅ safer selectors
        const serviceName = card.querySelector('.serviceName').textContent;
        const serviceNumber = card.querySelector('.serviceNumber').textContent;

        let coins = parseInt(coinCount.textContent);

        if (coins < 20) {
            alert("❌ Not enough coins to make this call!");
            return;
        }

        // cut coins per call
        coins -= 20;
        coinCount.textContent = coins;

        // alert with service name & service number
        alert("📞 Calling " + serviceName + " " + serviceNumber + "....");

        // Add call history
        const now = new Date();
        const callTime = now.toLocaleTimeString();
        const asideDiv = document.createElement('div');
        asideDiv.classList.add(
            'bg-[#FAFAFA]', 'rounded-lg', 'p-4', 'w-full',
            'flex', 'justify-between', 'items-center', 'my-4'
        );
        asideDiv.innerHTML = `
            <div class="flex flex-col">
                <h5 class="text-xl font-semibold">${serviceName}</h5>
                <p class="text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <div>
                <p>${callTime}</p>
            </div>
        `;
        callHistory.append(asideDiv);
    });
}

// Clear history button
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
clearHistoryBtn.addEventListener('click', function () {
    callHistory.innerHTML = "";
});
