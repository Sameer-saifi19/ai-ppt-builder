import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

const authCallbackPage = async () => {
    const auth = await onAuthenticateUser();

    if (auth.status === 201 || auth.status === 200) {
        redirect("/dashboard");
    } else if (auth.status === 400 || auth.status === 403 || auth.status === 500){
        redirect('/sign-in')
    }
        return <div>authCallbackPage</div>;
};

export default authCallbackPage;
