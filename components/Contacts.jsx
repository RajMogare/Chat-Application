"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const { data: session } = useSession();
  const currentUser = session?.user;

  const getContacts = async () => {
    try {
      const res = await fetch(
        search !== "" ? `/api/users/searchContact/${search}` : "/api/users"
      );
      // console.log(res);
      const data = await res.json();
      // console.log(data);

      setContacts(data.filter((contact) => contact._id !== currentUser._id));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      console.log("contacts", contacts);
      getContacts();
    }
  }, [currentUser, search]);

  //select contacts
  const [selectedContact, setSelectedContact] = useState([]);
  const isGroup = selectedContact.length > 1;

  const handleSelect = (contact) => {
    if (selectedContact.includes(contact)) {
      setSelectedContact((previousSelectedContact) =>
        previousSelectedContact.filter((item) => item !== contact)
      );
    } else {
      setSelectedContact((previousSelectedContact) => [
        ...previousSelectedContact,
        contact,
      ]);
    }
  };

  //Add gropud chat name
  const [name, setName] = useState("");
  // console.log("selectedContact",selectedContact)

  const router = useRouter();

  /* CREATE CHAT */
  const createChat = async () => {
    try {
      const res = await fetch("/api/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserId: currentUser._id,
          members: selectedContact.map((contact) => contact._id),
          isGroup,
          name,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error creating chat:", errorData.error);
        return;
      }

      const chat = await res.json();
      router.push(`/chats/${chat._id}`);
    } catch (error) {
      console.error("Failed to create chat:", error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="create-chat-container">
      <input
        placeholder="Search Contact..."
        className="input-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="contact-bar">
        <div className="contact-list">
          <p className="text-body-bold">Select or Deselect</p>
          {contacts.map((user, index) => {
            return (
              <div
                key={index}
                className="contact"
                onClick={() => handleSelect(user)}
              >
                {selectedContact.find((item) => item === user) ? (
                  <CheckCircle sx={{ color: "red" }} />
                ) : (
                  <RadioButtonUnchecked />
                )}

                <img
                  src={user.profileImage || "/assets/person.jpg"}
                  alt="profileimage"
                  className="profilePhoto"
                />
                <p className="text-base-bold">{user.username}</p>
              </div>
            );
          })}
        </div>

        <div className="create-chat">
          {isGroup && (
            <>
              <div className="flex flex-col gap-3">
                <p className="text-body-bold">Group Chat Name</p>
                <input
                  placeholder="Enter Group Chat Name..."
                  className="input-group-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-body-bold">Members</p>
                <div className="flex flex-wrap gap-3">
                  {selectedContact.map((contact, index) => (
                    <p className="selected-contact" key={index}>
                      {contact.username}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
          <button className="btn" onClick={createChat}>
          Find or Start a New Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
