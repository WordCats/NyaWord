import {useState} from "react";
import Login from "~/components/login";

export default function LoginPage() {
    let [isOpen, setIsOpen] = useState(false);

   return (
      <div>
        <Login></Login>
      </div>
  );
}