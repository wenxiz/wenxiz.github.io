// Create a new viewModel
var ViewModel = function() {
	var self = this;
	self.salary = ko.observable('');
	self.other_income = ko.observable('');

	self.rent = ko.observable('');
	self.wge = ko.observable('');
	self.tv_internet = ko.observable('');
	self.repairs = ko.observable('');
	self.phone = ko.observable('');

	self.pbTrans = ko.observable('');
	self.gas_fuel = ko.observable('');
	self.car_payment = ko.observable('');
	self.car_insurance = ko.observable('');

	self.tuition = ko.observable('');
	self.books = ko.observable('');

	self.groceries = ko.observable('');
	self.clothing = ko.observable('');
	self.entertainment = ko.observable('');
	self.medical = ko.observable('');
	self.pets = ko.observable('');
	self.others = ko.observable('');

	self.sum_housing_value = 0;
	self.sum_transport_value = 0;
	self.sum_education_value = 0;
	self.sum_food_personal_value = 0;
	self.total_expenses_value = 0;
	self.sum_income_value = 0;
	self.total_saving_value = 0;

	self.update = function() {
		self.sum_housing();
		self.sum_food_personal();
		self.sum_education();
		self.sum_transport();
		self.sum_income();
	}

	// self.sumAll = function(parameter1, ... parameters) {
	// 	sum = 0;
	// 	for(let i = 0, len=parameters.length; i<len; i++) {
	// 		console.log(parameters.length);
	// 		console.log(parameters[i]);
	// 		sum += Number(parameters[i]);
	// 	}
	// 	console.log(sum);
	// 	return sum;
	// }

	self.display = function(currency) {
		return currency.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	}

	self.sum_income = ko.computed(function(){
		self.sum_income_value = Number(self.salary()) + Number(self.other_income());
		return self.display(self.sum_income_value);
		// return self.display(self.sumAll(self.salary(), self.other_income()));
	}, self);

	self.sum_housing = ko.computed(function(){
		self.sum_housing_value = Number(self.rent()) + Number(self.wge()) + Number(self.tv_internet()) + Number(self.repairs()) 
		+ Number(self.phone());
		// return self.sum_housing_value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
		return self.display(self.sum_housing_value);
	}, self);

	self.sum_transport = ko.computed(function(){
		self.sum_transport_value = Number(self.pbTrans()) + Number(self.gas_fuel()) + Number(self.car_payment()) 
		+ Number(self.car_insurance());
		return self.display(self.sum_transport_value);
	}, self);

	self.sum_education = ko.computed(function(){
		self.sum_education_value = Number(self.tuition()) + Number(self.books());
		return self.display(self.sum_education_value);
	}, self);

	self.sum_food_personal = ko.computed(function(){
		self.sum_food_personal_value = Number(self.groceries()) + Number(self.clothing()) + Number(self.entertainment()) 
		+ Number(self.medical()) + Number(self.pets()) + Number(self.others());
		return self.display(self.sum_food_personal_value);
	}, self);

	self.total_expenses = ko.computed(function(){
		self.update();
		self.total_expenses_value = self.sum_housing_value + self.sum_education_value + self.sum_transport_value + self.sum_food_personal_value;
		return self.display(self.total_expenses_value);
	}, self);

		// self.changeType = function() {
		// 	var a = self.sum_income();
		// 	var b = a.subString(1);
		// 	var c = Number(b)
		// 	return c;
		// }
		// console.log(self.changeType);
	self.total_saving = ko.computed(function(){
		console.log(self.sum_income());
		self.update();
		self.total_saving_value = self.sum_income_value - self.total_expenses_value;
		return self.display(self.total_saving_value);
	}, self);
}




ko.applyBindings(new ViewModel());

// $(document).ready(function(){
//     $("#housing-btn").click(function(){
//         displayVals();
//     });
// });


// function displayVals() {
//   var selectedValue = $("#housing-expenses").val();
//   var inputValue = $("#housing-input").val();
//   $("#transaction").append("<td>" + selectedValue + "</td>");
//   $("#amount").append("<td>" + inputValue + "</td>");
// }
