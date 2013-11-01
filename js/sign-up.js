//signup.js 
// add your JavaScript code to this file

$(function(){
	//document is now ready for manipulation
	var stateSelect = $('select[name="state"]');
	var idx;
	var state;
	var option;
	for (idx = 0; idx < usStates.length; ++idx) {
		state = usStates[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
		
	}

	$('.signup-form').submit(function(){
		var signupForm = $(this);
	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    var addr1Value = addr1Input.val();
	    if(addr1Value && addr1Value.trim().length > 0) {
	    	var zipInput = signupForm.find('input[name="zip"]');
	    	var zipValue = zipInput.val();
	    	if(zipValue && zipValue.trim().length > 0) {
	    		return true;
	    	}else {
	    		alert("Zipcode required for submit");
	    		return false;
	    	}
	    }

	    var reqField;
	    var reqValue;       
	    reqField = signupForm.find('input[name="first-name"]');
	    reqValue = reqField.val().trim();
	    if(0 === reqValue.length) {
	        alert('You must enter a first name!');
	        return false;
	    }
	    var reqField;
	    var reqValue;       
	    reqField = signupForm.find('input[name="last-name"]');
	    reqValue = reqField.val().trim();
	    if(0 === reqValue.length) {
	        alert('You must enter a last name!');
	        return false;
	    }
	    var reqField;
	    var reqValue;       
	    reqField = signupForm.find('input[name="email"]');
	    reqValue = reqField.val().trim();
	    if(0 === reqValue.length) {
	        alert('You must enter a email!');
	        return false;
	    }



	});

	$('.cancel-signup').click(function(){
		window.location = 'http://www.google.com';
	});

});