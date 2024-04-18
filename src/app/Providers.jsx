'use client'
// import{ThemeProvider} from 'next-themes'

// export function Providers ({children}){
//     return <ThemeProvider attribute='class' defaultTheme='sysetm' enableSystem>
//         {children}</ThemeProvider>
// }

// "use client";
// import {SessionProvider} from "next-auth/react"
 
// export const AuthProvider =({children})=>{
//     return <SessionProvider>{children}</SessionProvider>
// }
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
