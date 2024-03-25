import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
                callbackUrl: {},
            },
            async authorize(credentials, req) {
                const params = credentials?.callbackUrl.includes('login') ? 'login' : 'register'
                try {
                    const response = await fetch(`http://localhost:5000/auth/${params}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(credentials),
                    });
                    if (response.ok) {
                        const user = await response.json();
                        console.log("Authenticated user:", user);
                        return user;
                    } else {
                        const errorData = await response.json();
                        console.log('errorData',errorData.message)
                        throw new Error(errorData.message);
                    }
                } catch (error) {
                    console.error("Authentication error:", error);
                    throw new Error('Failed to authenticate');
                }
            }
        }),
    ],
    callbacks: {
        async signIn(user) {
            return 'http://localhost:3000/chat';
        },
    },
    // session: {
    //     jwt: true
    // }
});


export {handler as GET, handler as POST};