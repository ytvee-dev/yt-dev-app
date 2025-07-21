import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ContactsForm from "../../components/ContactsForm";
import "./style.css";

const Contacts = () => {
    return (
        <DefaultLayout>
            <div className="contacts-blocks">
                <ContactsForm />
            </div>
        </DefaultLayout>
    );
};

export default Contacts;
