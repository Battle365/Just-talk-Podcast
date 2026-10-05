import type { ReactNode } from "react";
import "./globals.css";
export const metadata={title:"Just Talk Podcast",description:"Friends just talking about stuff!"};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
