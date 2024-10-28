import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {ICategory} from "@/lib/database/models/category.model";
import {startTransition, useEffect, useState} from "react";
import {Input} from "../input";
import {SquarePlus} from "lucide-react";
import {createCategory, getAllCategories} from "@/lib/actions/category.actions";

type DropdownProps = {
  onChangeHandler?: () => void;
  value?: string;
};

export default function Dropdown({onChangeHandler, value}: DropdownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewcategory] = useState("");

  const handleAddCategory = () => {
    createCategory({categoryName: newCategory.trim()}).then((category) => {
      setCategories((prevState) => [...prevState, category]);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categoryList && setCategories(categoryList);
    };
    getCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem key={category._id} value={category._id}>
              {category.name}
            </SelectItem>
          ))}

        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full gap-1 items-center rounded-sm py-3 text-primary-500 focus:text-primary-500 hover:bg-primary-50 ">
            <SquarePlus /> Add New Category
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>New Category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  placeholder="Category name"
                  className="input-field mt-3"
                  onChange={(e) => setNewcategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => startTransition(handleAddCategory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
}
