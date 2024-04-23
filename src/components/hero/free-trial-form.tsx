"use client";

import { useFormState } from "react-dom";
import Button from "../button";
import Input from "../input/Input";
import { submitStartFreeTrialAction } from "./action";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function FreeTrialForm() {
  const [message, formAction] = useFormState(submitStartFreeTrialAction, null);

  useEffect(() => {
    if (message?.status === "success") {
      toast.success(message.message);
    } else if (message?.status === "danger") {
      toast.error(message.message);
    }
  }, [message]);

  return (
    <form action={formAction}>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <Input
            placeholder="Enter your email"
            required
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex-0.5">
          <Button type="submit" disabled={message?.status === "success"}>
            {message?.status === "success"
              ? "Your free trial has started."
              : "Start free trial"}
          </Button>
        </div>
      </div>
      <p className="text-gray-300 text-sm">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our{" "}
        <a href="#" className="font-semibold">
          terms of service
        </a>
        .
      </p>
    </form>
  );
}
