//
// resumeBuilder.js
//

// Resume Objects
var bio = {
	"name": "Germund Hammer",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+4526189946",
		"email": "www.google.com",
		"github": "github",
		"twitter": "twitter",
		"location": "Copenhagen"
	},
	welcomeMessage: "Welcome to my Resume. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditatga.",	
	skills: ["IT Architect", "Datawarehouse Consultant", "Web Application Developer"],
	"biopic": "images/fry.jpg",
	"display": function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
		
		$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));
		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));

		$("#header").append(HTMLskillsStart);
		formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skillsH3").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skillsH3").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skillsH3").append(formattedSkills);		
	}
};

var work = {
	"jobs": [
		{
			"employer": "IBM",
			"title": "IT Architect",
			"location": "Copenhagen",
			"dates": "2005-2013",
			"description": "description"
		},
		{
			"employer": "NCR",
			"title": "Software Engineer",
			"location": "Copenhagen",
			"dates": "1980-2005",
			"description": "description"
		},
		{
			"employer": "NCR",
			"title": "Software Engineer",
			"location": "Columbia SC",
			"dates": "1980-2005",
			"description": "description"
		},
		{
			"employer": "NCR",
			"title": "Software Engineer",
			"location": "Rancho Bernardo, San Diego CA",
			"dates": "1980-2005",
			"description": "description"
		},
		{
			"employer": "NCR",
			"title": "Software Engineer",
			"location": "Los Angeles CA",
			"dates": "1980-2005",
			"description": "description"
		},
				{
			"employer": "NCR",
			"title": "Software Engineer",
			"location": "Raleigh, NC",
			"dates": "1980-2005",
			"description": "description"
		}
	],
	"display": function() {
		for (var index in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[index].employer));
			$("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[index].title));
			$("#workExperience").append(HTMLworkDates.replace("%data%",work.jobs[index].dates));
			$("#workExperience").append(HTMLworkLocation.replace("%data%",work.jobs[index].location));		
			$("#workExperience").append(HTMLworkDescription.replace("%data%",work.jobs[index].description));
		}
	}
}

var project = {
	"projects":	[
		{
			 "title": "Project 1",
			 "dates": "2001 - 2002",
			 "description": "description",
			 "images": "images/proj1.jpg"
		 },
		{
			 "title": "Project 2",
			 "dates": "2001 - 2002",
			 "description": "description",
			 "images": "images/proj2.jpg"
		 },
		{
			 "title": "Project 3",
			 "dates": "2001 - 2002",
			 "description": "description",
			 "images": "images/proj3.jpg"
		}	 
	],

 	"display": function() {
		for (var index in project.projects) {
			$("#projects").append(HTMLprojectStart);
			$("#projects").append(HTMLprojectTitle.replace("%data%",project.projects[index].title));
			$("#projects").append(HTMLprojectDates.replace("%data%",project.projects[index].dates));
			$("#projects").append(HTMLprojectDescription.replace("%data%",project.projects[index].description));
			$("#projects").append(HTMLprojectImage.replace("%data%",project.projects[index].images));
		}
	}
}

var education = {
    "schools": [
        {
            "name": "Aalborg University",
            "location": "Copenhagen",
            "major": "Computer Science Bachelor",
            "minor": "",
            "years": "1995-1998"
        },
        {
            "name": "Aalborg University",
            "location": "Copenhagen",
            "major": "Computer Science Bachelor",
            "minor": "",
            "years": "1995-1998"
        },
        {
            "name": "Aalborg University",
            "location": "Copenhagen",
            "major": "Computer Science Bachelor",
            "minor": "",
            "years": "1995-1998"
        }
    ], "onlinecourses": [
        {
            "name": "Front End Web Developer",
            "city": "Copenhagen",
            "major": "Nanodegree Web Developer",
            "minor": "",
            "years": "2015",
			"url": "www.udacity.com"
        },
        {
            "name": "Front End Web Developer",
            "city": "Copenhagen",
            "major": "Nanodegree Web Developer",
            "minor": "",
            "years": "2015",
			"url": "www.udacity.com"
        },
        {
            "name": "Front End Web Developer",
            "city": "Copenhagen",
            "major": "Nanodegree Web Developer",
            "minor": "",
            "years": "2015",
			"url": "www.udacity.com"
        }
    ],
	"display": function() {
		for (var index in education.schools) {
			$("#education").append(HTMLschoolStart);
			$("#education").append(HTMLschoolName.replace("%data%",education.schools[0].name));
			$("#education").append(HTMLschoolDegree.replace("%data%",education.schools[0].major));
			$("#education").append(HTMLschoolDates.replace("%data%",education.schools[0].years));
			$("#education").append(HTMLschoolLocation.replace("%data%",education.schools[0].city));
			//$("#education").append(HTMLonlineURL.replace("%data%",education.schools[0].url));
		}
		for (var index in education.onlinecourses) {		
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLonlineTitle.replace("%data%",education.onlinecourses[index].name));
			$("#education").append(HTMLonlineSchool.replace("%data%",education.onlinecourses[index].major));
			$("#education").append(HTMLonlineDates.replace("%data%",education.onlinecourses[index].years));
			$("#education").append(HTMLonlineURL.replace("%data%",education.onlinecourses[index].url));
		}
	}
};

var letsconnect = {
	"display": function(bio) {
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	}
}

var localization = {
	"display": function(bio) {
		$("#main").append('<br><button type="button" onclick="">Internationalize</button>');
	}
}

// main 
bio.display();
work.display();
project.display();
education.display();
letsconnect.display(bio);
localization.display(bio);



	
	


