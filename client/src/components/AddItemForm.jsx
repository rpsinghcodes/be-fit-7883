import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDish } from "../api/api"; // Import the addDish function
import { ToastContainer, toast } from "react-toastify"; // Import toastify CSS

const formSchema = z.object({
  dishName: z.string().min(2, {
    message: "Dish name must be at least 2 characters.",
  }),
  items: z.array(
    z.object({
      name: z.string().min(2),
      calorie: z.number().min(0),
      quantity: z.number().min(1),
    })
  ),
});

export function AddItemForm({ Show }) {
  const [items, setItems] = useState([{ name: "", calorie: 0, quantity: 1 }]);
  const [open, setOpen] = useState(false); // State to control dialog open/close
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dishName: "",
      items: [{ name: "", calorie: 0, quantity: 1 }],
    },
  });

  const onSubmit = async (data) => {
    try {
      await addDish({
        name: data.dishName,
        items: data.items,
      });
      handleCancel(); 
      setOpen(false);
      toast.success("Dish item has been added succesfully!")
      console.log("done...........")
//      Show();
    } catch (error) {
      console.error("Error saving dish:", error);
      toast.error("Failed to add dish.");
    }
  };

  const addItem = () => {
    setItems([...items, { name: "", calorie: 0, quantity: 1 }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleCancel = () => {
    form.reset({
      dishName: "",
      items: [{ name: "", calorie: 0, quantity: 1 }],
    });
    setItems([{ name: "", calorie: 0, quantity: 1 }]);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) handleCancel(); // Clear the form when dialog is closed
      setOpen(isOpen);
    }}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add New Item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Dish</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="dishName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dish Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter dish name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="space-y-4">
              {items.map((_, index) => (
                <div key={index} className="flex gap-4 items-end">
                  <FormField
                    control={form.control}
                    name={`items.${index}.name`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Item Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter item name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.calorie`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Calories</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="Calories" 
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="Quantity" 
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {items.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeItem(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={addItem}
              className="w-full"
            >
              Add Another Item
            </Button>

            <div className="flex justify-end gap-4 pt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save Dish</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}