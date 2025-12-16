import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-white">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Or{" "}
                            <Link href="/signup" className="font-medium text-primary hover:text-primary/90">
                                create a new account
                            </Link>
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}
