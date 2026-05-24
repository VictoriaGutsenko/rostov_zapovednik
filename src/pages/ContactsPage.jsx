import React from "react";
import Contacts from "../components/Contacts/Contacts";
import Feedback from "../components/Feedback/Feedback";
import Map from "../components/Map/Map";

export default function ContactsPage() {
  return (
    <>
      <Contacts />
      <Map />
      <Feedback />
    </>
  );
}
