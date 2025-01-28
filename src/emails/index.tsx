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
  Img,
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
        <title>Your Automation Template</title>
      </Head>
      <Preview>Your Automation Template is Here! 🚀</Preview>
      <Body
        style={{
          fontFamily:
            "-apple-system, satoshi, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          padding: "40px 0",
          margin: "0",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            backgroundColor: colors.black,
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "32px",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 637.43 72.68"
              style={{ width: "300px", height: "auto" }}
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    fill={colors.white}
                    d="M37.36,4.32,21.37,32a2.88,2.88,0,0,1-5,0L.39,4.32A2.88,2.88,0,0,1,2.89,0h32A2.88,2.88,0,0,1,37.36,4.32Z"
                  />
                  <path
                    fill={colors.white}
                    d="M79.33,4.32,63.34,32a2.88,2.88,0,0,1-5,0l-16-27.7A2.88,2.88,0,0,1,44.85,0h32A2.88,2.88,0,0,1,79.33,4.32Z"
                  />
                  <path
                    fill={colors.white}
                    d="M34.87,72.68h-32a2.88,2.88,0,0,1-2.5-4.32l16-27.69a2.87,2.87,0,0,1,5,0l16,27.69A2.88,2.88,0,0,1,34.87,72.68Z"
                  />
                  <path
                    fill={colors.white}
                    d="M76.83,72.68h-32a2.88,2.88,0,0,1-2.5-4.32l16-27.69a2.87,2.87,0,0,1,5,0l16,27.69A2.88,2.88,0,0,1,76.83,72.68Z"
                  />
                  <path
                    fill={colors.white}
                    d="M54,37.78,42.35,57.93a2.88,2.88,0,0,1-5,0L25.73,37.78a2.9,2.9,0,0,1,0-2.88L37.36,14.76a2.88,2.88,0,0,1,5,0L54,34.9A2.85,2.85,0,0,1,54,37.78Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M109.68,58.3V15.24h9.13l12.8,32.12,12.86-32.12h9.25V58.3h-9.13v-9c0-9.31,0-11.35.46-14.55L135.92,58.3h-8.61l-9.08-23.57a73.92,73.92,0,0,1,.58,11.52v12Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M158.72,58.3l15.36-43.06h9.19l15.3,43.06h-10l-3-9.08H171.63l-3.08,9.08Zm15.65-17h8.49l-3.08-9.2a34.76,34.76,0,0,1-1.16-4.18,34.85,34.85,0,0,1-1.17,4.18Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M203.57,58.3V15.24h16.29c12.63,0,21.41,8.85,21.41,21.65,0,12.56-8.55,21.41-20.83,21.41ZM213,24v25.6h6.51c7.45,0,11.81-4.71,11.81-12.68,0-8.15-4.59-12.92-12.39-12.92Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M247.84,58.3V15.24h27.35V24H257.27v8.44h15.88v8.26H257.27v8.9h17.92V58.3Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M294.73,15.24h9.83l5.64,18.68a69.3,69.3,0,0,1,2.16,9.37,73.82,73.82,0,0,1,2.15-9.37l5.29-18.68h10.54l5.06,18.68c.7,2.62,1.39,5.23,2.15,9.37A88.37,88.37,0,0,1,339.82,34l5.76-18.79h9.6L342,58.3h-9.19L325,30,316.9,58.3h-9.26Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M370,58.3h-9.43V15.24H370Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M375.59,15.24h33.86V24H397.23V58.3h-9.42V24H375.59Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M415.09,58.3V15.24h9.43v17h16.64v-17h9.42V58.3h-9.42V41H424.52V58.3Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M475,58.3V15.24h9.14l12.8,32.12,12.85-32.12H519V58.3h-9.14v-9c0-9.31,0-11.35.47-14.55L501.19,58.3h-8.61l-9.07-23.57a73.92,73.92,0,0,1,.58,11.52v12Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M524,58.3l15.36-43.06h9.19L563.85,58.3h-10l-3-9.08h-13.9l-3.09,9.08Zm15.65-17h8.5l-3.09-9.2a36.73,36.73,0,0,1-1.16-4.18,34.52,34.52,0,0,1-1.16,4.18Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M578.27,35.84l15.53-20.6h11.12L590.84,33.63,605,58.3H594.15l-9.48-16.64L578.27,50V58.3h-9.43V15.24h9.43Z"
                  />
                  <path
                    fill={colors.white}
                    className="cls-1"
                    d="M610.09,58.3V15.24h27.34V24H619.51v8.44H635.4v8.26H619.51v8.9h17.92V58.3Z"
                  />
                </g>
              </g>
            </svg>
          </div>

          <Heading
            style={{
              fontSize: "28px",
              color: colors.white,
              marginBottom: "24px",
              fontWeight: "700",
              textAlign: "center",
              lineHeight: "1.3",
            }}
          >
            Hi {name || "there"},
          </Heading>

          <Text
            style={{
              fontSize: "16px",
              color: colors.grey,
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            Thanks for signing up! This automation template helps you save time
            and stay organized by automatically uploading email attachments to
            Google Drive. This template is designed to make your workflow
            smoother and more efficient.
          </Text>

          <div
            style={{
              textAlign: "center",
              margin: "32px 0",
            }}
          >
            <Button
              href="https://www.dropbox.com/t/PoYjL0txRzgURx0U"
              style={{
                backgroundColor: colors.dark_blue,
                color: colors.white,
                padding: "16px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                boxShadow: `0 1px 1px ${colors.sky}`,
                transition: "all 0.2s ease",
              }}
            >
              Download Your Template
            </Button>
          </div>

          <Text
            style={{
              fontSize: "16px",
              color: colors.black,
              lineHeight: "1.6",
              marginTop: "24px",
              padding: "20px",
              backgroundColor: colors.sky,
              borderRadius: "8px",
              border: `1px solid ${colors.dark_blue}`,
            }}
          >
            If you’re unsure how to set up this scenario or want additional
            customizations, feel free to reach out for support at no extra fees.
            Let’s make automation work for you!
          </Text>

          <div
            style={{
              marginTop: "40px",
              paddingTop: "24px",
              borderTop: `1px solid ${colors.grey}`,
            }}
          >
            <Text
              style={{
                fontSize: "14px",
                color: colors.grey,
                lineHeight: "1.5",
              }}
            >
              Best regards,
              <br />
              <strong style={{ color: colors.white }}>
                The Made With Make Team
              </strong>
            </Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
}

export default Email;
