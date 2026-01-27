// Library Management System - Client Side Scripts

// Set today's date as default in date inputs
document.addEventListener('DOMContentLoaded', function() {
    // Set default date to today for assignment and return dates
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length > 0) {
        const today = new Date().toISOString().split('T')[0];
        dateInputs.forEach(input => {
            if (!input.value) {
                input.value = today;
            }
        });
    }

    // Close alert messages after 5 seconds
    const alerts = document.querySelectorAll('.alert-dismissible');
    alerts.forEach(alert => {
        setTimeout(() => {
            const closeBtn = alert.querySelector('.btn-close');
            if (closeBtn) {
                closeBtn.click();
            }
        }, 5000);
    });
});

// Confirm before deletion
function confirmDelete(message = 'Are you sure you want to delete this?') {
    return confirm(message);
}

// Format date to readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Validate form inputs
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

// Clear form errors on input
document.addEventListener('input', function(e) {
    if (e.target.style.borderColor === 'rgb(220, 53, 69)') {
        e.target.style.borderColor = '';
    }
});

// Print functionality
function printPage() {
    window.print();
}

// Export table to CSV
function exportTableToCSV(filename = 'export.csv') {
    const table = document.querySelector('table');
    if (!table) {
        alert('No table found to export');
        return;
    }

    let csv = [];
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
        let csvRow = [];
        const cols = row.querySelectorAll('td, th');

        cols.forEach(col => {
            csvRow.push(col.innerText);
        });

        csv.push(csvRow.join(','));
    });

    // Create blob and download
    const csvContent = 'data:text/csv;charset=utf-8,' + csv.join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', filename);
    link.click();
}

// Show loading spinner
function showLoadingSpinner() {
    const spinner = document.createElement('div');
    spinner.id = 'loading-spinner';
    spinner.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; 
                    background: rgba(0,0,0,0.5); display: flex; 
                    align-items: center; justify-content: center; z-index: 9999;">
            <div style="color: white; font-size: 18px;">
                <i class="fas fa-spinner fa-spin"></i> Loading...
            </div>
        </div>
    `;
    document.body.appendChild(spinner);
}

// Hide loading spinner
function hideLoadingSpinner() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.remove();
    }
}

// Add form submission handler
document.addEventListener('submit', function(e) {
    const form = e.target;
    
    // Show spinner on form submission
    showLoadingSpinner();
    
    // Disable submit button to prevent double submission
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
    }
});

// Utility: Check if value exists in array
function arrayContains(array, value) {
    return array.indexOf(value) > -1;
}

// Utility: Get query parameter from URL
function getQueryParameter(name) {
    const url = new URL(window.location);
    return url.searchParams.get(name);
}

// Table sorting
function sortTable(columnIndex) {
    const table = document.querySelector('table');
    if (!table) return;

    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].innerText;
        const bValue = b.cells[columnIndex].innerText;

        // Try numeric comparison first
        const aNum = parseFloat(aValue);
        const bNum = parseFloat(bValue);

        if (!isNaN(aNum) && !isNaN(bNum)) {
            return aNum - bNum;
        }

        // Fall back to string comparison
        return aValue.localeCompare(bValue);
    });

    rows.forEach(row => tbody.appendChild(row));
}

console.log('Library Management System - Ready');
