import { useUser } from "./User";
import SignIn from './SignIn';

export default function SignInPage({children}) {
    const me = useUser();
    if(!me) return <SignIn />;
    return children;
}