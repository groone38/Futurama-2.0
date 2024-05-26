import React, { useEffect, useMemo, useState } from "react";
import { Input } from "shared/ui/Input/Input";

interface ISearch {
  placeholder?: string;
  helper?: string;
  search: string;
  setSearch: (value: string) => void;
}

export const Search = ({ placeholder, helper, search, setSearch }: ISearch) => {
  return (
    <div>
      <Input
        value={search}
        onChange={setSearch}
        placeholder={placeholder}
        helper={helper}
      />
    </div>
  );
};
