const emailText = (firstname, lastname) => {
    return `<!DOCTYPE html>
    <html
      lang="en"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <meta charset="utf-8" />
        <!-- utf-8 works for most cases -->
        <meta name="viewport" content="width=device-width" />
        <!-- Forcing initial-scale shouldn't be necessary -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting" />
        <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title></title>
        <!-- The title tag shows in email notifications, like Android 4.4. -->
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
        />
    
        <!-- CSS Reset : BEGIN -->
        <style>
          * {
            box-sizing: border-box;
          }
    
          :root {
            --blue: #007bff;
            --white: #fff;
            --gray: #6c757d;
            --gray-dark: #343a40;
            --primary: #007bff;
            --light: #f8f9fa;
            --dark: #343a40;
            --bg: #272343;
            --primary-color: #ffd803;
            --dark-bg: #0b0e11;
          }
    
          .flex {
            display: flex;
            align-items: flex-start;
          }
          html,
          body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #f1f1f1;
          }
    
          /* What it does: Stops email clients resizing small text. */
          * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
    
          /* What it does: Centers email on Android 4.4 */
          /*div[style*="margin: 16px 0"] {
        margin: 0 !important;
    }*/
    
          /* What it does: Stops Outlook from adding extra spacing to tables. */
          table,
          td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
          }
    
          /* What it does: Fixes webkit padding issue. */
          table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
          }
    
          /* What it does: Uses a better rendering method when resizing images in IE. */
    
          a {
            text-decoration: none;
          }
    
          /* What it does: A work-around for email clients meddling in triggered links. */
          *[x-apple-data-detectors],  /* iOS */
    .unstyle-auto-detected-links *,
    .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
    
          /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
          .a6S {
            display: none !important;
            opacity: 0.01 !important;
          }
    
          /* What it does: Prevents Gmail from changing the text color in conversation threads. */
          .im {
            color: inherit !important;
          }
    
          /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
          /* Create one of these media queries for each additional viewport size you'd like to fix */
    
          /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
          @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u ~ div .email-container {
              min-width: 320px !important;
            }
          }
          /* iPhone 6, 6S, 7, 8, and X */
          @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u ~ div .email-container {
              min-width: 375px !important;
            }
          }
          /* iPhone 6+, 7+, and 8+ */
          @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
              min-width: 414px !important;
            }
          }
        </style>
    
        <!-- CSS Reset : END -->
    
        <!-- Progressive Enhancements : BEGIN -->
        <style>
          .primary {
            background: var(--primary-color);
          }
          .bg_white {
            background: #ffffff;
          }
          .bg_light {
            background: #fafafa;
          }
          .bg_black {
            background: #000000;
          }
          .bg_dark {
            background: rgba(0, 0, 0, 0.8);
          }
          .email-section {
            padding: 2.5em;
          }
    
          /*BUTTON*/
          .btn {
            padding: 5px 15px;
          }
    
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Manrope", sans-serif;
            color: #000000;
            margin-top: 0;
            font-weight: 400;
          }
    
          body {
            font-family: "Manrope", sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 1.8;
            color: rgba(0, 0, 0, 0.4);
          }
    
          a {
            color: var(--primary-color);
          }
    
          /*LOGO*/
    
          .logo h1 {
            margin: 0;
            font-weight: 700;
          }
    
          /*HERO*/
          .hero {
            position: relative;
            z-index: 0;
          }
    
          .hero .text {
            color: rgba(0, 0, 0, 0.3);
          }
          .hero .text h2 {
            color: #000;
            font-size: 30px;
            margin-bottom: 0;
            font-weight: 300;
          }
          .hero .text h2 span {
            font-weight: 600;
            color: #f85e9f;
          }
    
          /* MIN FOOT */
          .container {
            max-width: 1300px;
            margin: 0 auto;
          }
    
          .min-foot {
            background-color: var(--gray-dark);
          }
    
          .min-foot .container {
            color: #fff;
            padding: 40px 0;
            justify-content: space-between;
          }
    
          .min-foot p {
            font-size: 20px;
            font-weight: 700;
            line-height: 1.5;
          }
    
          .min-foot .container .flex {
            align-items: flex-start;
            justify-content: space-between;
            width: 370px;
          }
    
          .min-foot h5 {
            font-size: 16px;
            padding: 15px 0;
            color: var(--primary-color);
            text-transform: uppercase;
          }
    
          .min-foot li {
            list-style: none;
            margin: 10px 0;
          }
    
          .min-foot a {
            font-size: 13px;
            color: #fff;
          }
    
          .btn {
            padding: 7px 25px;
            color: #fff;
            font-weight: 400;
            font-size: 17px;
            background-color: var(--blue);
            border: 1px var(--blue) solid;
            cursor: pointer;
          }
        </style>
      </head>
    
      <body
        width="100%"
        style="
          margin: 0;
          padding: 0 !important;
          mso-line-height-rule: exactly;
          background-color: #222222;
        "
      >
        <center style="width: 100%; background-color: #f1f1f1">
          <div
            style="
              display: none;
              font-size: 1px;
              max-height: 0px;
              max-width: 0px;
              opacity: 0;
              overflow: hidden;
              mso-hide: all;
              font-family: sans-serif;
            "
          >
            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
          </div>
          <div style="max-width: 600px; margin: 0 auto" class="email-container">
            <!-- BEGIN BODY -->
            <table
              align="center"
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              width="100%"
              style="margin: auto"
            >
              <tr>
                <td
                  valign="top"
                  class="bg_white"
                  style="padding: 1em 2.5em 0 2.5em"
                >
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                  >
                    <tr>
                      <td class="logo" style="text-align: center">
                        <h1><a href="#">SrongVest</a></h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- end tr -->
    
              <tr>
                <td
                  valign="middle"
                  class="hero hero-2 bg_white"
                  style="padding: 2em 0 4em 0"
                >
                  <table>
                    <tr>
                      <td>
                        <div
                          class="text"
                          style="padding: 0 2.5em; text-align: center"
                        >
                          <h2>
                            Your one stop investment platform for you
                            <span style="color: #007bff">Cryptocurrencies</span>
                          </h2>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- end tr -->
    
              <tr>
                <td class="bg_white">
                  <table
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                  >
                    <tr>
                      <td
                        class="bg_light email-section"
                        style="padding: 0; width: 100%"
                      >
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                        >
                          <tr>
                            <td valign="middle" width="50%">
                              <table
                                role="presentation"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="text-services"
                                    style="text-align: left; padding: 20px 30px"
                                  >
                                    <div class="heading-section">
                                      <h2 style="font-size: 22px">
                                        Hi ${firstname} ${lastname} Welcome to
                                        SrongVest
                                      </h2>
                                      <p>
                                        Want to make money online, we got you
                                        covered, here is your number one investment
                                        platform
                                      </p>
                                      <p>
                                        <a
                                          href="https://srvest.herokuapp.com"
                                          class="btn btn-primary"
                                          >Login</a
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
    
              <!-- 1 Column Text + Button : END -->
            </table>
    
            <table
              align="center"
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              width="100%"
              style="margin: auto"
            >
              <tr>
                <td class="bg_light" style="text-align: center">
                  <p>
                    No longer want to receive these email? You can
                    <a href="#" style="color: rgba(0, 0, 0, 0.8)"
                      >Unsubscribe here</a
                    >
                  </p>
                </td>
              </tr>
            </table>
    
            <section class="min-foot">
              <div class="container flex">
                <div class="flex" style="padding: inherit 20px;">
                  <div>
                    <h5>Contact Us</h5>
                    <ul>
                      <li>
                        <a href="mailto:lextechspec@gmail.com"
                          >contact@srongvest.com</a
                        >
                      </li>
                      <li><a href="tel:+2347043696226">+234 704 369 6336</a></li>
                      <li>
                        42 Sea Man Way <br />
                        Badagary Express Way <br />Lagos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>explore</h5>
                    <ul>
                      <li><a href="#about">About</a></li>
                      <li><a href="#faqs">FAQs</a></li>
                      <li><a href="/users/login">Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </center>
      </body>
    </html>
    `
}

module.exports = {
    emailText
}