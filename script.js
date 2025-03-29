document.getElementById("signup-form").addEventListener(
    "submit",
    async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const username = document.getElementById("Name").value;
        const email = document.getElementById("E_mail").value;
        const password = document.getElementById("Password").value;

        // Prepare the data to send to PocketBase
        const data = {
            Name: username,
            E_mail: email,
            Password: password,
        };

        try {
            // Send a POST request to PocketBase
            const response = await fetch(
                "http://127.0.0.1:8090/api/collections/login_page/records",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                },
            );

            if (response.ok) {
                const result = await response.json();
                console.log("User  created:", result);
                alert("Account created successfully!");

                // Clear the form fields
                document.getElementById("Name").value = "";
                document.getElementById("E_mail").value = "";
                document.getElementById("Password").value = "";
                document.getElementById("confirm password").value = "";

                // Optionally, redirect to another page or perform other actions
            } else {
                const error = await response.json();
                console.error("Error creating user:", error);
                alert("Error creating account: " + error.message);
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error: " + error.message);
        }
    },
);
document.getElementById("signup-form").addEventListener(
    "submit",
    function (event) {
        event.preventDefault(); // Prevent form submission

        const password = document.getElementById("Password").value; // Get the password
        const confirmPassword =
            document.getElementById("confirm password").value; // Get the confirm password
        const errorMessage = document.createElement("div"); // Create a new div for error messages
        errorMessage.style.color = "red"; // Set the error message color
        const existingError = document.querySelector(".error-message"); // Check if an error message already exists

        // Remove existing error message if present
        if (existingError) {
            existingError.remove();
        }

        // Check if passwords match
        if (password === confirmPassword) {
            // Proceed with form submission or further processing
            alert("Passwords match! Form can be submitted.");
            // You can submit the form here if needed
            // this.submit();
        } else {
            // Display error message
            errorMessage.className = "error-message"; // Add a class for styling if needed
            errorMessage.textContent =
                "Passwords do not match. Please try again.";
            document.querySelector(".right-side").appendChild(errorMessage); // Append error message to the form
        }
    },
);
