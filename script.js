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
