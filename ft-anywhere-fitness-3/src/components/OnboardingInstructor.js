import React from "react";
import { Link } from "react-router-dom";

const OnboardingInstructor = () => {

    return (
        <div>
            <h2>Thanks for Joining Anywhere Fitness</h2>
            <p>
                You are registered as an instructor for Anywhere Fitness! You now have access to all of our tools for curating the greatest experince possible for your students!
                Using our class creator, you can wish up any kind of class you wish to lead, and post it for all your possible students to see!
                This synced process will allow you to fill up your schedule and get your classes to the full capacity.
            </p>
            <p>
                Oops, did you submit an uncaught typo when you created your new class? Did something come up so you have to reschedule the class' start time?
                No worries! We allow you to edit your classes at any time; You can even delete them if you can't make it to teach the class (although we don't recommend this).
            </p>
            <Link to='/login'>Get Started!</Link>
        </div>
    )
}

export default OnboardingInstructor;