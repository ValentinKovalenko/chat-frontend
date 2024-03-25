import {Metadata} from "next";
import {CurrentUser} from "@/components/screens/chats/CurrentUser";
import {ChatsList} from "@/components/screens/chats/ChatsList";
import {Chat} from "@/components/screens/chats/Chat";

export const metadata: Metadata = {
    title: 'Chat'
}
export default function ChatsPage() {
    return (
        <div className='grid h-full' style={{gridTemplateColumns: '.7fr 3fr'}}>
            <div className='border-r border-border'>
                <CurrentUser/>
                <ChatsList/>
            </div>
            <div>
                <Chat/>
            </div>
        </div>
    );
}