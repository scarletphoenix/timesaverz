
var jsonData;
var multiplicationData ={};
var paymentCost={};
var cart={};
$(document).ready(function () {
    $.ajax({ 
        type: 'GET', 
        url: 'http://52.69.49.40/assignment/getServiceData.php', 
        data: { get_param: 'value' }, 
        success: function (data) { 
            jsonData = data;
            $('#serviceDetails').append(jsonData.subcategoryDescription);
            $('#MyService').show();


            $.each(jsonData.variableData,function(i){
            	$('#serviceType').append('<option>'+jsonData.variableData[i].variableName+'</option>');
               paymentCost[jsonData.variableData[i].variableName]=jsonData.variableData[i].variablePayNowCost;
            });

             $.each(jsonData.frequencyData,function(i){
                $('#frequency').append('<option>'+jsonData.frequencyData[i].caption+'</option>');
                multiplicationData[jsonData.frequencyData[i].caption]=jsonData.frequencyData[i].multiplyingFactor;
            });

             changePayment();
             changeFactor();
             submit();
             $('.carousel').carousel()

        }
    });
});

function addAddress(){
    $('#contactInfo').removeClass('panel-info');
    $('#contactInfo').addClass('panel-success');
    $('#newAddress').prop('hidden',false);
    $('#finalAddressDetails').append(
        '<label class="form-element">Address:'+$('#address').val()+'</label><br>'+
        '<label class="form-element">Contact :'+ $('#contact').val()+'</label><br>');

}
function submit(){
    cart={};
    cart["frequency"]= $('#frequency').val();
    cart["serviceType"]= $('#serviceType').val();
    cart["serviceTotal"]=$('#totalAmount').val();
    cart["date"]=$('#datepicker').val();
    cart["timeSlot"]=$('#timeSlot').val();
    localStorage.setItem('cartDetails',JSON.stringify(cart));
    
};

function changePayment(){
    $('#paymentAmount').val(paymentCost[$("#serviceType").val()]);
	$("#totalAmount").val(($('#paymentAmount').val())*($('#multFactor').val()));
	submit();	
}

function changeFactor(){
          $('#multFactor').val(multiplicationData[$("#frequency").val()]);
          $("#totalAmount").val(($('#paymentAmount').val())*($('#multFactor').val()));  
          submit();            
}