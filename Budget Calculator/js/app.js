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

	self.sum_income = ko.computed(function(){
		var total = 0;
		total = Number(self.salary()) + Number(self.other_income());
		return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	}, self);

	self.sum_housing = ko.computed(function(){
		var total = 0;
		total = Number(self.rent()) + Number(self.wge()) + Number(self.tv_internet()) + Number(self.repairs()) 
		+ Number(self.phone());
		return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
	}, self);

	self.sum_transport = ko.computed(function(){
		var total = 0;
		total = Number(self.pbTrans()) + Number(self.gas_fuel()) + Number(self.car_payment()) 
		+ Number(self.car_insurance());
		return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
	}, self);

	self.sum_education = ko.computed(function(){
		var total = 0;
		total = Number(self.tuition()) + Number(self.books());
		return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
	}, self);

	self.sum_food_personal = ko.computed(function(){
		var total = 0;
		total = Number(self.groceries()) + Number(self.clothing()) + Number(self.entertainment()) 
		+ Number(self.medical()) +
		 Number(self.pets()) + Number(self.others());
		return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
	}, self);

	self.total_expenses = ko.computed(function(){
		var total = 0;
		total = Number(self.sum_housing()) + Number(self.sum_transport()) + Number(self.sum_education()) 
		+ Number(self.sum_food_personal());
		return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
	}, self);

		// self.changeType = function() {
		// 	var a = self.sum_income();
		// 	var b = a.subString(1);
		// 	var c = Number(b)
		// 	return c;
		// }
		// console.log(self.changeType);
	self.total_saving = ko.computed(function(){
		var total = 0;
		total = Number(self.sum_income()) - Number(self.total_expenses());
		return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
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
