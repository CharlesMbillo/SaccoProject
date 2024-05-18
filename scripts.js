$(document).ready(function() {
  // Handle form submission
  $('#transaction-form').submit(function(event) {
    event.preventDefault();

    // Get form data
    var formData = {
      memberId: $('#member-id').val(),
      transactionType: $('#transaction-type').val(),
      faceAmount: $('#face-amount').val(),
      transactionDate: $('#transaction-date').val()
    };

    // Generate report
    var reportHtml = '';
    reportHtml += '<h2>Transaction Report</h2>';
    reportHtml += '<p>Member ID: ' + formData.memberId + '</p>';
    reportHtml += '<p>Transaction Type: ' + formData.transactionType + '</p>';
    reportHtml += '<p>Face Amount: ' + formData.faceAmount + '</p>';
    reportHtml += '<p>Transaction Date: ' + formData.transactionDate + '</p>';

    // Display report
   $('#report-container').html(reportHtml);
  });
});
