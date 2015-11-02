//hide all the stages to start
$('.stage').each(function() {
  $(this).hide();
});
$('#back').hide();
$('#execute').hide();
$('#start').show();
//define the vars to be used each stage

var simpleEth = new Object();
var uni = new Array();
var enni = new Array();
simpleEth.uni = new Array();
simpleEth.enni = new Array();
simpleEth.uni[0] = new Object();
simpleEth.uni[1] = new Object();

simpleEth.enni[0] = new Object();

var services = {
  "serviceID": [{
    "id": 1,
    "value": "Carrier Ethernet",
    "text": "Carrier Ethernet",
  }, {
    "id": 2,
    "value": "Enterprise",
    "text": "Enterprise",
  }, {
    "id": 3,
    "value": "unmonitored Ethernet",
    "text": "unmonitored Ethernet",
  }]
};

var customers = {
  "custID": [{
    "id": 1,
    "value": "ATT",
    "text": "AT&T",
  }, {
    "id": 2,
    "value": "Vodafone",
    "text": "Vodafone",
  }, {
    "id": 3,
    "value": "MEF",
    "text": "MEF Forum",
  }]
};
var bw = {
  "bwvals": [{
    "value": 1,
    "text": "1M",
  }, {
    "value": 2,
    "text": "2M",
  }, {
    "value": 3,
    "text": "3M",
  }, {
    "value": 4,
    "text": "4M",
  }, {
    "value": 5,
    "text": "5M",
  }, {
    "value": 6,
    "text": "6M",
  }, {
    "value": 7,
    "text": "7M",
  }, {
    "value": 8,
    "text": "8M",
  }, {
    "value": 9,
    "text": "9M",
  }, {
    "value": 10,
    "text": "10M",
  }, {
    "value": 20,
    "text": "20M",
  }, {
    "value": 30,
    "text": "30M",
  }, {
    "value": 40,
    "text": "40M",
  }, {
    "value": 50,
    "text": "50M",
  }, {
    "value": 60,
    "text": "60M",
  }, {
    "value": 70,
    "text": "70M",
  }]
};
var nodes = [
  ['10.10.10.11', 'CHLG0103', 'CN 3916', '1', 'datacenter_p1'],
  ['10.10.10.12', 'NTHS7362', 'CN 3930', '1', 'Site 1_p1'],
  ['10.10.10.13', 'DNVR9372', 'CN 3916', '1', 'Site 2_p1'],
  ['10.10.10.11', 'CHLG0103', 'CN 3930', '2', 'datacenter_p2'],
  ['10.10.10.15', 'NTHS0904', 'CN 3916', '1', 'Site 3'],
  ['10.10.10.13', 'NTHS9372', 'CN 3916', '3', 'Site 2_p2'],
  ['10.10.10.17', 'ABCD1234', 'CN 3930', '1', 'Site 4']
];
//header row for table
$('#siteList').dataTable({
  "bLengthChange": false,
  "paging": false,
  "data": nodes,
  "columns": [{
    "title": "IP"
  }, {
    "title": "Sysname"
  }, {
    "title": "Device Type"
  }, {
    "title": "Port #",
    "class": "center"
  }, {
    "title": "Site Name",
    "class": "center"
  }]
});
var siteListTable = $('#siteList').DataTable();

$(services.serviceID).each(function(idx, o) {
  custOption = "<option value=\"" + o.value + "\">" + o.text + "</option>";
  $('#services-datalist').append(custOption);
});

$(customers.custID).each(function(idx, o) {
  custOption = "<option value=\"" + o.value + "\">" + o.text + "</option>";
  $('#customer-datalist').append(custOption);
});

$(bw.bwvals).each(function(idx, o) {
  bwOption = "<option value=\"" + o.value + "\">" + o.text + "</option>";
  $('#bw-input').append(bwOption);
});
$('#back').click(function() {
  $('.stage').each(function() {
    if ($(this).css('display') == 'block') {
      //alert($(this).attr('id') + ' is visible');
      $(this).prev('.stage').slideDown();
      $(this).slideUp();
      if ($(this).prev().attr('id') == 'start') {
        $('#back').hide();
      }
      if ($(this).attr('id') == 'final') {
        $('#next').show();
        $('#execute').hide();
      }
      return false;
    }
  });
});
$('#next').click(function() {
  $('#back').show();
  $('.stage').each(function() {
    if ($(this).css('display') == 'block') {
      //alert($(this).attr('id') + ' is visible');
      if ($(this).next().attr('id') == 'final') {
        $('#execute').show();
        $('#next').hide();
      }
      $(this).next('.stage').slideDown();
      $(this).slideUp();
      return false;
    }
  });
});

$('#evp').click(function() {
  simpleEth.serviceType = "EVP";
  $("#next").click();
});

$('#ep').click(function() {
  simpleEth.serviceType = "EP";
  $("#next").click();
});

$('#execute').click(function() {
  simpleEth.customer = $('#customer-input').val();
  simpleEth.serviceProfile = $('#serviceProfile-input').val();
  simpleEth.id = $('#serviceID').val();
  simpleEth.bwAmount = $('#bw-input').val();

  var SEobj = JSON.stringify(simpleEth, null, '    ');

  var html = "<div><h3>Simple Ethernet Object Contents in JSON Format</h3></div><pre>" + SEobj + "</pre>";
  $("#dialog-modal-content").html(html);
});

