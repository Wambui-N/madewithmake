import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Button,
} from "@react-email/components";

export function Email(props: { name?: string }) {
  const { name } = props;

  const colors = {
    black: "#030A19",
    grey: "#A6AEB1",
    white: "#fff",
    sky: "#ADECFE", 
    dark_blue: "#002841",
  };

  return (
    <Html>
      <Head>
        <title>Your Automation Template from Made With Make</title>
      </Head>
      <Preview>Welcome to Made With Make - Your Automation Template is Ready</Preview>
      <Body style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        padding: "40px 0",
        margin: "0",
      }}>
        <Container style={{
          maxWidth: "600px",
          backgroundColor: colors.black,
          padding: "40px",
          borderRadius: "16px",
          margin: "0 auto",
        }}>
          {/* Company Name Instead of Logo */}
          <Heading style={{
            color: colors.white,
            fontSize: "24px",
            textAlign: "center",
            marginBottom: "32px",
          }}>
            Made With Make
          </Heading>

          <Heading style={{
            fontSize: "28px",
            color: colors.white,
            marginBottom: "24px",
            fontWeight: "700",
            textAlign: "center",
            lineHeight: "1.3",
          }}>
            Welcome, {name || "there"}!
          </Heading>

          <Text style={{
            fontSize: "16px",
            color: colors.grey,
            lineHeight: "1.6",
            marginBottom: "24px",
          }}>
            Thank you for choosing Made With Make. Your automation template is ready for download. 
            This template will help you automatically organize email attachments in Google Drive, 
            streamlining your workflow.
          </Text>

          <div style={{
            textAlign: "center",
            margin: "32px 0",
          }}>
            {/* Table-based button for better email compatibility */}
            <table role="presentation" border={0} cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <tr>
                  <td align="center">
                    <a href="/api/download"
                      style={{
                        backgroundColor: colors.dark_blue,
                        color: colors.white,
                        padding: "16px 32px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontSize: "16px",
                        fontWeight: "600",
                        display: "inline-block",
                        maxWidth: "100%",
                      }}
                    >
                      Access Your Template
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Text style={{
            fontSize: "16px",
            color: colors.black,
            lineHeight: "1.6",
            marginTop: "24px",
            padding: "20px",
            backgroundColor: colors.sky,
            borderRadius: "8px",
            border: `1px solid ${colors.dark_blue}`,
          }}>
            Need help setting up? Visit our <a href="https://madewithmake.com/support" style={{ color: colors.dark_blue, textDecoration: "underline" }}>Support Center</a> for assistance.
          </Text>

          <div style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: `1px solid ${colors.grey}`,
          }}>
            <Text style={{
              fontSize: "14px",
              color: colors.grey,
              lineHeight: "1.5",
            }}>
              Best regards,
              <br />
              <strong style={{ color: colors.white }}>Made With Make Team</strong>
              <br />
              <br />
              <small style={{ color: colors.grey }}>
                You're receiving this email because you signed up for Made With Make.
                <br />
                Nairobi, Kenya
              </small>
            </Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
}

export default Email;
