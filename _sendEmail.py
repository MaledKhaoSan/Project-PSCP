# #Email
import os
# Import modules
import smtplib, ssl
## email.mime subclasses
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.message import EmailMessage
# import pandas as pd


def sendCustomEmail(username_arrias, email_receiver, user_message, email_flowers):
    email_sender = 'pscp.banndokmai@gmail.com'
    email_password = "rxvjgsgkboodbuha"
    email_receiver = email_receiver

    subject = 'BANNDOKMAI PSIT-PROJECTS'
    body = """
    <!-- Your title goes here -->
<title>Newsletter</title>
<!-- End title -->

<!-- Start stylesheet -->
<style type="text/css">
  a,a[href],a:hover, a:link, a:visited {
    /* This is the link colour */
    text-decoration: none!important;
    color: #0000EE;
  }
  .link {
    text-decoration: underline!important;
  }
  p, p:visited {
    /* Fallback paragraph style */
    font-size:15px;
    line-height:24px;
    font-family:'Helvetica', Arial, sans-serif;
    font-weight:300;
    text-decoration:none;
    color: #000000;
  }
  h1 {
    /* Fallback heading style */
    font-size:22px;
    line-height:24px;
    font-family:'Helvetica', Arial, sans-serif;
    font-weight:normal;
    text-decoration:none;
    color: #000000;
  }
  .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
  .ExternalClass {width: 100%;}
</style>
<!-- End stylesheet -->

  <!-- You can change background colour here -->
<body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
  
  <!-- Fallback force center content -->
  <div style="text-align: center;">
    <!-- Email not displaying correctly -->
    
    <!-- Start container for logo -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">

            <!-- Your logo is here -->
            <img style="width: 120px; max-width: 180px; height: auto; text-align: center; color: #ffffff;" alt="Logo" src="https://raw.githubusercontent.com/MaledKhaoSan/Project-PSCP/main/static/IMG/EMAIL/email_hydrangea_icon.png" align="center" width="180" height="85">

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Start single column section -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">

              <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;"> from """ + username_arrias + """</h1>

              <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">"""  + user_message + """</p>              

            </td>
          </tr>
        </tbody>
      </table>
  </div>
</body>
"""

    message = EmailMessage()
    message = MIMEMultipart()
    message["From"] = email_sender
    message["To"] = email_receiver
    message["Subject"] = subject
    # message.set_content(body)

    message.attach(MIMEText(body, "html"))
    email_string = message.as_string()


    context = ssl.create_default_context()

    # with smtplib.SMTP_SSL(host="smtp.gmail.com", port=587) as smtp:
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, email_string)
    print('SENT')
