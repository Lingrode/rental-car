import { useState } from "react";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const BookForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    iziToast.success({
      title: "Success",
      message: "Your booking has been submitted!",
      position: "topRight",
      timeout: 5000,
    });
    setForm({ name: "", email: "", date: "", comment: "" });
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2 rounded-xl border border-[#DADDE1] p-8 flex flex-col gap-4 items-center"
    >
      <div className="self-start">
        <h3 className="text-xl font-semibold mb-2">Book your car now</h3>
        <p className="mb-2">Stay connected! We are always ready to help you.</p>
      </div>
      <Input
        name="name"
        placeholder="Name*"
        value={form.name}
        onChange={handleChange}
        required
        className="h-[48px] px-5"
      />
      <Input
        name="email"
        type="email"
        placeholder="Email*"
        value={form.email}
        onChange={handleChange}
        required
        className="h-[48px] px-5"
      />
      <Input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
        className="h-[48px] px-5"
      />
      <Textarea
        name="comment"
        placeholder="Comment"
        value={form.comment}
        onChange={handleChange}
        className="!mb-4 border-none shadow-none bg-[#F7F7F7] h-[88px] px-5"
      />
      <Button type="submit" className="m-auto">
        Send
      </Button>
    </form>
  );
};

export default BookForm;
