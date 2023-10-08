// slider

// Get the checkbox element with id "slider" 
const sliderCheckBox = document.getElementById('slider');

// Add an event listener to the checkbox
sliderCheckBox.addEventListener('change', (event) => {
    // Get the checkbox value
    const isChecked = event.target.checked;

    console.log(isChecked);
});