import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { PasswordInput } from "../components/ui/password-input";
import { Field } from "../components/ui/field";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";

const LoginPage = () => {
  return (
    <div className="image_login">
      <Flex minH="100vh" align="center" justify="center">
        <Stack mx="auto" maxW="lg" py={12} px={1}>
          <Stack align="center">
            <Heading fontSize="3xl" sm={{ fontSize: "4xl" }} my="30px">
              Sign in to your account
            </Heading>
          </Stack>
          <Box
            as="form"
            rounded="lg"
            boxShadow="lg"
            p={8}
            // onSubmit={submitHandler}
          >
            <Stack>
              <div id="email" className="space-y-1 py-2">
                <Field
                  //   invalid={isEmail}
                  label="Email address"
                  errorText="Email field is required"
                >
                  <Input
                    name="identifier"
                    id="email"
                    type="email"
                    // value={user.identifier}
                    // onChange={changeHandler}
                    className="border px-2"
                  />
                </Field>
              </div>

              <div id="password" className="space-y-1 py-2">
                <Field
                  //   invalid={isPassword}
                  label="Password"
                  errorText="Password field is required"
                >
                  <PasswordInput
                    name="password"
                    id="password"
                    type="password"
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
                  align="start"
                  justify="space-between"
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color="blue.400">Forgot password?</Text>
                </Stack>
                <Button
                  type="submit"
                  //   loading={loading}
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
    </div>
  );
};

export default LoginPage;
