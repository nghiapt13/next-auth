import { Resend } from "resend";
import ConfirmMail from "@/components/emails/confirm-mail";
import TwoFactorEmail from "@/components/emails/two-factor-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.APP_URL;



export const sendPasswordResetemail = async (
    email: string,
    token: string,
) => {

    const resetLink = `${domain}/auth/new-password?token=${token}`

    await resend.emails.send({
        from: "Trung Nghia from NextAuth <reset@nghiapt.tech>",
        to: email,
        subject: "NextAuth by NghiaPT | Reset your password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
    })
}

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "Trung Nghia from NextAuth <confirm@nghiapt.tech>",
        to: email,
        subject: "NextAuth by NghiaPT | Confirm your email",
        react: ConfirmMail({  inviteLink: confirmLink })
        // html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
    });
}

export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string
) => {

    await resend.emails.send({
        from: "Trung Nghia from NextAuth <confirm@nghiapt.tech>",
        to: email,
        subject: "NextAuth by NghiaPT | 2FA code",
        react: TwoFactorEmail({ validationCode: token })
    })
}