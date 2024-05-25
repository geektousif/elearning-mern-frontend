import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { useEffect, useState } from "react";

const Login = () => {
  // trigger loading
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 30000); // 3 seconds delay

  //   return () => clearTimeout(timer);
  // }, []);
  // if (!isLoaded) {
  //   throw new Promise((resolve) => setTimeout(resolve, 3000));
  // }

  // TODO correct alignment
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Sign in to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid items-center w-full gap-4">
              <RadioGroup className="flex" defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="teacher" id="teacher" checked />
                  <Label htmlFor="teacher">Teacher</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student">Student</Label>
                </div>
              </RadioGroup>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email Address" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
