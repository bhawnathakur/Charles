// JavaScript Document
var count;
function doCount() {
	
  count = setInterval(cal_savings, 1000);
};
doCount();

function pauseCounting() {
  clearInterval(count);
  chart();
}
var p=[];

function continueCounting() {

  doCount();
}
k50=0;
function cal_savings()
{//variables

purchaseprice =parseFloat($('#purchaseprice').autoNumeric('get'));
ltvpercent1 =parseFloat($('#ltvpercent1').autoNumeric('get'));
downpayment =parseFloat($('#downpayment').autoNumeric('get'));
//ltvpercent2 =parseFloat($('#ltvpercent2').autoNumeric('get'));
rehabcost =parseFloat($('#rehabcost').autoNumeric('get'));
closingcost =parseFloat($('#closingcost').autoNumeric('get'));
wholesale =parseFloat($('#wholesale').autoNumeric('get'));
othercosts =parseFloat($('#othercosts').autoNumeric('get'));
loan=(purchaseprice*ltvpercent1/100);
cashinvested=downpayment+rehabcost+closingcost+wholesale+othercosts;
totalprice=loan+cashinvested;
$('#loan').html("$" +loan);
$('#cashinvested').html("$" +cashinvested);
$('#totalprice').html("$" +totalprice);
numunits =parseFloat($('#numunits').autoNumeric('get'));
$('#priceperunit').html("$" +totalprice/numunits);
rentablearea =parseFloat($('#rentablearea').autoNumeric('get'));
$('#persqfeet').html("$" +(totalprice/rentablearea).toFixed(0));
periodassumed =parseFloat($('#periodassumed').autoNumeric('get'));
e33 =parseFloat($('#e33').autoNumeric('get'));
e34 =parseFloat($('#e34').autoNumeric('get'));
e35 =parseFloat($('#e35').autoNumeric('get'));
f33 =parseFloat($('#f33').autoNumeric('get'));
f34 =parseFloat($('#f34').autoNumeric('get'));
f35 =parseFloat($('#f35').autoNumeric('get'));


g33=e33*f33;
g34=e34*f34;
g35=e35*f35/100;
g36=g33+g34-g35;
$('#g33').html(g33);
$('#g34').html(g34);
$('#g35').html(g35);
$('#g36').html(g36);
h33=(g33*100/g36).toFixed(0);
h34=(g34*100/g36).toFixed(0);
h35=(g35*100/g36).toFixed(0);
$('#h33').html(h33 + " %");
$('#h34').html(h34 + " %");
$('#h35').html("-" +h35 + " %");

	k33=parseFloat($('#k33').autoNumeric('get'));
	k34=parseFloat($('#k34').autoNumeric('get'));
	k35=parseFloat($('#k35').autoNumeric('get'));
	k36=parseFloat($('#k36').autoNumeric('get'));
	k37=parseFloat($('#k37').autoNumeric('get'));
	k38=parseFloat($('#k38').autoNumeric('get'));
	k39=parseFloat($('#k39').autoNumeric('get'));
	k40=parseFloat($('#k40').autoNumeric('get'));
	k41=parseFloat($('#k41').autoNumeric('get'));
	k42=parseFloat($('#k42').autoNumeric('get'));
	k43=parseFloat($('#k43').autoNumeric('get'));
	k44=parseFloat($('#k44').autoNumeric('get'));
	k45=parseFloat($('#k45').autoNumeric('get'));
	k46=parseFloat($('#k46').autoNumeric('get'));
	k47=parseFloat($('#k47').autoNumeric('get'));
	k48=parseFloat($('#k48').autoNumeric('get'));
	k49=parseFloat($('#k49').autoNumeric('get'));
e40=parseFloat($('#e40').autoNumeric('get'));
f40=parseFloat($('#f40').autoNumeric('get'));
f41=parseFloat($('#f41').autoNumeric('get'));
f43=parseFloat($('#f43').autoNumeric('get'));
f44=parseFloat($('#f44').autoNumeric('get'));
f45=parseFloat($('#f45').autoNumeric('get'));
f46=parseFloat($('#f46').autoNumeric('get'));
actualpropertyvalue=parseFloat($('#actualpropertyvalue').autoNumeric('get'));
e44=parseFloat($('#e44').autoNumeric('get'));
e43=actualpropertyvalue;
e45=g36;
e46=g36;
g40=e40*f40;
$('#g40').html(g40 );
$('#e43').html(e43 );
$('#e45').html(g36 );
$('#e46').html(g36 );
for(i=33;i<50;i++)
{
	k50 +=this["k"+i];
	
}
e41=k50;
$('#e41').html(e41 );
g41=e41*f41;
g43=(e43*f43/100).toFixed(0);
g44=e44*f44;
g45=(e45*f45/100).toFixed(0);
g46=(e46*f46/100).toFixed(0);;
$('#g41').html(g41 );	
$('#g43').html(g43 );
$('#g44').html(g44 );
$('#g45').html(g45);
$('#g46').html(g46);

g48=parseFloat(g40)+parseFloat(g41)+parseFloat(g43)+parseFloat(g44)+parseFloat(g45)+parseFloat(g46);

$('#g48').html(g48);









pauseCounting();
}