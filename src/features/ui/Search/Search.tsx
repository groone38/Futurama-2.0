import React, { useState } from "react";
import { Input } from "shared/ui/Input";

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div>
      <Input
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Email"
        helper="Enter your email address"
      />
    </div>
  );
};
