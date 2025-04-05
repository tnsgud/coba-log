"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tables } from "@/database.types";
import supabase from "@/lib/supabase";
import { useEffect, useState } from "react";

interface Props {
  value: number;
  onChange: (value:string) => void;
}

export default function CategorySelector({value, onChange} : Props) {
  const [categories, setCategories] = useState<
    Pick<Tables<"category">, "id" | "name">[]
  >([]);

  useEffect(() => {
    async function getCategories() {
      const { data } = await supabase.from("category").select("id, name");

      setCategories(data ?? []);
    }

    getCategories();
  }, []);

  return (
    <Select onValueChange={onChange} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((row) => (
          <SelectItem key={`category-${row.id}`} value={`${row.id}`}>
            {row.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
