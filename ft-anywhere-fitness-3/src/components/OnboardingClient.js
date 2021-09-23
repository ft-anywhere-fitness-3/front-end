
import React from "react";
import { Link } from "react-router-dom";

const OnboardingClient = () => {
    return (
        <div>
    <h2>Welcome to Anywhere Fitness</h2>
    <p>As a user of Anywhere Fitness, there are many ways to filter classes you would like to attend. You can filter by...</p>
    <ol>
        <li>Time</li>
        <li>Date</li>
        <li>Duration</li>
        <li>Type of Class</li>
        <li>Intensity Level</li>
        <li>Location</li>
    </ol>
    <p>Once you've found a Class you would like to attend, you can reserve your spot through the app.
     If needed, you can even reschedule or cancel your current reservation from the app.</p>
     <Link to='/login'>Get Started!</Link>
</div>
    )
}

export default OnboardingClient;