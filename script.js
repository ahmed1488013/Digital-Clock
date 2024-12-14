// Function to update the clock every second
function updateClock() {
    const timeDisplay = document.getElementById('time-display');
    const amPmDisplay = document.getElementById('am-pm');
  
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert 24-hour format to 12-hour format
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    
    // Format time as hh:mm:ss
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    
    // Display time
    timeDisplay.textContent = formattedTime;
    amPmDisplay.textContent = amPm;
  }
  
  // Helper function to add a leading zero for single-digit values
  function padZero(value) {
    return value < 10 ? '0' + value : value;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the time immediately
  updateClock();
  