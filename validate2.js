

$(document).ready(function () {

    var cartData = JSON.parse(localStorage.getItem('cartDetails'));
    $('#myCartData').append(
        '<label class="form-element">Service Type: '+cartData.serviceType+'</label><br>'+
        '<label class="form-element">Frequency: '+cartData.frequency+'</label><br>'+
        '<label class="form-element">Date: '+cartData.date+'</label><br>'+
        '<label class="form-element">Time: '+cartData.timeSlot+'</label><br>'+
        '<label class="form-element">Service Total :'+cartData.serviceTotal+'</label>');

      $('#MyService').show();
});

function addAddress(){
    $('#contactInfo').removeClass('panel-info');
    $('#contactInfo').addClass('panel-success');
    $('#newAddress').prop('hidden',false);
    $('#finalAddressDetails').append(
        '<label class="form-element">Address:'+$('#address').val()+'</label><br>'+
        '<label class="form-element">Contact :'+ $('#contact').val()+'</label>');

}