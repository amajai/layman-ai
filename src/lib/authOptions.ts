import { connectMongoDB } from "@/lib/mongodb";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials: Record<string, string>): Promise<any> {
                const { email, password } = credentials;
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (!passwordMatch) return null;

                    return user;
                } catch (error) {
                    console.log(`Error: ${(error as Error).message}`);
                    return null;
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    }
};

export default authOptions;
