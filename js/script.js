// Put a title on github link

$('.github-link').attr('title', 'go to code');

// Put a title on project link

$('.project-link').attr('title', 'go to project');



// Get the current year into copyright

function getCopyrightYear() {
  var d = new Date(); 
  var thisYear = d.getFullYear();
  document.getElementById("copyright_year").innerHTML = thisYear;
}

getCopyrightYear();