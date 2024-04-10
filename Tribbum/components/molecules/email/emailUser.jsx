const EmailUser = ({ subject, message }) => {
  console.log("EmailUser", subject, message);
  return (
    <html lang="es">
      <body>
        <div>{message}</div>
      </body>
    </html>
  );
};

export default EmailUser;