$('input[id=serviceProfile-input]').change(function() {
  var service = $('#serviceProfile-input').val();

  if (service == 'Carrier Ethernet') {
    $('#service-enterprise').hide();
    $('#service-carrier-ethernet').show();
    $('#service-unmanaged-ethernet').hide();
  }
  if (service == 'Enterprise') {
    $('#service-enterprise').show();
    $('#service-carrier-ethernet').hide();
    $('#service-unmanaged-ethernet').hide();
  }
  if (service == 'unmonitored Ethernet') {
    $('#service-enterprise').hide();
    $('#service-carrier-ethernet').hide();
    $('#service-unmanaged-ethernet').show();
  }
});

$('#elinebutton').click(function() {
  $('#eLANsites').hide();
  $('#eAccesssites').hide();
  $('#ePointsites').hide();
  $('#eLinesites').show();
  $("#next").click();

});
$('#elanbutton').click(function() {
  $('#eLANsites').show();
  $('#eAccesssites').hide();
  $('#ePointsites').hide();
  $('#eLinesites').hide();
  $("#next").click();
});
$('#eaccessbutton').click(function() {
  $('#eLANsites').hide();
  $('#eAccesssites').show();
  $('#ePointsites').hide();
  $('#eLinesites').hide();
  $("#next").click();

});
$('#voicebutton').click(function() {
  $('#eLANsites').hide();
  $('#eAccesssites').hide();
  $('#ePointsites').show();
  $('#eLinesites').hide();
  $("#next").click();
});
$('#internetbutton').click(function() {
  $('#eLANsites').hide();
  $('#eAccesssites').hide();
  $('#ePointsites').show();
  $('#eLinesites').hide();
  $("#next").click();
});
//

$('#elinesitestable').dataTable({
  "bLengthChange": false,
  "paging": false,
  "bFilter": false,
  "ordering": false,
  "data": [
    ['A Node', '', '<button class="addSiteA" type="button">Add</button>'],
    ['Z Node', '', '<button class="addSiteZ" type="button">Add</button>']
  ],
  "columns": [{
    "title": "Site Type"
  }, {
    "title": "Site Name"
  }, {
    "title": "Action"
  }]
});

$('#eaccesssitestable').dataTable({
  "bLengthChange": false,
  "paging": false,
  "bFilter": false,
  "ordering": false,
  "data": [
    ['UNI Node', '', '<button class="addSiteeA" type="button">Add</button>'],
    ['eNNI Node', '', '<button class="addSiteeE" type="button">Add</button>']
  ],
  "columns": [{
    "title": "Site Type"
  }, {
    "title": "Site Name"
  }, {
    "title": "Action"
  }]
});

var eAccesssiteSelectTable = $('#eaccesssitestable').DataTable();
var eLinesiteSelectTable = $('#elinesitestable').DataTable();

// Add sites for eLINE service
$(".addSiteA").click(function() {
  $(this).html('Added');
  $(this).attr("disabled", true);
  var pasterow = $(this).closest('tr').index();
  var copyrow = siteListTable.row('.selected').index();
  var id = siteListTable.cell(copyrow, 0).data();
  eLinesiteSelectTable.cell(pasterow, 1).data(siteListTable.cell(copyrow, 4).data()).draw();
  siteListTable.row('.selected').remove().draw(false);
  // simpleEth.uni[0] = "test";
  simpleEth.uni[0].id = id
});

$(".addSiteZ").click(function() {
  $(this).html('Added');
  $(this).attr("disabled", true);
  var pasterow = $(this).closest('tr').index();
  var copyrow = siteListTable.row('.selected').index();
  var id = siteListTable.cell(copyrow, 0).data();
  eLinesiteSelectTable.cell(pasterow, 1).data(siteListTable.cell(copyrow, 4).data()).draw();
  siteListTable.row('.selected').remove().draw(false);
  simpleEth.uni[1].id = id
});

//Add sites for eAccess service
$(".addSiteeA").click(function() {
  $(this).html('Added');
  $(this).attr("disabled", true);
  var pasterow = $(this).closest('tr').index();
  var copyrow = siteListTable.row('.selected').index();
  var id = siteListTable.cell(copyrow, 0).data();
  eAccesssiteSelectTable.cell(pasterow, 1).data(siteListTable.cell(copyrow, 4).data()).draw();
  siteListTable.row('.selected').remove().draw(false);
  simpleEth.uni[0].id = id;
});

$(".addSiteeE").click(function() {
  $(this).html('Added');
  $(this).attr("disabled", true);
  var pasterow = $(this).closest('tr').index();
  var copyrow = siteListTable.row('.selected').index();
  var id = siteListTable.cell(copyrow, 0).data();
  eAccesssiteSelectTable.cell(pasterow, 1).data(siteListTable.cell(copyrow, 4).data()).draw();
  siteListTable.row('.selected').remove().draw(false);
  simpleEth.enni[0].id = id;
});

$('#siteList tbody').on('click', 'tr', function() {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    siteListTable.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
