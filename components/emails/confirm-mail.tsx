import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Img,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

import * as React from "react";

interface ConfirmMailProps {
    username?: string;
    userImage?: string;
    invitedByUsername?: string;
    teamName?: string;
    teamImage?: string;
    inviteLink?: string;
    inviteFromIp?: string;
    inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export const ConfirmMail = ({
    username = "nghiapt",
    invitedByUsername = "bukinoshita",
    inviteLink = "",
    inviteFromIp = "204.13.186.218",
    inviteFromLocation = "São Paulo, Brazil",
}: ConfirmMailProps) => {
    const previewText = "Confirm your email";

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        {/* <Section className="mt-[32px]">
                            <Img
                                src={`${baseUrl}/2020-Btec.png`}
                                width="190"
                                height="100"
                                alt="Vercel"
                                className="my-0 mx-auto"
                            />
                        </Section> */}
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            <strong>NextAuth - Confirm your email</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello {username},
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            This email is sent to you to confirm you registation of NextAuth
                        </Text>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center py-3 px-5"
                                href={inviteLink}
                            >
                                Confirm your email
                            </Button>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px]">
                            or copy and paste this URL into your browser:{" "}
                            <Link href={inviteLink} className="text-blue-600 no-underline">
                                {inviteLink}
                            </Link>
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This invitation was intended for{" "}
                            <span className="text-black">{username} </span>.This invite was
                            sent from <span className="text-black">{inviteFromIp}</span>{" "}
                            located in{" "}
                            <span className="text-black">{inviteFromLocation}</span>. If you
                            were not expecting this invitation, you can ignore this email. If
                            you are concerned about your account&apos;s safety, please reply to
                            this email to get in touch with us.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ConfirmMail;
