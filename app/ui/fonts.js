import { Courier_Prime, Space_Grotesk, Cinzel_Decorative } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'], 
  subsets: ['latin'], 
  variable: '--font-space-grotesk', 
});

export const courierPrime = Courier_Prime({
  weight: ['400', '700'], 
  subsets: ['latin'],
});
