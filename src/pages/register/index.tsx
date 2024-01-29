import { AuthPage } from "@refinedev/mui";
import React from "react";
import {Box, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const RegisterForm = () => {
    return (
        <div>
            <form>
                <Box display="flex" flexDirection={"column"}
                     maxWidth={400} alignItems="center" justifyContent={"center"}
                     margin="auto"
                     marginTop={5}
                     padding={3}
                     borderRadius={5}
                     boxShadow={"5px 5px 10px #ccc"}
                     sx={{
                         ":hover": {
                             boxShadow:'10px 10px 20px #ccc'
                         }
                     }}
                >
                    <Typography variant="h2" padding={3} textAlign="center">Log In</Typography>
                    <TextField variant="outlined" placeholder="Username" type={"text"}></TextField>
                </Box>
            </form>
        </div>
    )
}
export const Register = () => {
  return <AuthPage type="register" renderContent={(content:React.ReactNode) => {
    return (
        <>
          {content}
        </>
    )
  }}/>;
};
