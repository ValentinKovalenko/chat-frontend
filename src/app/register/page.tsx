import {Metadata} from "next";

import {Auth} from "@/components/screens/auth/Auth";
export const metadata: Metadata = {
  title: 'Register',
}
export default function RegisterPage(){
  return <Auth type='Register'/>
}