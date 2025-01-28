import { Courier_Prime, Space_Grotesk, Cinzel_Decorative, Montserrat } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'], 
  subsets: ['latin'], 
  variable: '--font-space-grotesk', 
});

export const courierPrime = Courier_Prime({
  weight: ['400', '700'], 
  subsets: ['latin'],
});

export const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700'], 
  subsets: ['latin'],
});

export const monserrat = Montserrat({
  weight: ['400', '700'], 
  subsets: ['latin'],
});