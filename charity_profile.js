// Initialize Google Map
function initMap() {
  console.log("Initializing map...");

  // Create a map object and specify the DOM element for display.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 }, // Center the map at default coordinates
    zoom: 2, // Initial zoom level
  });

  // Sample locations (replace with actual locations)
  const locations = [
    {
      lat: 40.013309,
      lng: -105.294472,
      title: "Earth Guardians Clean-Up Crew Day April 20",
    },
    {
      lat: 40.22188,
      lng: -105.2644,
      title: "Earth Guardians Tree Planting Initiative May 5",
    },
    {
      lat: 51.58693,
      lng: -0.12345,
      title: "Paws for Compassion Adoption Day at the Shelter June 15 ",
    },
    {
      lat: 51.51445,
      lng: -0.18963,
      title: "Paws for Compassion Fundraising Pet Walkathon Sept 8",
    },
    {
      lat: -4.037180,
      lng: 39.661850,
      title: "Hope for Humanity Community Health Fair Oct 15",
    },
    {
      lat: -4.037180,
      lng: 39.661850,
      title: "Hope for Humanity Hope Kits Distribution Drive Nov 20",
    },
  ];

  console.log("Creating markers...");
  // Loop through locations and create markers
  locations.forEach((location) => {
    console.log(
      `Creating marker for ${location.title} at ${location.lat}, ${location.lng}`
    );
    new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map, // Specify the map object
      title: location.title,
    });
  });

  console.log("Map initialization complete.");
}

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const prevTooltip = document.getElementById("prevTooltip");
  const nextTooltip = document.getElementById("nextTooltip");
  let currentSlideIndex = 0;

  function showSlide(index) {
    s;
    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });
    // Show the selected slide
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }

  // Show the first slide initially
  showSlide(currentSlideIndex);

  // Rotate slides every 5 seconds
  setInterval(nextSlide, 5000);

  // Add event listeners to previous and next buttons
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Add tooltips for buttons
  prevButton.addEventListener("mouseover", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    prevTooltip.style.left = `${x - prevTooltip.offsetWidth}px`;
    prevTooltip.style.top = `${y - 30}px`;
    prevTooltip.style.display = "block";
  });
  prevButton.addEventListener("mouseout", function () {
    prevTooltip.style.display = "none";
  });

  nextButton.addEventListener("mouseover", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    nextTooltip.style.left = `${x}px`;
    nextTooltip.style.top = `${y - 30}px`;
    nextTooltip.style.display = "block";
  });
  nextButton.addEventListener("mouseout", function () {
    nextTooltip.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const charitiesListLink = document.querySelector(
    '.navigation-tabs a[href="charities.html"]'
  );
  const listButton = document.getElementById("list-button");
  const charitiesCheckbox = document.getElementById("charities");

  // Initially colored the list icon box as blue
  listButton.classList.add("blue-background");

  // Initially checked the charities checkbox
  charitiesCheckbox.checked = true;

  charitiesListLink.addEventListener("click", function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Simulate the click event on the list button
    listButton.click();
  });

  // Event listener for view buttons to toggle active state
  const viewButtons = document.querySelectorAll(".view-button");

  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      viewButtons.forEach((btn) => btn.classList.remove("blue-background"));
      this.classList.add("blue-background");
    });
  });

  // Event listener for checkbox options to toggle active state
  const checkboxes = document.querySelectorAll(
    '.checkbox-options input[type="checkbox"]'
  );

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        this.parentElement.classList.add("blue-background");
      } else {
        this.parentElement.classList.remove("blue-background");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to create the form dynamically
  function createVolunteerForm() {
    // Create the form element
    var form = document.createElement("form");
    form.classList.add("volunteer-form");

    // Create input fields for name and email
    var nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");

    var emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    var emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");

    // Create submit button
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("type", "submit");

    // Append input fields and submit button to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(submitButton);

    // Create overlay div
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Append the form and overlay to the body of the document
    document.body.appendChild(overlay);
    document.body.appendChild(form);

    // Prevent default form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // You can handle form submission here, e.g., send data to server
      // For demonstration, you can log the form data to the console
      console.log("Name:", nameInput.value);
      console.log("Email:", emailInput.value);
      // Clear form inputs
      nameInput.value = "";
      emailInput.value = "";
      // Hide the form and overlay after submission
      form.style.display = "none";
      overlay.style.display = "none";
    });

    // Close form and overlay when clicking outside the form
    overlay.addEventListener("click", function () {
      form.style.display = "none";
      overlay.style.display = "none";
    });
  }

  // Add event listener to "Volunteer Now" button
  var volunteerButtons = document.querySelectorAll(".sign-up-button");
  volunteerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Call the function to create the form
      createVolunteerForm();
    });
  });
});
