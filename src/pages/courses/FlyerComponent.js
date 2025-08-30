import React from 'react';

// Main component for the flyer
const FlyerComponent = () => {
    // Main container style
    const flyerStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fef9e7',
        color: '#333',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };

    // Header style
    const headerStyle = {
        marginBottom: '20px',
    };

    // Main title style
    const titleStyle = {
        fontSize: '48px',
        color: '#008080',
        margin: '10px 0',
    };

    // Subtitle style
    const subtitleStyle = {
        fontSize: '24px',
        color: '#555',
    };

    // Section style
    const sectionStyle = {
        margin: '20px 0',
    };

    // List style
    const listStyle = {
        listStyleType: 'none',
        padding: '0',
    };

    // List item style
    const listItemStyle = {
        fontSize: '18px',
        margin: '10px 0',
    };

    // Footer style
    const footerStyle = {
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#008080',
        color: 'white',
        borderRadius: '8px',
    };

    // "Join Now" button style
    const buttonStyle = {
        backgroundColor: '#ffc107',
        color: '#333',
        padding: '15px 30px',
        fontSize: '20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '10px',
    };

    return (
        <div style={flyerStyle}>
            {/* Header section */}
            <header style={headerStyle}>
                <h1 style={titleStyle}>Speak Up!</h1>
                <p style={subtitleStyle}>Youth Workshops</p>
                <p>A fun and interactive workshop for young voices.</p>
            </header>

            {/* Main content section */}
            <main>
                {/* Age and experience section */}
                <div style={sectionStyle}>
                    <h2>AGES 9-14 | NO EXPERIENCE NEEDED</h2>
                </div>

                {/* What you'll learn section */}
                <div style={sectionStyle}>
                    <h3>You Will Learn:</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>How to speak up with confidence</li>
                        <li style={listItemStyle}>Present ideas clearly in front of others</li>
                        <li style={listItemStyle}>Develop charisma and presence</li>
                    </ul>
                </div>
            </main>

            {/* Footer section */}
            <footer style={footerStyle}>
                <h2>SPEAK. SHARE. SHINE.</h2>
                <p><strong>When:</strong> Monday, Aug 11th | Wednesday, Aug 13th | Friday, Aug 15th | Sunday, Aug 17th</p>
                <p><strong>Time:</strong> 7pm - 9pm</p>
                <p><strong>Where:</strong> 1453 Cornwall Rd, L6J 7T5 2nd Floor Unit 2A</p>
                <a href="#" style={buttonStyle}>JOIN NOW</a>
                <p>2055 members have 25% off</p>
                <p>Contact: 416-523-5965 | Mi3LSchool@gmail.com</p>
            </footer>
        </div>
    );
};

export default FlyerComponent;