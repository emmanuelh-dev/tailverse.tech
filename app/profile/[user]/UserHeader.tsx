"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Avatar from "react-avatar";

const UserCard = ({ user }) => {
  const { username, email } = user;

  return (
    <div className="px-8 mb-20">
      <Card className="px-6 py-8">
        <CardContent className="flex justify-center">
          <Avatar name={username} size="150" round />
        </CardContent>
        <div className="text-center mt-4">
          <CardTitle>
            <span className="text-3xl">{username}</span>
          </CardTitle>
          <CardDescription>
            <span className="text-sm">{email}</span>
          </CardDescription>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;
