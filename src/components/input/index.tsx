import React from "react";
import {Input} from "@nextui-org/react";

export default function InputI() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input 
      isRequired
      type="email" 
      label="Email" />
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
  );
}
