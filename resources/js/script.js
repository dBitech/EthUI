//hide all the stages to start
$('.stage').each(function () {
    $(this).hide();
});
$('#back').hide();
$('#execute').hide();
$('#start').show();
//define the vars to be used each stage
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
            "value": "HITECH",
            "text": "Hi-tech",
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
$(customers.custID).each(function (idx, o) {
    custOption = "<option value=\"" + o.value + "\">" + o.text + "</option>";
    $('#customer-datalist').append(custOption);
});
$(bw.bwvals).each(function (idx, o) {
    bwOption = "<option value=\"" + o.value + "\">" + o.text + "</option>";
    $('#bw-datalist').append(bwOption);
});
$('#back').click(function () {
    $('.stage').each(function () {
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
$('#next').click(function () {
    $('#back').show();
    $('.stage').each(function () {
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
$('#execute').click(function () {
    alert('good luck!');
});
$('#elinebutton').click(function () {
    $('#eLANsites').hide();
    $('#eAccesssites').hide();
    $('#ePointsites').hide();
    $('#eLinesites').show();
});
$('#elanbutton').click(function () {
    $('#eLANsites').show();
    $('#eAccesssites').hide();
    $('#ePointsites').hide();
    $('#eLinesites').hide();
});
$('#eaccessbutton').click(function () {
    $('#eLANsites').hide();
    $('#eAccesssites').show();
    $('#ePointsites').hide();
    $('#eLinesites').hide();
});
$('#voicebutton').click(function () {
    $('#eLANsites').hide();
    $('#eAccesssites').hide();
    $('#ePointsites').show();
    $('#eLinesites').hide();
});
$('#internetbutton').click(function () {
    $('#eLANsites').hide();
    $('#eAccesssites').hide();
    $('#ePointsites').show();
    $('#eLinesites').hide();
});
//
$('#elinesitestable').dataTable({
    "bLengthChange": false,
        "paging": false,
        "bFilter": false,
        "data": [
        ['A Node', '', '<button class="addSite" type="button">Add</button>'],
        ['Z Node', '', '<button class="addSite" type="button">Add</button>']
    ],
        "columns": [{
        "title": "Site Type"
    }, {
        "title": "Site Name"
    }, {
        "title": "Action"
    }]
});
var siteSelectTable = $('#elinesitestable').DataTable();
$(".addSite").click(function () {
        $(this).html('Remove');
	var myrow = $(this).closest('tr').index();
    var fromrow = siteListTable.row('.selected').index();
	siteSelectTable.cell( myrow, 1 ).data(siteListTable.cell(fromrow, 4).data()).draw();
    siteListTable.row('.selected').remove().draw(false);
});
$('#siteList tbody').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        siteListTable.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});
