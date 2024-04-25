let alarmInterval;
let clockInterval;

function setAlarm() {
  const alarmTime = document.getElementById('alarm-time').value;
  const now = new Date();
  const alarm = new Date(now.toDateString() + ' ' + alarmTime);

  const timeUntilAlarm = alarm - now;
  if (timeUntilAlarm > 0) {
    alarmInterval = setTimeout(() => {
      alert('Alarm!');
      showNotification();
    }, timeUntilAlarm);
  } else {
    alert('Please choose a time in the future.');
  }
}

function stopAlarm() {
  clearTimeout(alarmInterval);
}

function toggleSettings() {
  alert('Settings clicked!');
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function showNotification() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification("Alarm!");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification("Alarm!");
      }
    });
  }
}

clockInterval = setInterval(updateClock, 1000);
