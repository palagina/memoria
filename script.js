function myFunction() {
  const links = document.getElementById("links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

/*   Health */
getAppointments = () => {
  appointments.forEach(appointment => {
    var type = appointment.typeOfHealthcare;
    var d = new Date(appointment.arrivalDate);
    var date = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
    var time = d.getHours() + ":" + formatMinutes(d);
    var location = appointment.location;
    var doctor = appointment.healthcareProvider;

    document.getElementById("appointments").innerHTML +=
      "<div class=appListItem>" +
      "<b>" +
      date +
      " at " +
      time +
      "</b>" +
      "<br>" +
      type +
      "<br>" +
      "Location: " +
      location +
      "<br>" +
      "Doctor: " +
      doctor +
      "<br>" +
      "<br>" +
      "</div>";
  });
};

toggleMedsList = () => {
  var x = document.getElementById("medsList");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

toggleAppsList = () => {
  var x = document.getElementById("appointments");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

toggleContact = () => {
  var x = document.getElementById("contactDoctor");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

formatMinutes = d => {
  return (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
};

var appointments = [
  {
    id: 19036547,
    appointmentId: 19022347,
    arrivalDate: "2019-01-12T08:43:10.984Z",
    healthcareProvider: "Petra Mánadóttir",
    typeOfHealthcare: "Examination",
    location: "Landspítalinn Hringbraut"
  },
  {
    id: 19031249,
    appointmentId: 19032579,
    arrivalDate: "2019-02-17T10:02:04.127Z",
    healthcareProvider: "Finnur Traustason",
    typeOfHealthcare: "Diagnostic imaging",
    location: "Röntgen Domus"
  },
  {
    id: 19032486,
    appointmentId: 19034872,
    arrivalDate: "2019-05-22T08:43:10.984Z",
    healthcareProvider: "Jafet Magnússon",
    typeOfHealthcare: "Interview",
    location: "Landspítalinn Hringbraut"
  },
  {
    id: 19036587,
    appointmentId: 19039854,
    arrivalDate: "2019-05-12T08:43:10.984Z",
    healthcareProvider: "Jafet Magnússon",
    typeOfHealthcare: "Examination",
    location: "Landspítalinn Hringbraut"
  }
];
