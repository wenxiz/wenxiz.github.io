'use strict';
/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Wenxi Zhou",
	"role": "Web Developer",
	"contacts": 
	{
		"mobile": "202-413-7280",
		"email": "vic.zwx1990@gmail.com",
		"github": "https://github.com/wenxiz",
		"location": "Washington, D.C."
	},
	"skills": [
	"HTML", "CSS", "JavaScript", "jQuery", "Git", "Gulp", "Bootstrap"
	],
	"welcomeMessage": "This is it!",
	"biopic": "images/fry.jpg"
}

var education = {
	"schools": [
	{
		"name": "the George Washington University",
		"location": "Washington, D.C.",
		"degree": "Masters",
		"majors": ["Computer Science"],
		"dates": "2017",
		"url": "https://www.gwu.edu"
	},
	{
		"name": "Yanching Institute of Technology",
		"location": "Hebei, China",
		"degree": "Bachelor",
		"majors": ["Chemical Engineering"],
		"dates": "2013",
		"url": "http://www.yit.edu.cn/"	
	}
	],
	"onlineCourses": [
	{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates": "2017",
		"url": "http://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
	}
	]
}

var work = {
	"jobs": [
	{
		"employer": "Yiyun Technology Service and Consulting / IT Consulting / China (Remote)",
		"title": "Web Development Intern",
		"dates": "April 2016 - July 2016",
		"location": "Remote",
		"description": "Develop web pages using HTML5 technologies"
	},
	{
		"employer": "DC Bilingual Public Charter School",
		"title": "Volunteer",
		"dates": "April 2017",
		"location": "Washington, D.C.",
		"description": "Leading Chinese Culture Club among students who are interested in Chinese culture"
	}]
}

var projects = {
	"projects": [
	{
		"title": "Alipay",
		"dates": "December 2016",
		"description": "Interface design of application that takes a college graduate student's income and payout data to help the user identify their spending patterns, monitor the rate at which they are spending their income and encourage them to save.",
		"images": [
		"images/Menu.png", "images/Main.png", "images/Add.png", "images/History.png"
		]
	},
	{
		"title": "Electronic resume",
		"dates": "July 2017",
		"description": "Using HTML, CSS, JavaScript, Json and jQuery to build an electronic resume.",
		"images": [
		"images/resume1.jpg", "images/resume2.jpg", "images/resume3.jpg", "images/resume4.jpg"
		]
	}
	]
}
//display bio information
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name),
		formattedRole = HTMLheaderRole.replace("%data%", bio.role),
		formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic),
		formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
		formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
		formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
		formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedMessage);

	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

	$("#header").append(HTMLskillsStart);	
	
	bio.skills.forEach(function(element) {
		var formattedSkills = HTMLskills.replace("%data%", element);
		$("#skills").append(formattedSkills);
	});
}

//display work information
work.display = function() {
	for (var i = 0; i < work.jobs.length; i ++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer),
			formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title),
			formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates),
			formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location),
			formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);
	}
	
}

//display education information
education.display = function() {
	for (var i = 0; i < education.schools.length; i ++) {
		$("#education").append(HTMLschoolStart); 

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url),
			formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree),
			formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates),
			formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location),
			formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors)

		$(".education-entry:last").append(formattedSchool, formattedDegree, formattedDates, formattedLocation, formattedMajor);
	}

	for (var i = 0; i < education.onlineCourses.length; i ++) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart); 

		var formattedOnlineTitile = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title),
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school),
			formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates),
			formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)

		$(".education-entry:last").append(formattedOnlineTitile, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
	}
}

//display projects information
projects.display = function() {
	projects.projects.forEach(function(element){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", element.title),
			formattedDates= HTMLprojectDates.replace("%data%", element.dates),
			formattedDescription = HTMLprojectDescription.replace("%data%", element.description);
			$(".project-entry:last").append(formattedProjectTitle, formattedDates, formattedDescription, HTMLimageStart);

			element.images.forEach(function(i){

				var formattedImages = HTMLprojectImage.replace("%data%", i);
				$(".row:last").append(formattedImages);
			});
	});
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

bio.display();
work.display();
education.display();
projects.display();

//add internationalize Button to page
$("#main").append(internationalizeButton);

//add map into page
$("#mapDiv").append(googleMap);












