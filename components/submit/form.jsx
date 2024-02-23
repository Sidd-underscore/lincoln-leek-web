"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  link: z.string().url({ message: "Please enter a link! Links include 'https://'" }),
  email: z.string().email({ message: "Please enter a valid email!" }),
  studentID: z.string().min(6, { message: "Please enter a valid Student ID!" }),
  anonymous: z.boolean().default(true),
});

export function SubmitArticleForm({slackURL}) {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
      email: "",
      studentID: "",
      anonymous: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    fetch(
      slackURL,
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          text:
            "Wakey wakey people! A new article wants to be submitted. \n\n Here is the link: " +
            values.link +
            "\n Email: " +
            values.email +
            "\n Student ID: " +
            values.studentID +
            "\n Submit anonymously: " +
            values.anonymous,
        }),
      },
    );
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Google Docs Link</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://docs.google.com/document/u/0/"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please make sure the Google Doc has the correct permssion
                settings:{" "}
                <strong>lincolnmgroup@gmail.com must have edit access</strong>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="jdoe1234@student.pps.net" {...field} />
              </FormControl>
              <FormDescription>
                This is only for potential communication that may happen to
                clarify issues, provide feedback, or anything else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="studentID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Student ID</FormLabel>
              <FormControl>
                <Input placeholder="123456" {...field} />
              </FormControl>
              <FormDescription>
                This will only be used if required by outside authority or other
                reasons. Note that we will not share this without making sure it
                is absolutely necessary. It will also be encrypted.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="anonymous"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Submit anonymously</FormLabel>
                <FormDescription>
                  Your email and student ID still need to be collected, but it
                  will be encrypted and only used if necessary.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
