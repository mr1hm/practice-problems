

function populateRecords(array){
  var chargeObject = {
    charge: 0,
    'cash advance': 0
  };
  var tableDiv = $('<div>').addClass('testOutput');
  var transactionsTable = $('<tr>').addClass('testOutput transactionRecord');
  transactionsTable.html('<th class="transactionType">TYPE</th><th class="transactionLocation">SOURCE</th><th class="transactionAmount">AMOUNT</th>');
  tableDiv.append(transactionsTable)
  $('#testArea').append(tableDiv);
  for (var i = 0; i < array.length; i++) {
    var createRow = $('<tr>').addClass('testOutput transactionRecord');
    var recordType = $('<td>').addClass('testOutput transactionType').text(array[i].type);
    var recordSource = $('<td>').addClass('testOutput transactionLocation').text(array[i].source);
    var recordAmount = $('<td>').addClass('testOutput transactionAmount').text(array[i].amount);
    $(tableDiv).append(createRow);
    createRow.append(recordType, recordSource, recordAmount);
    if (array[i].type === 'charge') {
      chargeObject.charge += parseFloat(array[i].amount);
    } else {
      chargeObject['cash advance'] += parseFloat(array[i].amount);
    }
  }
  return chargeObject;
}
