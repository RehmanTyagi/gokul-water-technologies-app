import "../developmentmessage/developmentmessage.css";
const developMessage = () => {
  return (
    <div className="message-container">
      <span class="material-icons-outlined">warning_amber</span>
      <h1>We’ll be back soon!</h1>
      <p>
        Sorry for the inconvenience. We’re performing some maintenance at the
        moment. If you need to you can always follow us on{" "}
        <a href="tel:+91 77019 87693">WhatsApp</a> for updates, otherwise we’ll
        be back up shortly!
      </p>
      <div>
        <hr />
        <p>The Gokul Water Technologies Team</p>
      </div>
    </div>
  );
};
export default developMessage;
