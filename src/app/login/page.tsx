import {Metadata} from "next";
import {Auth} from "@/components/screens/auth/Auth";
export const metadata: Metadata = {
  title: 'Login',
}
export default function LoginPage(){
  return <Auth type='Login'/>
}