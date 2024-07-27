const DonationForm = () => {
    return (
      <div style={{ position: 'relative', overflow: 'hidden', height: '1200px', width: '100%' }}>
        <iframe
          title="Donation form powered by Zeffy"
          style={{
            position: 'absolute',
            border: 0,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}
          src="https://www.zeffy.com/embed/donation-form/f2b29422-9f3a-4b3b-8b4f-91d98adb7d54"
          allow="payment"
          allowTransparency="true"
        ></iframe>
      </div>
    );
  };
  
  export default DonationForm;
  