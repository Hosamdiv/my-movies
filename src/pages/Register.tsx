import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Field } from "../components/ui/field";
import { PasswordInput } from "../components/ui/password-input";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { toaster, Toaster } from "../components/ui/toaster";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQueryClient } from "react-query";
import CookieService from "../hooks/CookieService";
interface IUser {
  username: string;
  email: string;
  password: string;
}
interface RootLayoutProps {
  isAuthenticated: boolean;
}
const RegisterPage = ({ isAuthenticated }: RootLayoutProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });
  const [isUsername, setIsUsername] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const apiRegister = async () => {
    const { data } = await axios.post(
      "http://localhost:1337/api/auth/local/register",
      user
    );
    return data;
  };
  const queryClient = useQueryClient();

  const submitHandler = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!user.email && !user.password && !user.username) {
      setIsEmail(true);
      setIsPassword(true);
      return;
    }
    if (!user.username) {
      setIsEmail(true);
      return;
    }
    if (!user.email) {
      setIsEmail(true);
      return;
    }
    if (!user.password) {
      setIsPassword(true);
      return;
    }
    setIsUsername(false);
    setIsEmail(false);
    setIsPassword(false);

    try {
      const data = await queryClient.fetchQuery("login", apiRegister);
      console.log(data);
      const date = new Date();
      const IN_DAYS = 3;
      const EXPIRES_IN_DAYS = 1000 * 60 * 60 * 24 * IN_DAYS;
      date.setTime(date.getTime() + EXPIRES_IN_DAYS);
      const options = { path: "/", expires: date };
      CookieService.set("jwt", data.jwt, options);
      toaster.create({
        title: "Account Created Successfully!",
        type: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      console.error("register Failed:", err);
      toaster.create({
        title: "Request failed with status code 400",
        type: "error",
      });
    }
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="image_login">
        <Flex minH="100vh" align="center" justify="center">
          <Stack mx="auto" maxW="lg" py={12} px={1}>
            <Stack align="center">
              <Heading fontSize="2xl" sm={{ fontSize: "4xl" }} my="30px">
                Register to get access!
              </Heading>
            </Stack>
            <Box
              as="form"
              rounded="lg"
              boxShadow="2xl"
              p={8}
              onSubmit={submitHandler}
            >
              <Stack>
                <div id="username" className="space-y-1 py-2">
                  <Field
                    invalid={isUsername}
                    label="User Name"
                    errorText="Email field is required"
                  >
                    <Input
                      name="username"
                      id="username"
                      type="text"
                      placeholder="User Name"
                      value={user.username}
                      onChange={changeHandler}
                      className="border px-2"
                    />
                  </Field>
                </div>
                <div id="email" className="space-y-1 py-2">
                  <Field
                    invalid={isEmail}
                    label="Email address"
                    errorText="Email field is required"
                  >
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email address"
                      value={user.email}
                      onChange={changeHandler}
                      className="border px-2"
                    />
                  </Field>
                </div>
                <div id="password" className="space-y-1 py-2">
                  <Field
                    invalid={isPassword}
                    label="Password"
                    errorText="Password field is required"
                  >
                    <PasswordInput
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={changeHandler}
                      _focus={{
                        borderColor: "blue.400",
                        boxShadow: "0 0 0 1px blue.400",
                      }}
                      className="border px-2"
                    />
                  </Field>
                </div>
                <Stack>
                  <Stack
                    my="10px"
                    direction={{ base: "column", sm: "row" }}
                    align="center"
                    justify="space-between"
                  >
                    <Checkbox>
                      <Text>Remember me</Text>
                    </Checkbox>

                    <Text color="blue.400">Forgot password?</Text>
                  </Stack>

                  <Button
                    type="submit"
                    bg="blue.400"
                    color="white"
                    w={"full"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Register
                  </Button>
                  <Link to={`/login`}>
                    <Button className="bg-[#e50914] text-white w-full">
                      Sign in
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        <Toaster />
      </div>
    </>
  );
};

export default RegisterPage;
