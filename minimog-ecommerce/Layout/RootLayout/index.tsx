import React from "react"
import Header from "@/Layout/RootLayout/Header"
import Footer from "@/Layout/RootLayout/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}