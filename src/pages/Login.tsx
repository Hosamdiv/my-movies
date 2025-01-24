import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { PasswordInput } from "../components/ui/password-input";
import { Field } from "../components/ui/field";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQueryClient } from "react-query";
import axios from "axios";
import CookieService from "../hooks/CookieService";
import { useNavigate } from "react-router-dom";
import { Toaster, toaster } from "../components/ui/toaster";
interface IUser {
  identifier: string;
  password: string;
}
interface RootLayoutProps {
  isAuthenticated: boolean;
}
const LoginPage = ({ isAuthenticated }: RootLayoutProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({
    identifier: "",
    password: "",
  });
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      navigate(-1);
    }
  }, [isAuthenticated]);

  const apiLogin = async () => {
    const { data } = await axios.post(
      `http://localhost:1337/api/auth/local`,
      user
    );
    return data;
  };

  const queryClient = useQueryClient();

  const submitHandler = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!user.identifier && !user.password) {
      setIsEmail(true);
      setIsPassword(true);
      return;
    }
    if (!user.identifier) {
      setIsEmail(true);
      return;
    }
    if (!user.password) {
      setIsPassword(true);
      return;
    }
    setIsEmail(false);
    setIsPassword(false);

    try {
      const data = await queryClient.fetchQuery("login", apiLogin);
      const date = new Date();
      const IN_DAYS = 3;
      const EXPIRES_IN_DAYS = 1000 * 60 * 60 * 24 * IN_DAYS;
      date.setTime(date.getTime() + EXPIRES_IN_DAYS);
      const options = { path: "/", expires: date };
      CookieService.set("jwt", data.jwt, options);
      toaster.create({
        title: "Logged in successfully",
        type: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      console.error("Login Failed:", err);
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
                Sign in to your account
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
                <div id="email" className="space-y-1 py-2">
                  <Field
                    invalid={isEmail}
                    label="Email address"
                    errorText="Email field is required"
                  >
                    <Input
                      name="identifier"
                      id="email"
                      type="email"
                      placeholder="Email address"
                      value={user.identifier}
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
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
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

export default LoginPage;
