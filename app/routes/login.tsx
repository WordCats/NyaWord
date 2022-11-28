import {useState} from "react";
import Login from "~/components/Login/login";

export default function LoginPage() {
    let [isOpen, setIsOpen] = useState(false);

   return (
      <div>
        <Login></Login>
      </div>
  );
}