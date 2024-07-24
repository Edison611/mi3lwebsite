const DonationForm = () => {
    return (
        <div className="w-100" style={{ position: 'relative', overflow: 'hidden', height: '500px', paddingTop: '500px' }}>
        <iframe
          title="Donation form powered by Zeffy"
          style={{ position: 'absolute', border: '0', top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%' }}
          src="https://www.zeffy.com/embed/ticketing/4b3f8412-96c3-401d-9571-49e885a17952"
          allowpaymentrequest
          allowTransparency="true"
        ></iframe>
        </div>
    );
  };
  export default DonationForm;