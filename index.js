        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
    
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    
        function checkCookie() {
            let userId = getCookie("userId");
            let userLocation = getCookie("userLocation");
    
            if (userId != "" && userLocation != "") {
                alert("Welcome again! User ID: " + userId + ", Location: " + userLocation);
            } else {
                userId = prompt("Please enter your user ID:", "");
                userLocation = prompt("Please enter your login location:", "");
    
                if (userId != "" && userId != null && userLocation != "" && userLocation != null) {
                    setCookie("userId", userId, 30);
                    setCookie("userLocation", userLocation, 30);
                }
            }
        }

        function handleConsent() {
            // Get user choices
            var option1Checked = document.getElementById('option1').checked;
            var option2Checked = document.getElementById('option2').checked;

            // Store user choices in cookies
            setCookie("consent_option1", option1Checked ? "true" : "false", 30);
            setCookie("consent_option2", option2Checked ? "true" : "false", 30);

            // Hide the consent form
            document.getElementById('consent-container').style.display = 'none';
        }

        function setCookie(name, value, days) {
            var expires = '';

            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = '; expires=' + date.toUTCString();
            }

            document.cookie = name + '=' + value + expires + '; path=/';
        }

        function setVisitorInfoCookie() {
            // Get visitor information (location and connection type)
            getLocation(function (position) {
                var visitorInfo = {
                    location: position ? position.coords.latitude + ', ' + position.coords.longitude : 'Unknown Location',
                    connectionType: navigator.connection ? navigator.connection.effectiveType : 'Unknown Connection'
                };

                // Convert the visitor information to a JSON string
                var visitorInfoString = JSON.stringify(visitorInfo);

                // Set the cookie with the visitor information
                setCookie('visitorInfo', encodeURIComponent(visitorInfoString), 30);
            });
        }

        function setCookie(name, value, days) {
            var expires = '';

            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = '; expires=' + date.toUTCString();
            }

            document.cookie = name + '=' + value + expires + '; path=/';
        }

        function getLocation(callback) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(callback, function (error) {
                    console.error('Error getting location:', error.message);
                    callback(null);
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
                callback(null);
            }
        }

        // Call the function to set the visitor information cookie
        setVisitorInfoCookie();


        const consentRequestList = [
            {id: "content_recommendation", text: "Profiling "}
        ]