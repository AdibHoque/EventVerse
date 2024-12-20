"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {getAllCategories} from "@/lib/actions/category.actions";
import {ICategory} from "@/lib/database/models/category.model";
import {formUrlQuery, removeKeysFromQuery} from "@/lib/utils";
import {List} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function CategoryFilter() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = (searchParams?.get("category") as string) || "";

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categoryList && setCategories(categoryList as ICategory[]);
    };
    getCategories();
  }, []);

  const onCategoryChange = (category: string) => {
    let newUrl = "";

    if (category && category !== "All") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: category,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    }

    router.push(newUrl, {scroll: false});
  };

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-gray-50 dark:bg-black px-4 py-2">
      <List className="size-6 text-gray-500" />
      <Select
        defaultValue={category}
        onValueChange={(value: string) => onCategoryChange(value)}
      >
        <SelectTrigger className="select-field text-gray-500">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All" className="select-item p-regular-14">
            All
          </SelectItem>
          {categories?.map((category) => (
            <SelectItem
              value={category.name}
              key={category._id}
              className="select-item p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
