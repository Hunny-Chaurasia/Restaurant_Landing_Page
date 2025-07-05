
function updateSubCategory() {
    const mainCategory = document.getElementById('main-category').value;
    const subCategory = document.getElementById('sub-category');

    // Clear previous options
    subCategory.innerHTML = '';

    // Define sub-categories based on the main category
    let options = [];
    if (mainCategory === 'fruits') {
        options = ['Apple', 'Banana', 'Orange'];
    } else if (mainCategory === 'vegetables') {
        options = ['Carrot', 'Broccoli', 'Spinach'];
    }

    // Populate the sub-category dropdown
    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.toLowerCase();
        newOption.textContent = option;
        subCategory.appendChild(newOption);
    });
}
